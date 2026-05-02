# 📱 Checklist de Testes — Luiz Growth

## Dispositivos para Teste

### Mobile (Smartphones)
- [ ] iPhone 12/13/14 (390px - 428px width)
- [ ] iPhone SE (375px width)
- [ ] Samsung Galaxy S21/S22 (360px - 412px width)
- [ ] iPhone 14 Pro Max (430px width)

### Tablets
- [ ] iPad Mini (768px width)
- [ ] iPad Pro (1024px width)
- [ ] Samsung Galaxy Tab (800px width)

### Desktop
- [ ] 1366x768 (Notebook comum)
- [ ] 1920x1080 (Full HD)
- [ ] 2560x1440 (2K)

---

## ✅ Testes de Responsividade

### Header / Navegação
- [ ] Logo visível e centralizada corretamente
- [ ] Menu hamburger aparece em mobile (< 768px)
- [ ] Animação hamburger → X funciona suavemente
- [ ] Menu overlay fecha ao clicar fora
- [ ] Menu fecha ao pressionar Escape
- [ ] Links do menu têm touch target ≥ 48px
- [ ] Botão CTA no menu tem tamanho adequado

### Hero Section
- [ ] Texto aparece ANTES do card no mobile (ordem correta)
- [ ] H1 legível sem quebrar palavras estranhamente
- [ ] Botões empilhados verticalmente no mobile
- [ ] Touch targets dos botões ≥ 48px de altura
- [ ] Trust row com ícones visíveis
- [ ] Hero card não vaza da tela

### Dashboard Card
- [ ] Barras do gráfico animam (desktop apenas)
- [ ] Métricas em grid 2x2 (tablet) ou 1x4 (mobile)
- [ ] Números fazem count-up animation
- [ ] Testimonials carousel funciona com swipe no mobile
- [ ] Dots de navegação respondem ao clique
- [ ] Auto-rotate pausa no hover (desktop)

### Strip Section (Especialidades)
- [ ] Tags centralizadas no mobile
- [ ] Hover effect funciona (desktop)
- [ ] Nenhuma tag é cortada

### Método Section
- [ ] Grid 4 colunas (desktop) → 2 (tablet) → 1 (mobile)
- [ ] Números 01-04 visíveis nos cards
- [ ] Hover lift funciona (desktop)
- [ ] Texto não quebra de forma estranha

### Diferenciais Section
- [ ] Grid 2x2 (desktop/tablet) → 1x4 (mobile)
- [ ] Linhas divisórias visíveis (desktop)
- [ ] Ícones com hover rotate (desktop)
- [ ] Cards com hover lift (desktop)

### CTA Section (Investimento)
- [ ] Background gradiente visível
- [ ] Card flutuante com efeito glassmorphism
- [ ] Preço R$ 1.000 legível
- [ ] Features list com stagger animation
- [ ] Botão "Solicitar Diagnóstico" clicaável
- [ ] Grid 2 colunas → 1 coluna no mobile

### Footer
- [ ] Centralizado no mobile
- [ ] Texto legível
- [ ] Brand logo visível

---

## ✅ Testes de UX/UI

### Animações
- [ ] Fade-in inicial da hero funciona
- [ ] Reveal on scroll ativa nas seções
- [ ] Stagger animation na features list
- [ ] Shimmer effect no hero card
- [ ] Pulse animation no badge e status

### Interações
- [ ] Hover em botões muda cor e eleva
- [ ] Hover em cards mostra sombra
- [ ] Active state nos links de navegação
- [ ] Smooth scroll ao clicar em âncoras
- [ ] Navbar ganha sombra ao rolar

### Acessibilidade
- [ ] Navegação por teclado funciona (Tab/Shift+Tab)
- [ ] Focus visível em todos os elementos
- [ ] Alt text em imagens
- [ ] Aria labels em botões
- [ ] Contraste de cores adequado

---

## ✅ Testes de Performance

### Carregamento
- [ ] First Contentful Paint < 2.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.8s
- [ ] Cumulative Layout Shift < 0.1

### Mobile Performance
- [ ] Scroll suave sem jank
- [ ] Animações a 60fps
- [ ] Touch responses < 100ms
- [ ] Imagens com lazy loading

---

## ✅ Testes de Conversão

### CTAs
- [ ] Botão "Solicitar Diagnóstico Gratuito" na hero
- [ ] Botão no menu de navegação
- [ ] Botão na seção de investimento
- [ ] Todos os botões levam ao formulário correto

### Prova Social
- [ ] Depoimentos visíveis e legíveis
- [ ] Métricas de performance claras
- [ ] Trust indicators (ícones) visíveis

### Informações Críticas
- [ ] Preço visível e legível
- [ ] Benefícios claros
- [ ] Diferenciais compreensíveis
- [ ] Método fácil de entender

---

## 🐛 Bugs Conhecidos para Verificar

| Bug | Dispositivo | Status |
|-----|-------------|--------|
| Menu não fecha no iOS | iPhone Safari | [ ] |
| Animação trava em Android antigo | Android < 8 | [ ] |
| Imagem carrega lenta | 3G/4G | [ ] |
| Count-up não dispara | Safari iOS | [ ] |

---

## 🛠️ Ferramentas de Teste

### Online
- [BrowserStack](https://www.browserstack.com/) - Testes em dispositivos reais
- [Responsivey App](https://responsively.app/) - Preview multi-dispositivo
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance
- [WebPageTest](https://www.webpagetest.org/) - Testes avançados

### Local (Chrome DevTools)
```
1. Abrir DevTools (F12)
2. Ctrl+Shift+M (toggle device toolbar)
3. Selecionar dispositivos:
   - iPhone 12 Pro
   - iPhone SE
   - iPad Pro
   - Samsung Galaxy S20
4. Testar em modo landscape e portrait
```

---

## 📊 Critérios de Aceite

### Mobile
- [ ] Layout não quebra em 320px de largura
- [ ] Todos os textos legíveis sem zoom
- [ ] Todos os botões clicáveis sem zoom
- [ ] Menu hamburger funcional
- [ ] Carousel com swipe funcional

### Tablet
- [ ] Grid de método em 2 colunas
- [ ] Dashboard metrics em 2x2
- [ ] Hero card lado a lado com texto

### Desktop
- [ ] Todas as animações funcionam
- [ ] Hover states visíveis
- [ ] Layout centralizado e alinhado
- [ ] Navbar com scroll effect

---

*Última atualização: 2026-05-01*
