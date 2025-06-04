const carros = [
    { id: 1, nome: 'Fiat Uno', preco: 100 },
    { id: 2, nome: 'Volkswagen Gol', preco: 120 },
    { id: 3, nome: 'Chevrolet Onix', preco: 150 }
];

function listarCarros() {
    const lista = document.getElementById('lista-carros');
    lista.innerHTML = '';
    carros.forEach(carro => {
        lista.innerHTML += `
            <div class="carro">
                <h3>${carro.nome}</h3>
                <p>Preço: R$ ${carro.preco} por dia</p>
                <button onclick="alugarCarro(${carro.id})">Alugar</button>
            </div>
        `;
    });
}

function alugarCarro(id) {
    const carro = carros.find(c => c.id === id);
    if (!carro) {
        alert(' Você alugou o Carro com sucesso.');
        return;
    }
}

function removerAlugado(id) {
    let alugados = JSON.parse(localStorage.getItem('carrosAlugados')) || [];
    alugados = alugados.filter(c => c.id !== id);
    localStorage.setItem('carrosAlugados', JSON.stringify(alugados));

    alert('Você cancelou o aluguel com sucesso!');
    listarAlugados();
}


