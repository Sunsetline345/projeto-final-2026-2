
// ========= Comum: menu mobile, ano no rodapé =========
document.addEventListener('DOMContentLoaded', () => {
  // Preenche o ano automaticamente no footer
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu mobile (toggle)
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(aberto));
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const data = document.getElementById('data');
  const horario = document.getElementById('horario');
  if (data && horario) {
    const hoje = new Date();
    hoje.setMinutes(hoje.getMinutes() - hoje.getTimezoneOffset());
    data.min = hoje.toISOString().split('T')[0];

    data.addEventListener('change', () => {
      horario.replaceChildren();
      const selecionada = new Date(`${data.value}T12:00:00`);

      if (!data.value || selecionada.getDay() === 0) {
        horario.disabled = true;
        horario.add(new Option('Escolha um dia útil', ''));
        return;
      }

      horario.disabled = false;
      horario.add(new Option('Escolha um horário', ''));
      ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'].forEach(hora =>
        horario.add(new Option(hora, hora))
      );
    });
  }
});

// ========= Validação simples do formulário =========
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o envio padrão
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';

    // Pega valores dos campos
    const nome = form.querySelector('#nome')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const petNome = form.querySelector('#petNome')?.value.trim();
    const mensagem = form.querySelector('#mensagem')?.value.trim();

    // Regex básico para validar e-mail
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');

    if (!nome || !emailOk || !petNome || !mensagem || !form.checkValidity()) {
      feedback.classList.add('erro');
      feedback.textContent = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    feedback.classList.remove('erro');
    feedback.textContent = `Obrigado, ${nome}! Recebemos sua mensagem e retornaremos em breve.`;
    form.reset();
  });
}
