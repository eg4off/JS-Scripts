class Products {
    constructor(name,price,author,img){
        this.name = name;
        this.price = price;
        this.author = author;
        this.img = img;
    }
}

var arrBooks = [
 new Products("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
 new Products("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
 new Products("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
 new Products("The Outsider", 270, "Stephen King", "img/4.jpg"),
 new Products("It",270,"Stephen King","img/5.jpg"),
 new Products("The Shining", 200, "Stephen King","img/6.jpg"),
 new Products("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg"),
 new Products("The Raven", 95, "Edgar Allan Poe","img/8.jpg"),
 new Products("The Talisman", 150, "Walter Scott","img/9.jpg"),
 new Products("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg"),
 new Products("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg"),
 new Products("Tai-pan",195,"James Clavell","img/12.jpg"),
 new Products("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
 new Products("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
 new Products("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
 new Products("The Outsider", 270, "Stephen King", "img/4.jpg"),
 new Products("It",270,"Stephen King","img/5.jpg"),
 new Products("The Shining", 200, "Stephen King","img/6.jpg"),
 new Products("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg"),
  new Products("The Raven", 95, "Edgar Allan Poe","img/8.jpg"),
  new Products("The Talisman", 150, "Walter Scott","img/9.jpg"),
  new Products("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg"),
  new Products("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg"),
  new Products("Tai-pan",195,"James Clavell","img/12.jpg"),
  new Products("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
  new Products("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
  new Products("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
  new Products("The Outsider", 270, "Stephen King", "img/4.jpg"),
  new Products("It",270,"Stephen King","img/5.jpg"),
  new Products("The Shining", 200, "Stephen King","img/6.jpg"),
  new Products("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg"),
  new Products("The Raven", 95, "Edgar Allan Poe","img/8.jpg"),
  new Products("The Talisman", 150, "Walter Scott","img/9.jpg"),
  new Products("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg"),
  new Products("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg"),
  new Products("Tai-pan",195,"James Clavell","img/12.jpg"),
  new Products("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
 new Products("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
 new Products("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
 new Products("The Outsider", 270, "Stephen King", "img/4.jpg")
];

var productPerPage = +document.getElementById('countPage').value;
//var numv= addEventListener('onchange', function(){document.getElementById('countPage').value})
// var num = getElementById('countPage').value

// function number(){
//     if(num!==''){
//         productPerPage = num;
//     }
// }

function addBooks(item){

    for (let i = 0; i<productPerPage; i++){
            document.getElementById("products").innerHTML += `<div class="info-books">
            <div class="img"><img src=${item[i].img}></div>
            <div class="name field">${item[i].name}</div>
            <div class="price field">${item[i].price}</div>
            <div class="description field">${item[i].author}</div>
           </div>`
        }
}
addBooks(arrBooks);

function amountOfProducts() {
    let productsPerPage = +document.getElementById('countPage').value;
    //products = JSON.parse(xhr.response);
    // console.log(products)
    addBooks(item);
    drawButtons(productsPerPage);
    setEvents();
}

//sort functions
function sortByPrise() {
    var div = document.querySelector("#products");
    if (div){
        div.innerHTML = '';
        PriseSort(arrBooks);
        addBooks(arrBooks);
    };
    
}

function sortByName() {
    var div = document.querySelector("#products");
    if (div){
        div.innerHTML = '';
        nameSort(arrBooks);
        addBooks(arrBooks);
    };
}

function PriseSort(arr){
    arr.sort(function(a,b){
        return a.price - b.price;
    });
};

function nameSort(arr){
    arr.sort(function(a,b){
        if(a.name > b.name){
            return 1;
        }
        if (a.name < b.name){
            return -1;
        }
        return 0;
    });
};

//create buttons
function drawButtons(productPerPage){
    let buttonCount = arrBooks.length/productPerPage;
    let c = '';

     for (let i=0; i<buttonCount; i++){
    c += (`<button>${i+1}</button>`)
    // c += `<button id="${i}" onclick="addBooks(${productPerPage}, ${i+1})>"${i+1}</button>`;
     };
     document.getElementById('buttons').innerHTML = c;
}
// drawButtons(productPerPage); 



    
