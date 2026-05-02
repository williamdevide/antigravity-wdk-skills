---
name: criar-html
description: Advanced skill for creating interactive HTML5/CSS3/JS presentations. Focuses on fluid UX, premium animations, and high-impact responsive design.
---

# SKILL: CriarHTML (Presentation Engine Pro)

Esta skill permite que o Antigravity projete e implemente apresentações digitais que se comportam como aplicações web modernas. Ideal para pitches, dashboards de monitoramento e materiais educativos interativos.

## 🎯 Objetivo
Transformar apresentações estáticas em experiências imersivas "Fullpage", com transições suaves, controle total via teclado/scroll e design system premium.

## 🚀 Funcionalidades Premium
- **Motor de Navegação**: Transições suaves entre slides com suporte a `wheel`, `touch` e `keyboard`.
- **Design System Nativo**:
    - **Glassmorphism**: Efeitos de transparência modernos.
    - **Micro-animações**: Transições de entrada para elementos de conteúdo.
    - **Dark Mode Pro**: Paletas de cores profundas e vibrantes.
- **Interatividade**: Cliques duplos para navegação rápida, barras de progresso dinâmicas e contadores.

## 🛠️ Guia de Implementação Técnica

### 1. Estrutura de Arquivos Recomendada
- `index.html`: Container principal e seções de slide.
- `style.css`: Lógica de layout flex/grid e animações `@keyframes`.
- `script.js`: Observer de eventos e gerenciamento de estados (`.active`).

### 2. Convenções de Marcação
```html
<div class="slides-container">
    <section class="slide active" id="intro">
        <!-- Conteúdo do Slide -->
    </section>
    <section class="slide" id="features">
        <!-- Conteúdo do Slide -->
    </section>
</div>
```

### 3. Lógica de Navegação Pro (Referência)
O script deve gerenciar o índice do slide atual, aplicar classes CSS para transição e atualizar a barra de progresso.

## 🎨 Design Guidelines
- **Tipografia**: Use fontes modernas (Inter, Montserrat, Outfit).
- **Espaçamento**: Mantenha margens generosas para legibilidade.
- **Contrastes**: Garanta que o texto seja legível sobre fundos complexos usando `backdrop-filter`.

---
**WDK Professional Series** | *Digital Experience Engineering*
