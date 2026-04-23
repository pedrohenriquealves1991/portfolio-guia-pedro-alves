import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { supabase } from "@/integrations/supabase/client";
import { downloadGuideMarkdown } from "@/lib/exportGuide";

interface DownloadGateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const schema = z.object({
  name: z.string().trim().min(1, "required").max(100),
  email: z.string().trim().email("invalid_email").max(254),
  consent: z.literal(true, {
    errorMap: () => ({ message: "consent_required" }),
  }),
});

type FormValues = z.infer<typeof schema>;

export const DownloadGateDialog = ({
  open,
  onOpenChange,
}: DownloadGateDialogProps) => {
  const { lang } = useLanguage();
  const t = translations.downloadGate;
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", consent: false as unknown as true },
  });

  const consentValue = watch("consent");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke(
        "register-guide-download",
        {
          body: {
            name: values.name,
            email: values.email,
            language: lang,
          },
        }
      );

      if (error) {
        console.error(error);
        toast.error(t.errorGeneric[lang]);
        return;
      }

      downloadGuideMarkdown();
      toast.success(t.success[lang]);
      reset();
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast.error(t.errorGeneric[lang]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-primary border-2 border-foreground rounded-sm shadow-[8px_8px_0_0_hsl(var(--foreground))] max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
            {t.title[lang]}
          </DialogTitle>
          <DialogDescription className="text-foreground/80 text-sm pt-1">
            {t.subtitle[lang]}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label
              htmlFor="dl-name"
              className="text-xs font-bold uppercase tracking-wider text-foreground"
            >
              {t.name[lang]}
            </Label>
            <Input
              id="dl-name"
              {...register("name")}
              placeholder={t.namePlaceholder[lang]}
              className="bg-background border-2 border-foreground rounded-sm"
              disabled={submitting}
            />
            {errors.name && (
              <p className="text-xs font-medium text-destructive">
                {t.nameError[lang]}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="dl-email"
              className="text-xs font-bold uppercase tracking-wider text-foreground"
            >
              {t.email[lang]}
            </Label>
            <Input
              id="dl-email"
              type="email"
              {...register("email")}
              placeholder="voce@exemplo.com"
              className="bg-background border-2 border-foreground rounded-sm"
              disabled={submitting}
            />
            {errors.email && (
              <p className="text-xs font-medium text-destructive">
                {t.emailError[lang]}
              </p>
            )}
          </div>

          <div className="flex items-start gap-2 pt-1">
            <Checkbox
              id="dl-consent"
              checked={!!consentValue}
              onCheckedChange={(v) =>
                setValue("consent", v === true ? (true as const) : (false as unknown as true), {
                  shouldValidate: true,
                })
              }
              className="mt-0.5 border-2 border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
              disabled={submitting}
            />
            <Label
              htmlFor="dl-consent"
              className="text-xs text-foreground/80 leading-relaxed cursor-pointer"
            >
              {t.consent[lang]}
            </Label>
          </div>
          {errors.consent && (
            <p className="text-xs font-medium text-destructive -mt-2">
              {t.consentError[lang]}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-display font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-foreground/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {submitting ? t.submitting[lang] : t.submit[lang]}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadGateDialog;
