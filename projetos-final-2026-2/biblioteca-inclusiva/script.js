// =========================================================
// Biblioteca Comunitária Ler para Todos
// PROJETO-EXEMPLO — Acessibilidade e Inclusão
// Comentários "A11Y:" marcam o que mudou em relação ao script.js original.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('open');
      // A11Y: mantém aria-expanded sincronizado com o estado real do menu,
      // para o leitor de tela anunciar "expandido" / "recolhido" corretamente.
      toggle.setAttribute('aria-expanded', String(aberto));
    });

    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );

    // A11Y: fechar o menu com a tecla Esc e devolver o foco para o botão
    // que abriu o menu. Sem isso, quem navega por teclado pode "perder"
    // onde está na página depois de fechar o menu.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
});

// ========= Validação do formulário =========
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';

    const nome = form.querySelector('#nome')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const mensagem = form.querySelector('#mensagem')?.value.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');

    // A11Y: a mensagem em texto já diz "preencha corretamente" — quem não
    // enxerga a cor vermelha do feedback ainda entende o problema pela
    // frase. Nunca informar erro só pela cor do campo.
    if (!nome || !emailOk || !mensagem) {
      feedback.classList.add('erro');
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
      // A11Y: como o feedback já tem role="status" + aria-live="polite" no
      // HTML, o leitor de tela lê essa frase automaticamente, sem a pessoa
      // precisar procurar na tela onde está o erro.
      return;
    }

    feedback.classList.remove('erro');
    feedback.textContent = `Obrigado, ${nome}! Recebemos sua mensagem e retornaremos em breve.`;
    form.reset();
  });
}
