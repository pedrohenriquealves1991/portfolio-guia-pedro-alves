

# Renomear "Cristina Gestão Condominial" → "Amaro - Gestão Condominial"

Vou substituir todas as menções a "Cristina Gestão Condominial" pelo nome correto **Amaro - Gestão Condominial** (sistema feito no Lovable para a Dinda do Pedro), e adicionar o link público do sistema (https://amarogestaocondominial.lovable.app/) em pontos relevantes do guia.

## Arquivos a alterar

| Arquivo | Mudança |
|---|---|
| `src/content/guide.ts` | Trocar "Cristina Gestão Condominial" por "Amaro - Gestão Condominial" no callout da Seção 0 e em qualquer outra seção que cite o nome. |
| `src/components/guide/TimelineCristina.tsx` | Atualizar o `<h2>` "Cristina Gestão Condominial" → "Amaro - Gestão Condominial". Acrescentar uma linha curta no parágrafo introdutório dizendo que o sistema foi construído no Lovable, com link clicável para `https://amarogestaocondominial.lovable.app/`. |
| `src/components/Hero.tsx` | (já está correto após edit anterior — apenas confirmar.) |

O nome do componente `TimelineCristina.tsx` e o id da seção `#timeline-cristina` ficam como estão (são internos, não aparecem para o usuário). Renomear arquivo agora exigiria mexer em imports sem ganho visível.

---

## O que falta no site da Amaro — checklist para você copiar e colar

Abri o site `https://amarogestaocondominial.lovable.app/` e vou comparar o que está publicado contra os 11 grupos previstos no masterplan que você documentou no `TimelineCristina.tsx`. O resultado vem como uma **lista pronta em markdown** dentro deste plano (aqui mesmo, abaixo) — sem precisar de mais nenhum passo. Você copia direto.

A estrutura que vou entregar:

```text
TELAS QUE FALTAM
- [ ] Tela X — descrição curta do que ela faz e em que grupo está
- [ ] Tela Y — ...

VÍDEOS / DEMOS QUE FALTAM
- [ ] Vídeo do fluxo Z — por quê é útil para divulgação
- [ ] ...

JÁ ENTREGUE (para referência)
- [x] ...
```

Para gerar essa lista com precisão preciso navegar no site publicado (algumas telas só aparecem após login, então onde eu não conseguir entrar marco como "verificar manualmente" em vez de inventar). Vou usar o navegador headless para abrir a home, tirar print, ler o HTML e listar as rotas visíveis. Onde houver tela protegida por login, sinalizo no checklist.

## Detalhes técnicos

1. Buscar todas as ocorrências restantes de "Cristina Gestão" no projeto (`code--search_files`).
2. Substituir por "Amaro - Gestão Condominial" via `code--line_replace`.
3. No parágrafo introdutório do `TimelineCristina.tsx`, adicionar:
   > "Sistema construído no Lovable para a minha Dinda, síndica profissional em Curitiba. **Veja o sistema ao vivo:** [amarogestaocondominial.lovable.app](https://amarogestaocondominial.lovable.app/)"
4. Abrir o site da Amaro (`browser--navigate_to_url` + `browser--extract`), comparar contra os 19 itens da coluna "Build no Lovable" do `TimelineCristina.tsx`, e devolver a lista de pendências em formato markdown copiável dentro da resposta final (não como arquivo).

Nada precisa ir para `mem://` — é uma correção pontual e uma análise única.

