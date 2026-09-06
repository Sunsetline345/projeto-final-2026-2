# 📚 Biblioteca Comunitária Ler para Todos — PROJETO-EXEMPLO

**Categoria:** Educação / Cultura
**Tipo de projeto:** `landing_form` + acessibilidade
**Objetivo:** servir de modelo para deixar QUALQUER um dos 20 projetos da turma mais acessível e inclusivo, para a feira tech.

Este projeto usa a mesma estrutura HTML/CSS/JS dos outros projetos finais.
As mudanças estão todas comentadas no código com `A11Y:` — procure por essa
palavra em `index.html`, `styles.css` e `script.js` para achar cada uma.

## ✅ Checklist de acessibilidade aplicada (leve para o projeto da sua equipe)

| # | O que foi feito | Onde ver no código |
|---|---|---|
| 1 | Link de "pular para o conteúdo" | `.skip-link` no início do `<body>` |
| 2 | Landmark `<main>` único na página | envolvendo todas as `<section>` |
| 3 | Seções ligadas ao título com `aria-labelledby` | cada `<section>` |
| 4 | Menu com `aria-expanded` sincronizado + fecha com Esc | `script.js` |
| 5 | Botão de menu como `<button>` (não `<div onclick>`) | `index.html` |
| 6 | Emojis/ícones decorativos com `aria-hidden="true"` | `.icon`, logo |
| 7 | Imagem informativa com `alt` descritivo + `<figcaption>` | seção Acessibilidade |
| 8 | Contraste de cor revisado (mínimo 4.5:1) | variáveis em `styles.css` |
| 9 | Indicador de foco visível (`:focus-visible`) em toda a página | `styles.css` |
| 10 | Alvo de toque mínimo de 44x44px em botões/campos | `styles.css` |
| 11 | Campos obrigatórios indicados em texto, não só por cor/símbolo | formulário |
| 12 | `autocomplete` nos campos do formulário | formulário |
| 13 | Mensagem de erro/sucesso com `role="status"` + `aria-live="polite"` | formulário |
| 14 | Erro explicado em texto, nunca só pela cor | `script.js` |
| 15 | `prefers-reduced-motion` respeitado | `styles.css` |
| 16 | `viewport` sem bloquear zoom do usuário | `<head>` |
| 17 | Hierarquia de headings correta (um `h1`, `h2` por seção, `h3` nos cards) | `index.html` |

## 📂 Estrutura de arquivos
```
modelo-acessibilidade/
├── index.html          # estrutura da página + comentários A11Y
├── styles.css          # estilos, contraste e foco
├── script.js           # interatividade acessível
├── imagem-estante.svg  # exemplo de imagem com alt correto
└── README.md           # este arquivo
```

## ▶️ Como executar
Basta abrir o arquivo `index.html` em qualquer navegador moderno.

## 🔍 Como testar a acessibilidade do projeto da sua equipe
1. **Só teclado:** desconecte o mouse e navegue com Tab, Shift+Tab, Enter e Esc. Dá para chegar em tudo? O foco está sempre visível?
2. **Leitor de tela:** ative o NVDA (Windows, gratuito) ou o VoiceOver (Mac) e navegue pela página de olhos fechados.
3. **Zoom:** aumente o zoom do navegador para 200%. O layout continua legível, sem cortar texto?
4. **Contraste:** use a extensão "WAVE" ou o site WebAIM Contrast Checker para conferir se o texto do seu projeto passa no teste.
5. **Modo escuro do sistema / reduzir movimento:** ative "reduzir movimento" nas configurações de acessibilidade do sistema operacional e veja se as animações do site somem.

## 💡 Exercícios de fixação sugeridos

### Nível 1 — Aplicar no próprio projeto
1. Adicionar o `skip-link` e o `<main>` no projeto da equipe.
2. Trocar `aria-hidden="true"` em todos os emojis/ícones decorativos.
3. Revisar as cores de `:root` do projeto da equipe com um verificador de contraste e ajustar o que reprovar.

### Nível 2 — Formulário e navegação
4. Adicionar `role="status"` + `aria-live="polite"` na mensagem de feedback do formulário da equipe.
5. Sincronizar `aria-expanded` no botão de menu do projeto da equipe.
6. Adicionar `autocomplete` correto em todos os campos de formulário.

### Nível 3 — Ir além
7. Testar o projeto da equipe inteiro só com teclado e listar 3 problemas encontrados.
8. Adicionar um botão de "aumentar/diminuir fonte" que altera o `font-size` do `<html>` e salva a escolha em `localStorage`.
9. Pesquisar o que é o **VLibras** (tradutor de Libras do governo brasileiro) e avaliar se faria sentido incluir no projeto da equipe.

## 📚 Sugestão de aula
1. Mostrar este projeto rodando e comparar lado a lado com um projeto da turma sem os ajustes.
2. Testar ao vivo com só o teclado (sem mouse) na frente da turma — costuma ser o momento que mais convence.
3. Cada equipe escolhe 3 itens do checklist acima para aplicar no próprio projeto antes da feira.
4. Se der tempo, testar com um leitor de tela real (NVDA) em pelo menos um projeto.
