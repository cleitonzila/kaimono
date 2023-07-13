const zentaiKau = document.getElementById("zetai-kau")
const foodList = ["leite", "suco", "banana"]

// Function to add a food item to a list
function putFoodInList(name) {
    // Returns a list item string with the food item name
    return `<li>${name}</li>`;
}

// Function to populate the lists
function populate(){
    // Generate all the list items as a single string
    let listItems = foodList.map(element => putFoodInList(element)).join('');
    // Set the innerHTML of the list to the list items string
    zentaiKau.innerHTML = listItems;
}

populate()