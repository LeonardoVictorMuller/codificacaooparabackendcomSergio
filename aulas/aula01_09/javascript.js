document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('nome');
    const contador = document.getElementById('contador');
    const form = document.getElementById('form');
    const limpar = document.getElementById('limpar');
    const copiar = document.getElementById('copiar');
    const toast = document.getElementById('toast');
    const itens = []; // <- aqui o array está garantido
  
    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1800);
    }
  
    function atualizarEstado() {
      const val = input.value;
      contador.textContent = `${val.length}/40`;
      input.classList.toggle('valid', val.length >= 3);
      input.classList.toggle('invalid', val.length > 0 && val.length < 3);
    }
  
    input.addEventListener('input', atualizarEstado);
    input.addEventListener('blur', atualizarEstado);
    atualizarEstado();
    input.focus();
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const mensagem = input.value.trim();
      if (mensagem.length < 3) {
        input.classList.add('invalid');
        showToast("Digite pelo menos 3 caracteres.");
        return;
      }
  
      // adiciona no array local
      itens.push({ nome: mensagem });
      
  
      // envia para o servidor
      await fetch('/inicio/filme/itens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itens })
      });
  
      showToast(`Enviado: "${mensagem}"`);
    });
  
    limpar.addEventListener('click', () => {
      input.value = '';
      atualizarEstado();
      input.focus();
      showToast('Campo limpo.');
    });
  
    copiar.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(input.value);
        showToast('Copiado para a área de transferência!');
      } catch (err) {
        showToast('Não foi possível copiar.');
      }
    });
  });
  