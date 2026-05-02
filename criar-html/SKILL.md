---
name: criar-html
description: Motor avançado de apresentações interativas HTML5. Focado em UX imersiva, inteligência de layout e paridade estética entre temas Light, Dark e SENAI.
---

# SKILL: CriarHTML (Premium Presentation Engine)

Esta skill transforma textos brutos ou prompts criativos em apresentações digitais de alto impacto. O motor utiliza uma arquitetura de 17 layouts padronizados e inteligência artificial para mapear o conteúdo ao melhor design visual.

## 🛑 PROTOCOLO SOCRÁTICO (Obrigatório)
Sempre que receber uma solicitação de criação de slides, você **DEVE** parar e perguntar:
1. **Tema Desejado**: Escolha entre **Light** (Clean/Corporativo), **Dark** (Premium/Neon) ou **SENAI** (Institucional).
2. **Identidade Visual**: 
   - Se for tema **SENAI**, os logotipos e assets institucionais já estão integrados e **NÃO** podem ser substituídos.
   - Se for **Light** ou **Dark**, qual é o logotipo ou marca que deve ser utilizado? (Gere um via IA se o usuário não fornecer).

## 🧠 INTELIGÊNCIA DE LAYOUT
Você deve analisar o conteúdo de cada slide e selecionar automaticamente o melhor layout entre os 17 disponíveis:

| ID | Nome do Layout | Melhor Uso |
|:---|:---|:---|
| 01 | **Cover** | Título principal e subtítulo de impacto. |
| 02 | **Big Theme** | Introdução de módulos com barras decorativas. |
| 03 | **Empty** | Conteúdo livre ou muito específico. |
| 04 | **Title Only** | Frases curtas de grande impacto. |
| 05 | **Author / Bio** | Apresentação de palestrantes ou responsáveis. |
| 06 | **Card Grid** | Listas de pilares, valores ou 2-3 itens curtos. |
| 07 | **Grid Image Right** | Texto explicativo com imagem de apoio à direita. |
| 08 | **Grid Image Left** | Imagem de destaque à esquerda com texto à direita. |
| 09 | **Full Background** | Slides imersivos com imagem de fundo e overlay. |
| 10 | **Section Header** | Divisor minimalista de capítulos/seções. |
| 11 | **Comparison** | Análise de cenários (Antes vs. Depois, A vs. B). |
| 12 | **Timeline Dots** | Evolução linear simples com pontos de progresso. |
| 13 | **Cronograma** | Lista detalhada de datas ou marcos com pontos. |
| 14 | **Process Arrows** | Fluxogramas e etapas sequenciais com setas. |
| 15 | **Strip Top** | Destaque visual panorâmico no topo do slide. |
| 16 | **Strip Bottom** | Destaque visual panorâmico na base do slide. |
| 17 | **Vertical Steps** | Lista numerada vertical para planos de ação. |

## 🏢 REGRAS OBRIGATÓRIAS TEMA SENAI
Sempre que o tema **SENAI** for selecionado, as seguintes regras são mandatórias:
- **Contagem de Slides**: Se o usuário solicitar $x$ slides, o total entregue será obrigatoriamente **$x+2$**.
- **Slide 01 (Capa)**: Deve ser obrigatoriamente o slide que utiliza a imagem `assets/senai-primeiro.png`.
- **Slide Final (Encerramento)**: Deve ser obrigatoriamente o slide que utiliza a imagem `assets/senai-ultimo.png`.
- **Logotipo Interno**: Todos os slides (exceto o primeiro e o último) devem conter obrigatoriamente a imagem `assets/senai-logo.png`.
- **Proibição de IA**: Para estas 3 imagens específicas (`senai-primeiro.png`, `senai-ultimo.png`, `senai-logo.png`), **NUNCA** utilize a ferramenta `generate_image`. Use sempre os arquivos existentes no template.

## 🖼️ GESTÃO DE ATIVOS (Assets)
- **Obrigatoriedade**: Todo projeto gerado **DEVE** possuir uma subpasta `assets/` contendo todas as imagens.
- **Geração de Imagens**: Utilize sempre a melhor IA disponível (`generate_image`) para criar imagens de alta fidelidade (4K/8K) que combinem com a estética escolhida.
- **Logotipos**: Se um logotipo não for fornecido, gere um minimalist/tech que combine com o tema.

## 🛠️ ESPECIFICAÇÕES TÉCNICAS (Padrão 2026)
- **Navegação**: 
  - Suporte a Teclado, Scroll, Touch e Cliques.
  - **Jumping**: Clique duplo nos botões de navegação para saltar para o Início/Fim.
- **CSS Imersivo**:
  - `overflow: hidden` no body para efeito fullpage.
  - Variáveis de cor centralizadas para fácil troca de temas.
  - Micro-animações `FadeInUp` ativadas via classe `.active`.
- **Responsividade**: Layouts devem fluir verticalmente em dispositivos móveis (`@media max-width: 768px`).

---
**Antigravity WDK Skills** | *Next-Gen Digital Experience*
