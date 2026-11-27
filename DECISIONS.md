# Decisões do Selo de Risco de IA

## Decisões em vigor

- Nome da ferramenta: "Radar de Risco de IA"; o subtítulo passa a "Avaliação de riscos de plataformas educacionais com IA" (27/11/2026).

- Ícones de informação (campos de identificação e bases normativas): abrem ao passar o mouse e fecham ao tirar o mouse; no toque, abrem e fecham com um toque (27/11/2026).

- Setores ainda não avaliados aparecem na cor clara do eixo a que pertencem (27/11/2026).

- Publicação: alterações desta sessão autorizadas para produção pela usuária, via branch `main` de `femascheti/selo-de-risco-ia`, no projeto `selo-de-risco-ia` da equipe Vercel `femascheti-playground` (27/11/2026).

- Separação angular entre os três eixos do selo: 1,2 grau (27/11/2026).

- Exemplos na identificação: “GatomIA”, “Versão 0.2 - Plano gratuito” e “Maria e João”; textos de exemplo em cinza mais claro (27/11/2026).

- Ícones de ajuda dos campos: símbolo SVG igual ao das bases normativas, com 18 pixels e alinhado à direita do cabeçalho do campo; os quatro cabeçalhos de identificação têm a mesma altura mínima (27/11/2026).

- Feedback externo: orientações de identificação, exemplos de preenchimento, nomes dos eixos na faixa externa com cores suaves e cópia do roteiro em HTML e texto simples (27/11/2026).
- Arquitetura: site estático com acervo no navegador, conforme decisão de 24/11/2026 em `../../DECISIONS.md`.

## 2026-11-27: melhorias do feedback externo

- **Contexto**: a usuária indicou a tarefa “Implementar funcionalidades do feedback” no Notion, https://app.notion.com/p/4253cdd92c4b8068a716ccf23fd6f216, e aprovou o plano local em três etapas com “Pode sim!”.
- **Decisão**: adicionar ajudas expansíveis para Plataforma e Versão ou plano, exemplos nos campos de texto, retirar o aviso de obrigatoriedade da apresentação, mover os nomes dos três eixos para uma faixa externa em tons suaves e copiar o roteiro com representações HTML e texto simples. Se a escrita de HTML falhar, tentar texto simples e informar o resultado.
- **Porquê**: esclarecer o preenchimento, distinguir os eixos sem competir com os níveis de risco e preservar títulos, listas e destaques na cópia para aplicativos compatíveis.
- **Origem**: plano proposto pelo Codex e aprovado pela usuária. Redação das ajudas, exemplos e paleta são escolhas de implementação para revisão visual.
- **Escopo**: alterações locais em `index.html`, `app.js` e `style.css`. A geração do relatório continua exigindo os nove critérios, enquanto o salvamento para continuar depois permite avaliação parcial; essa regra existente não foi alterada pelo pedido de remover o aviso. Não houve push, deploy ou escrita no Notion.
- **Verificação**: sintaxe JavaScript conferida; Chrome local confirmou ajudas, exemplos, ausência do aviso, três nomes de eixos e ausência de rolagem horizontal em 1280 e 390 pixels. A cópia foi conferida com interceptação da API no navegador, incluindo HTML com títulos e listas, texto simples e falha das duas tentativas. A colagem em aplicativos externos permanece a conferir. Capturas locais em `/tmp/selo-feedback-1280.png`, `/tmp/selo-feedback-390.png` e `/tmp/selo-feedback-dark.png`.
- **Referência técnica**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write.
- **Substitui**: apresentação anterior dos eixos e cópia exclusivamente em texto simples. Preserva arquitetura, armazenamento e regras do selo.
- **Reversão**: reverter apenas o diff desta entrega nos três arquivos de aplicação e registrar a reversão, preservando eventuais alterações posteriores.

## 2026-11-27: ajuste dos ícones de informação

- **Contexto**: após visualizar o formulário, a usuária pediu ícones menores, alinhados à direita, com o mesmo símbolo das bases normativas.
- **Decisão**: reutilizar o desenho SVG das bases normativas em 18 pixels, deslocar apenas o controle de ajuda para a direita e ancorar o texto expansível à sua borda direita.
- **Porquê**: atender ao ajuste visual solicitado e manter consistência entre os símbolos de informação.
- **Origem**: pedido explícito da usuária no chat.
- **Substitui**: ícone tipográfico de informação junto ao rótulo.

## 2026-11-27: exemplos concretos no formulário

- **Contexto**: a usuária pediu exemplos concretos nos três campos de identificação e cinza mais claro nos textos de exemplo.
- **Decisão**: usar “GatomIA”, “Versão 0.2 - Plano gratuito” e “Maria e João” como placeholders; clarear os placeholders misturando 70% da cor secundária com o fundo do tema.
- **Porquê**: mostrar o formato esperado da resposta e distinguir o exemplo do conteúdo digitado.
- **Origem**: exemplos e clareamento pedidos explicitamente pela usuária; proporção da mistura escolhida pelo Codex para revisão visual.
- **Substitui**: exemplos anteriores dos campos de identificação e cor anterior dos placeholders.

## 2026-11-27: alinhamento dos campos de identificação

- **Contexto**: a usuária identificou que os ícones de ajuda deslocaram os dois primeiros campos em relação aos demais.
- **Decisão**: aplicar o mesmo contêiner de cabeçalho aos quatro campos, mantendo a altura mínima comum de 28 pixels.
- **Porquê**: alinhar rótulos e caixas de preenchimento independentemente da presença de ícone.
- **Origem**: correção solicitada pela usuária no chat.
- **Substitui**: cabeçalhos com estruturas diferentes na identificação.

## 2026-11-27: redução do espaço entre eixos

- **Contexto**: a usuária pediu reduzir o espaço entre os três eixos do círculo.
- **Decisão**: reduzir a separação angular de 3 para 1,2 grau, preservando uma linha de separação entre os eixos.
- **Porquê**: tornar o círculo mais contínuo sem unir visualmente as categorias.
- **Origem**: redução solicitada pela usuária; medida escolhida pelo Codex para revisão visual.
- **Substitui**: separação angular anterior de 3 graus.

## 2026-11-27: publicação das melhorias em produção

- **Contexto**: após revisar o formulário e o círculo localmente, a usuária pediu enviar as alterações para produção.
- **Decisão**: versionar as mudanças desta sessão e enviar a branch `main` para o repositório `femascheti/selo-de-risco-ia`, acompanhando a publicação no projeto Vercel `selo-de-risco-ia`, equipe `femascheti-playground`, domínio https://selo-de-risco-ia.vercel.app.
- **Porquê**: disponibilizar a versão revisada no endereço de produção existente.
- **Origem**: autorização explícita da usuária no chat.
- **Conferência prévia**: branch remota e produção anterior no commit `ac46a3e6ee37ad426bc50736c624bc2c125bf6a9`; destino de produção confirmado pelo conector Vercel, projeto `prj_KhQjwNTl8ZA5Di6dauOOlpKQvPS3`.
- **Substitui**: restrição de entrega apenas local desta sessão; preserva armazenamento e regras de avaliação.
- **Reversão**: reverter o commit de melhorias e publicar a reversão ou restaurar a versão anterior na Vercel, se solicitado.

## 2026-11-27: Radar, ícones por mouse-over e cores dos eixos

- **Contexto**: a usuária pediu, no Claude, três ajustes: ícones "i" abrindo por mouse-over em vez de exigir clique para fechar; critérios na cor clara do seu eixo; troca de "Matriz de riscos de plataformas educacionais com IA" por "Avaliação de riscos de plataformas educacionais com IA" e da palavra "Selo" por "Radar".
- **Decisão**: (1) as ajudas de Plataforma e Versão deixam de ser `<details>` e passam a botão com dica (`role="tooltip"`), visível em `:hover` e `:focus-within`; as bases normativas mantêm a dica por hover e passam a fechar ao tirar o mouse, mesmo depois de um clique; no toque, um toque abre e outro fecha; Esc fecha. (2) Na roda, o preenchimento dos setores sem nível usa `var(--axis-<eixo>)` em vez de `--wheel-empty`; a legenda do acervo foi atualizada. (3) "Selo/selos" virou "Radar/radares" em todo texto visível (título, menu, botões, relatório, rótulos de acessibilidade).
- **Fora do escopo**: identificadores de código, classes CSS, chave do `localStorage` (`selo-acervo-v1`), nome do repositório e domínio continuam com "selo", para não perder acervos já salvos nem quebrar o endereço. A palavra "selos" na rubrica de engajamento (recompensas de gamificação) e o "selo kidSAFE" nos registros do acervo foram mantidos, porque têm outro sentido.
- **Origem**: pedido explícito da usuária; implementação proposta pelo Claude.
- **Verificação**: sintaxe JavaScript conferida; em Chromium local (1280 px), as dicas abrem no hover, fecham ao sair, inclusive após clique, e a roda mostra os três eixos com cores distintas.
- **Reversão**: reverter este commit.

## 2026-11-27: apresentação de boas-vindas e página "Antes de começar"

- **Contexto**: a usuária pediu uma parte introdutória (onboarding). Ela aprovou no Claude um protótipo com duas partes: apresentação de boas-vindas e lista de preparação.
- **Decisão**: (1) na primeira visita aparece uma janela (`<dialog id="welcome">`) com 4 passos: Boas-vindas, Quem participa (selos de área), Como funciona (roda, escala e regra do pior nível) e O que você recebe. Ela pode ser pulada e fecha com Esc. O último passo leva a `#preparar`. A janela não abre sozinha quando a página já começa em `#acervo`, para não atrapalhar quem recebeu um link do acervo. O botão "Como funciona", no menu, reabre a janela. A chave `radar-boasvindas-v1` no `localStorage` registra que a apresentação já foi vista. (2) Nova página `#preparar`, "Antes de começar", com 4 blocos de itens para marcar (grupo, documentos, testes, divisão), uma tabela de áreas por critério (`AREAS` em `app.js`), o botão "Começar a avaliação" e a opção de imprimir ou salvar em PDF. Há links para essa página no Início e em Avaliar.
- **Origem**: pedido da usuária; textos redigidos pelo Claude e aprovados no protótipo. A divisão por área repete a sugestão da Entrega 4 e é apresentada como ajustável.
- **Verificação**: Chromium local, 1280 px e 390 px; a janela abre na primeira visita, não reabre depois e leva a `#preparar`; nenhum erro de JavaScript.
- **Reversão**: reverter este commit.

## 2026-11-27: retirada do indicador de evidência e botão de gerar só ao final

- **Contexto**: a usuária pediu excluir o indicador "Evidência de impacto na aprendizagem" e impedir que o botão "Gerar radar e relatório" apareça antes de os 9 critérios serem avaliados.
- **Decisão**: (1) foram removidos do formulário, do radar, do relatório na tela e do relatório baixado a seção do indicador, os cartões de nível, o campo de fonte e o selo "Evidência de impacto". Novas avaliações e rascunhos deixam de gravar `evidencia`. Registros antigos que tenham esse campo continuam no acervo, mas ele não é mais exibido. (2) O botão "Gerar radar e relatório" fica oculto até os 9 critérios terem nível. Enquanto isso, aparece a frase "Avalie os 9 critérios para gerar o radar e o relatório." (3) O cabeçalho do relatório baixado ainda dizia "SELO DE RISCO DE IA" e passou a "RADAR DE RISCO DE IA".
- **Origem**: pedido explícito da usuária no chat; o item (3) é uma correção do Claude que completa a troca de nome anterior.
- **Verificação**: Chromium local; o botão continua oculto com 8 de 9, aparece com 9 de 9 e volta a se ocultar ao limpar o formulário; o relatório não mostra o indicador; nenhum erro de JavaScript.
- **Reversão**: reverter este commit.
