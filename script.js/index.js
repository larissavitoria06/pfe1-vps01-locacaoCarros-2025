const form = document.getElementById('form-cadastro');
const selectCarro = document.getElementById('carro');

carros.forEach(carro => {
    const option = document.createElement('option');
    option.value = carro.id;
    option.textContent = `${carro.marca} - ${carro.modelo} (${carro.ano})`;
    selectCarro.appendChild(option);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('Cliente').value;
    const cpf = document.getElementById('cpf').value;
    const dataLocacao = document.getElementById('data-locacao').value;
    const dataDevolucao = document.getElementById('data-devolucao').value;
    const carroId = parseInt(selectCarro.value);

    if (!carroId) {
        return;
    }

    const carroSelecionado = carros.find(carro => carro.id === carroId);

    const locacao = {
        nome,
        cpf,
        dataLocacao,
        dataDevolucao,
        carro: carroSelecionado
    };

    const locacoes = JSON.parse(localStorage.getItem('locacoes')) || [];
    locacoes.push(locacao);
    localStorage.setItem('locacoes', JSON.stringify(locacoes));
    alert('Locação cadastrada com sucesso!');
    form.reset();
});
