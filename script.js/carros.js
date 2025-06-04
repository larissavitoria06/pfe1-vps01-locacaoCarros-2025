[
    {
        "id": 1,
        "modelo": "Onix LT 1.0",
        "marca": "Chevrolet",
        "ano": 2022,
        "imagem": "onix.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Manual",
        "valor_diaria": 120.00
    },
    {
        "id": 2,
        "modelo": "HB20 Vision",
        "marca": "Hyundai",
        "ano": 2023,
        "imagem": "hb20.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Automático",
        "valor_diaria": 150.00
    },
    {
        "id": 3,
        "modelo": "Renegade Longitude",
        "marca": "Jeep",
        "ano": 2023,
        "imagem": "renegade.png",
        "combustivel": "Gasolina",
        "portas": 4,
        "transmissao": "Automático",
        "valor_diaria": 210.00
    },
    {
        "id": 4,
        "modelo": "Corolla XEi",
        "marca": "Toyota",
        "ano": 2022,
        "imagem": "corolla.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Automático",
        "valor_diaria": 250.00
    },
    {
        "id": 5,
        "modelo": "Civic Touring",
        "marca": "Honda",
        "ano": 2021,
        "imagem": "civic.png",
        "combustivel": "Gasolina",
        "portas": 4,
        "transmissao": "Automático",
        "valor_diaria": 230.00
    },
    {
        "id": 6,
        "modelo": "Fiat Mobi Like",
        "marca": "Fiat",
        "ano": 2022,
        "imagem": "mobi.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Manual",
        "valor_diaria": 90.00
    },
    {
        "id": 7,
        "modelo": "Kwid Zen",
        "marca": "Renault",
        "ano": 2023,
        "imagem": "kwid.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Manual",
        "valor_diaria": 95.00
    },
    {
        "id": 8,
        "modelo": "Gol Trendline",
        "marca": "Volkswagen",
        "ano": 2021,
        "imagem": "gol.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Manual",
        "valor_diaria": 100.00
    },
    {
        "id": 9,
        "modelo": "Compass Limited",
        "marca": "Jeep",
        "ano": 2022,
        "imagem": "compass.png",
        "combustivel": "Diesel",
        "portas": 4,
        "transmissao": "Automático",
        "valor_diaria": 270.00
    },
    {
        "id": 10,
        "modelo": "Tracker Premier",
        "marca": "Chevrolet",
        "ano": 2023,
        "imagem": "tracker.png",
        "combustivel": "Flex",
        "portas": 4,
        "transmissao": "Automático",
        "valor_diaria": 220.00
    }
]

        function displayCars() {
            const carListElement = document.getElementById('carList');

            carros.forEach(car => {
                const carCard = document.createElement('div');
                carCard.classList.add('car-card');

                carCard.innerHTML = `
                    <img src="${car.imagem}" alt="${car.modelo}">
                    <h3>${car.modelo}</h3>
                    <p><strong>Marca:</strong> ${car.marca}</p>
                    <p><strong>Ano:</strong> ${car.ano}</p>
                    <p><strong>Combustível:</strong> ${car.combustivel}</p>
                    <p><strong>Portas:</strong> ${car.portas}</p>
                    <p><strong>Transmissão:</strong> ${car.transmissao}</p>
                    <p><strong>Valor Diário:</strong> R$ ${car.valor_diaria.toFixed(2)}</p>
                    <button>Alugar</button>
                `;

                carListElement.appendChild(carCard);
                
            });
        }
function abrirModal(id) {
    document.getElementById(id).classList.remove('oculto');
}

function fecharModal(id) {
    document.getElementById(id).classList.add('oculto');
}

        displayCars();

        