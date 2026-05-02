---
name: criar-html
description: Advanced skill for creating premium interactive HTML5 presentations. Focuses on immersive UX, high-end aesthetics (Dark/Light), and full navigation control.
---

# SKILL: CriarHTML (Premium Presentation Engine)

Esta skill transforma conteúdos em apresentações digitais de alto impacto, utilizando as melhores práticas de design de 2026. O motor é focado em uma experiência "Fullpage" fluida, com suporte total a interações modernas.

## 🛑 SOCRATIC GATE (Obrigatório)
Antes de iniciar qualquer código, você **DEVE** questionar o usuário sobre:
1. **Estética**: Prefere uma abordagem **Light** (limpa/corporativa) ou **Dark** (premium/tecnológica)?
2. **Imagens**: Devemos utilizar imagens de fundo e assets visuais imersivos?
3. **Infográficos**: Deseja a criação de infográficos visuais para representar dados/processos quando possível?
4. **Logotipos**: Há logotipos específicos ou marcas que devem ser integrados ao design?

## 🚀 Funcionalidades de Elite
- **Navegação Avançada**:
    - Botões flutuantes e fixos para `Anterior` e `Próximo`.
    - **Navegação Rápida**: Clique duplo nos botões de navegação para saltar para o `Primeiro` ou `Último` slide.
    - Suporte nativo a `Teclado` (Setas/Espaço), `Scroll` (Mouse Wheel) e `Touch`.
- **Design System Premium**:
    - **Tipografia**: Uso obrigatório da fonte **Inter** (ou 'Outfit' como alternativa).
    - **Efeitos**: Glassmorphism (backdrop-filter), Gradientes dinâmicos e overlays de leitura.
    - **Feedback Visual**: Barra de progresso superior e contador de slides (`X / Total`).
    - **Animações**: Micro-animações de entrada (FadeInUp) sincronizadas com a ativação do slide.

## 🛠️ Especificações Técnicas

### 1. Estrutura de Navegação (HTML)
```html
<div class="slides-container" id="slides-container">
    <section class="slide active"> <!-- Conteúdo --> </section>
    <section class="slide"> <!-- Conteúdo --> </section>
</div>

<div class="controls">
    <span class="slide-counter" id="slide-counter">1 / X</span>
    <button class="btn-nav" id="btn-prev" disabled>&#8592;</button>
    <button class="btn-nav" id="btn-next">&#8594;</button>
</div>
```

### 2. Estética e CSS
- Use variáveis CSS para `--theme-primary` (ex: Vermelho SENAI `#E3000F`) e cores de fundo.
- Aplique `overflow: hidden` no body para garantir o efeito Fullpage.
- Seções devem ter `height: 100vh` e transições de `transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)`.

### 3. Lógica de Interação (JS)
- Implemente um `updateUI()` que gerencia classes `.active`, atualiza a largura da `progress-bar` e o texto do `slide-counter`.
- Bloqueie interações rápidas demais com um `isAnimating` lock (aprox. 600ms).

## 🎨 Design Guidelines (Premium Only)
- **Contrastes**: Sempre garanta acessibilidade (WCAG) usando overlays escuros sobre imagens de fundo.
- **Cards**: Use bordas arredondadas generosas (20px) e efeitos de hover que escalonam levemente o conteúdo.
- **Imagens**: Priorize imagens de alta qualidade que ocupem todo o fundo (`background-size: cover`).

---
**Antigravity WDK Skills** | *Next-Gen Digital Experience*
