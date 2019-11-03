class Book {
    constructor(name,price,author,img){
        this.name = name,
        this.price = price,
        this.author = author,
        this.img = img    }
}

class Shop {
    constructor(name){
        this.books = [];
        this.pages = 0;
        this.name = name;
    }

    pageCount(){
        var booksPerPage = +document.getElementById('countPage').value;
        var pages = Math.floor(this.books.length / booksPerPage);
        if(this.books.length % booksPerPage != 0){
            pages++;
        }
        this.pages = pages;
    }

    addBooks(booksOnPage, pageNumber){
        var bookForSale =  document.getElementById("products");
        bookForSale.innerHTML = "";
        var firstIdX = booksOnPage * (pageNumber-1);
        if(booksOnPage + firstIdX > this.books.length){
            var lastIdX = firstIdX + (this.books.length % booksOnPage)-1;
            console.log(lastIdX);
        }else{
            var lastIdX = booksOnPage + firstIdX -1;
        }
        for(var i=firstIdX; i<=lastIdX; i++){
            bookForSale.innerHTML += `<div class="info-books">
            <div class="img"><img src=${this.books[i].img}></div>
            <div class="name field">${this.books[i].name}</div>
            <div class="price field">${this.books[i].price}</div>
            <div class="description field">${this.books[i].author}</div>
           </div>`
        }
    }
    drawButtons(obj){
        var elem = document.getElementById('buttons');
        var booksPerPage = +document.getElementById('countPage').value;
        elem.innerHTML = "";
        for(var i=0; i < this.pages; i++){
            elem.innerHTML += `<button id="${i}" onclick="shop.addBooks(${productPerPage}, ${i+1})>"${i+1}</button>`;
        }
    }
}

var shop = new Shop();

shop.books = [
 new Book("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
 new Book("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
 new Book("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
 new Book("The Outsider", 270, "Stephen King", "img/4.jpg"),
 new Book("It",270,"Stephen King","img/5.jpg"),
 new Book("The Shining", 200, "Stephen King","img/6.jpg"),
 new Book("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg"),
 new Book("The Raven", 95, "Edgar Allan Poe","img/8.jpg"),
 new Book("The Talisman", 150, "Walter Scott","img/9.jpg"),
 new Book("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg"),
 new Book("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg"),
 new Book("Tai-pan",195,"James Clavell","img/12.jpg"),
 new Book("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
 new Book("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
 new Book("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
 new Book("The Outsider", 270, "Stephen King", "img/4.jpg"),
 new Book("It",270,"Stephen King","img/5.jpg"),
 new Book("The Shining", 200, "Stephen King","img/6.jpg"),
 new Book("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg"),
  new Book("The Raven", 95, "Edgar Allan Poe","img/8.jpg"),
  new Book("The Talisman", 150, "Walter Scott","img/9.jpg"),
  new Book("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg"),
  new Book("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg"),
  new Book("Tai-pan",195,"James Clavell","img/12.jpg"),
  new Book("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
  new Book("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
  new Book("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
  new Book("The Outsider", 270, "Stephen King", "img/4.jpg"),
  new Book("It",270,"Stephen King","img/5.jpg"),
  new Book("The Shining", 200, "Stephen King","img/6.jpg"),
  new Book("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg"),
  new Book("The Raven", 95, "Edgar Allan Poe","img/8.jpg"),
  new Book("The Talisman", 150, "Walter Scott","img/9.jpg"),
  new Book("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg"),
  new Book("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg"),
  new Book("Tai-pan",195,"James Clavell","img/12.jpg"),
  new Book("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg"),
 new Book("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg"),
 new Book("The Da Vinci Code ",310,"Dan Brown","img/3.jpg"),
 new Book("The Outsider", 270, "Stephen King", "img/4.jpg")
];

var productPerPage = +document.getElementById('countPage').value;

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
    // c += (`<button>${i+1}</button>`)
    c += `<button id="${i}" onclick="addBooks(${productPerPage}, ${i+1})>"${i+1}</button>`;
     };
     document.getElementById('buttons').innerHTML = c;
}
drawButtons(productPerPage) 
