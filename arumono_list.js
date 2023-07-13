// Seleção dos elementos
const foodlist1 = document.getElementById("1");
const foodlist2 = document.getElementById("2");
const foodlist3 = document.getElementById("3");
const searchBtn = document.getElementById("search-btn");
const searchField = document.getElementById("search");

// Definição das listas
const placeList = [foodlist1, foodlist2, foodlist3];
const listFood1 = ["牛乳", "パン", "バナナ"];

// Dicionário de sinônimos
const synonyms = {
    "ぎゅうにゅう": "牛乳",
    "ギュウニュウ": "牛乳",
    "ミルク": "牛乳",
    "ぱん": "パン",
    "パン": "パン",
    "bread": "パン",
    "ばなな": "バナナ",
    "banana": "バナナ",
    "りんご": "リンゴ",
    "apple": "リンゴ",
    "おれんじ": "オレンジ",
    "orange": "オレンジ",
    "ちーず": "チーズ",
    "チーズ": "チーズ",
    "cheese": "チーズ",
    "ちょこれーと": "チョコレート",
    "chocolate": "チョコレート",
    "チョコ":"チョコレート"
};


// Função para adicionar um item de comida à lista
function putFoodInList(name) {
    // Retorna uma string de item da lista com o nome do item de comida
    return `<li>${name}</li>`;
}

// Função para popular as listas
function populate() {
    // Para cada lista em placeList
    placeList.forEach(place => {
        // Gerar todos os itens da lista como uma única string
        let listItems = listFood1.map(element => putFoodInList(element)).join('');
        // Defina o innerHTML da lista para a string dos itens da lista
        place.innerHTML = listItems;
    });
}

// Populando as listas
populate();

// Função para criar e exibir um toast
function showToast(message, isSuccess) {
    const toast = document.createElement("div");
    toast.classList.add("toast", isSuccess ? "success" : "error");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function() {
        document.body.removeChild(toast);
    }, 3000);
}

// Função para pesquisar um produto nas listas
function searchProduct(productName) {
    productName = synonyms[productName] || productName;
    const listItems = document.querySelectorAll('.food li');

    for (let item of listItems) {
        if (item.textContent.trim().toLowerCase() === productName.trim().toLowerCase()) {
            showToast("商品がある！", true);
            return true;
        }
    }

    showToast("商品がない！", false);
    return false;
}

// Adicionando um listener de evento ao botão de pesquisa e ao campo de entrada
searchBtn.addEventListener("click", searchProductFromInput);
searchField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        searchProductFromInput();
    }
});

// Função para pesquisar produto do campo de entrada
function searchProductFromInput() {
    const productName = searchField.value;
    searchField.value = "";
    searchProduct(productName);
}
