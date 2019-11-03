class Products {
    constructor(name,price,author,img){
        this.name = name;
        this.price = price;
        this.author = author;
        this.img = img;
    }
}

var book1 = new Products("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg");
var book2 = new Products("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg");
var book3 = new Products("The Da Vinci Code ",310,"Dan Brown","img/3.jpg");
var book4 = new Products("The Outsider", 270, "Stephen King", "img/4.jpg");
var book5 = new Products("It",270,"Stephen King","img/5.jpg")
var book6 = new Products("The Shining", 200, "Stephen King","img/6.jpg");
var book7 = new Products("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg")
var book8 = new Products("The Raven", 95, "Edgar Allan Poe","img/8.jpg");
var book9 = new Products("The Talisman", 150, "Walter Scott","img/9.jpg");
var book10 = new Products("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg");
var book11 = new Products("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg")
var book12 = new Products("Tai-pan",195,"James Clavell","img/12.jpg");

var arrBooks = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12];

function addBooks(item){
    for (let i = 0; i<arrBooks.length; i++){
            document.getElementById("products").innerHTML += `<div class="info-books">
            <div class="img"><img src=${item[i].img}></div>
            <div class="name field">${item[i].name}</div>
            <div class="price field">${item[i].price}</div>
            <div class="description field">${item[i].author}</div>
           </div>`
        }
}

addBooks(arrBooks);

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
// сортувальні функції..
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
