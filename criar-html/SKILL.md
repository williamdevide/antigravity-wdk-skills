---
name: criar-html
description: Motor avançado de apresentações interativas HTML5. Focado em UX imersiva, inteligência de layout e paridade estética entre temas Light, Dark e SENAI.
---

# SKILL: CriarHTML (Premium Presentation Engine)

Esta skill transforma textos brutos ou prompts criativos em apresentações digitais de alto impacto. O motor utiliza uma arquitetura de 17 layouts padronizados e inteligência artificial para mapear o conteúdo ao melhor design visual.

## 🛑 PROTOCOLO SOCRÁTICO (Obrigatório)
Sempre que receber uma solicitação de criação de slides, você **DEVE** seguir este fluxo:

1. **Validação de Contexto**: Se o usuário já especificou o tema no prompt (ex: "utilize template-senai"), **NÃO** pergunte novamente. Pule para o passo 3.
2. **Tema Desejado**: Se não especificado, escolha entre **Light**, **Dark** ou **SENAI**.
3. **Gestão de Imagens**: Pergunte obrigatoriamente: "Deseja imagens inéditas geradas por IA (`generate_image`) ou prefere imagens padrão da internet/assets?".
4. **Identidade Visual**: 
   - Se for **SENAI**, os assets institucionais são travados.
   - Se for **Light/Dark**, pergunte sobre o logotipo ou marca.

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
- **Slide 01 (Capa)**: Deve ser obrigatoriamente o slide que utiliza a imagem `assets/senai-primeiro.png`. **ESTE SLIDE DEVE SER ENTREGUE LIMPO**, sem nenhum título, texto ou conteúdo gerado sobreposto.
- **Slide Final (Encerramento)**: Deve ser obrigatoriamente o slide que utiliza a imagem `assets/senai-ultimo.png`. **ESTE SLIDE DEVE SER ENTREGUE LIMPO**, sem nenhum conteúdo gerado.
- **Logotipo Interno**: Todos os slides (exceto o primeiro e o último) devem conter obrigatoriamente a imagem `assets/senai-logo.png`.
- **Locked Assets (Proibição de IA)**: Para as imagens `senai-primeiro.png`, `senai-ultimo.png` e `senai-logo.png`, **NUNCA** utilize `generate_image`. Use sempre os arquivos originais.

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
