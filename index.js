let list = ["Apple", 'Banana', "Orange juice", "Orange gel", "Alcohol", "Beer", "Bread", "Butter", "Milk"];
let myList = document.querySelector('#list');

function fillList(arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('div');
        item.innerText = arr[i];
        item.className = 'item'
        myList.append(item)
    }
}

fillList(list)

function sortAsc() {
    list.sort((a, b) => a > b ? 1 : -1);
    myList.innerHTML = "";
    fillList(list)
}

function sortDes() {
    list.sort((a, b) => a > b ? -1 : 1);
    myList.innerHTML = "";
    fillList(list)
}