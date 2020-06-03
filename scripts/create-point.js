// Busca os estados na api do IBGE e preenche os "options" do "select"
function populatesUFs() {
    const ufSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
            }
        });
}
populatesUFs();

// Recebe o estado e busca na api todas as cidades do estado
function getCities(event) {
    const citySelect = document.querySelector('select[name=city]');
    const stateInput = document.querySelector('input[name=state]');

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url).then(res => res.json()).then(cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
        }

        citySelect.disabled = false;
    });
}

// Quando troca o estado, altera as cidades
document.querySelector('select[name=uf]').addEventListener('change', getCities);