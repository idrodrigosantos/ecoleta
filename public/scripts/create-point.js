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

    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>';
    citySelect.disabled = true;

    fetch(url).then(res => res.json()).then(cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }

        citySelect.disabled = false;
    });
}

// Quando troca o estado, altera as cidades
document.querySelector('select[name=uf]').addEventListener('change', getCities);

// Itens de coleta
// Seleciona todos os li's
const itemsToCollect = document.querySelectorAll('.items-grid li');

for (const item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem);
}

const collectedItems = document.querySelector('input[name=items]');

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;

    // Adicionar ou remover uma classe com javascript
    itemLi.classList.toggle('selected');

    const itemId = itemLi.dataset.id;

    // Verifica se existe itens selecionados, se sim pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item === itemId;
        return itemFound;
    });

    // Se já estiver selecionado, remover a seleção
    if (alreadySelected >= 0) {
        // Remove a seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId;
            return itemIsDifferent;
        });

        selectedItems = filteredItems;
    } else {
        // Se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId);
    }

    // Atualiza o campo escondido
    collectedItems.value = selectedItems;
}