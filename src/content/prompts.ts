import type { PromptData } from "./types";

export const KNOWLEDGE_PROMPT: PromptData = {
  id: "knowledge",
  number: 0,
  title: "KNOWLEDGE — configuração inicial",
  when: "Cole em Project Settings → Knowledge",
  body: `Antes de começar qualquer resposta, diga: "Lendo documentação"

Sempre leia os documentos em /docs antes de agir. Use masterplan.md e 08-implementacao.md como fonte de verdade. Siga RULES.md em todo código que escrever.

A cada grupo de tarefas concluído:
1. Marque as tarefas como feitas no tasks.md
2. Adicione entrada no CHANGELOG.md: [DATA] [ADD] O que foi construído — comportamento principal
3. Me diga: o que foi feito, como testar, qual é o próximo grupo

Ao corrigir qualquer problema:
1. Identifique a causa raiz antes de corrigir
2. Corrija seguindo RULES.md
3. Registre no CHANGELOG.md com causa raiz
4. Se a correção revelar lacuna em algum documento, me avise antes de seguir`,
};

export const PROMPTS: PromptData[] = [
  {
    id: "p1",
    number: 1,
    title: "Confirmar leitura dos documentos",
    when: "Manda uma vez após subir os arquivos",
    body: `Leia todos os documentos na pasta /docs. Confirme que leu cada um listando os arquivos encontrados. Depois me diga qual é o primeiro grupo de tarefas a executar conforme o 08-implementacao.md.`,
  },
  {
    id: "p2",
    number: 2,
    title: "Build padrão",
    when: "Repete após cada grupo concluído",
    body: `Leia o tasks.md dentro de 08-implementacao.md. Verifique qual grupo de tarefas é o próximo. Leia os documentos relevantes para aquele grupo em /docs. Execute as tarefas seguindo RULES.md. Atualize o CHANGELOG.md e o tasks.md. Me diga o que foi feito, como testar e qual é o próximo grupo.`,
  },
  {
    id: "p3",
    number: 3,
    title: "Adicionar novo documento de processo",
    when: "Usa antes de construir cada módulo novo",
    body: `Adicionei o arquivo docs/02-processos/[nome].md. Leia este documento — ele descreve o comportamento detalhado do módulo [nome]. Use-o junto com os demais docs para executar o próximo grupo de tarefas.`,
  },
  {
    id: "p4",
    number: 4,
    title: "Corrigir problema encontrado no teste",
    body: `Encontrei o seguinte problema: [descrição — o que você fez, o que esperava, o que aconteceu]

Antes de corrigir: identifique a causa raiz. Corrija seguindo RULES.md. Registre no CHANGELOG.md com causa raiz. Se algum documento precisar ser atualizado, me avise antes de seguir.`,
  },
  {
    id: "p5",
    number: 5,
    title: "Corrigir problema da ferramenta de segurança nativa",
    body: `A ferramenta de segurança do Lovable identificou: [cole a descrição exata do problema]

Corrija seguindo 06-seguranca.md e RULES.md. Após corrigir, registre no CHANGELOG.md: [DATA] [SECURITY] O que estava errado — o que foi corrigido — regra aplicada.`,
  },
  {
    id: "p6",
    number: 6,
    title: "Criar CHANGELOG no meio do projeto",
    when: "Para quando esqueceu de configurar no início",
    body: `Preciso adicionar um CHANGELOG.md ao projeto. Crie o arquivo em /docs/CHANGELOG.md. Com base nos commits do GitHub e no que já foi construído, reconstrua as entradas de histórico no formato: [DATA] [ADD] O que foi feito — módulo — comportamento principal.

A partir de agora, a cada grupo de tarefas concluído, adicione automaticamente uma entrada neste arquivo.`,
  },
  {
    id: "p7",
    number: 7,
    title: "Revisar projeto quando algo está misteriosamente quebrado",
    body: `Algo está quebrado e não consigo identificar a causa. Revise o projeto de forma abrangente:
1. Consulte os logs do Supabase em busca de erros
2. Verifique se as políticas RLS estão aplicadas conforme 06-seguranca.md
3. Verifique se os triggers estão ativos conforme 05-dados.md
4. Relate o que encontrou antes de corrigir qualquer coisa.`,
  },
  {
    id: "p8",
    number: 8,
    title: "Quando o Lovable não para de errar no mesmo problema",
    body: `Você tentou corrigir [descrição] X vezes e o problema persiste. Pare de tentar corrigir diretamente. Descreva em detalhes: o que você acha que está causando o problema, quais arquivos estão envolvidos, o que já foi tentado. Vou levar isso para o Claude Code analisar.`,
  },
  {
    id: "p9",
    number: 9,
    title: "Fechar versão e publicar",
    body: `Todos os grupos foram concluídos e testados. Adicione no CHANGELOG.md: [DATA] [RELEASE] Versão publicada — módulos incluídos: [lista dos grupos concluídos]. Prepare o projeto para publicação.`,
  },
  {
    id: "p10",
    number: 10,
    title: "Retomar projeto após pausa",
    body: `Estou retomando o projeto após [X dias/semanas]. Leia o CHANGELOG.md para entender o que foi feito. Leia o tasks.md para ver o que está pendente. Me dê um resumo do estado atual e qual é o próximo passo.`,
  },
  {
    id: "p11",
    number: 11,
    title: "Revisão de processo pós-build",
    when: "Use quando o projeto estiver publicado e funcionando",
    body: `Agora que o projeto está publicado, faça uma revisão ampla de boas práticas. Com base em todo seu conhecimento de projetos Lovable, me diz o que sente que falta melhorar em termos de processos, segurança, testes e observabilidade. Não implemente nada agora. Só diagnostique e priorize por impacto.`,
  },
  {
    id: "p12",
    number: 12,
    title: "Checklist de aceite antes de marcar grupo como concluído",
    when: "Roda ao final de cada grupo antes de avançar para o próximo",
    body: `Antes de marcar o Grupo [X] como concluído, preciso validar manualmente. Me dá um checklist com 1 cenário ponta-a-ponta para cada funcionalidade construída neste grupo — do ponto de entrada ao resultado esperado, incluindo o que deve aparecer no banco de dados.`,
  },
];

export function getPrompt(id: string): PromptData | undefined {
  if (id === "knowledge") return KNOWLEDGE_PROMPT;
  return PROMPTS.find((p) => p.id === id);
}
