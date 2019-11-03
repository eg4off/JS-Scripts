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

var productPerPage = 15;
// function number(){
//     var num = +document.getElementById('countPage').value;
//     productPerPage = num
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
    c += (`<button >${i+1}</button>`)
    // c += `<button id="${i}" onclick="addBooks(${productPerPage}, ${i+1})>"${i+1}</button>`;
     };
     document.getElementById('buttons').innerHTML = c;
}
drawButtons(productPerPage) 

manageButtons() {
    let btn = document.querySelectorAll("#buttons");
    var div = document.querySelector("#products");
    var productPerPage = 10;

    for (let item of btn) {

        item.addEventListener("click", function () {
            div.innerHTML = "";

            let pageNum = item.innerText;

            let start = (+pageNum - 1) * itemOnPage;
            let end = start + itemOnPage

            for (let i = start; i < end; i++) {
                div.innerHTML += `<div class="info-books">
                <div class="img"><img src=${item[i].img}></div>
                <div class="name field">${item[i].name}</div>
                <div class="price field">${item[i].price}</div>
                <div class="description field">${item[i].author}</div>
               </div>`

            }

        })

    }

}


nextPage() {

  
    var currentPage = 1;
    var pageSize = 5;
    var skip = 0;
    var totalCount = 0;
    

    myFunction()

    function Next() {
        if (currentPage < totalPage) currentPage++;
        skip = pageSize * (currentPage - 1);
        
    }

   
    function myFunction() {
      
        document.getElementById("products").innerHTML=""
 
        var citrus = category.slice(skip, skip + pageSize);
        for (let i = skip; i < (skip + pageSize); i++) {
            div.innerHTML += `<div class="info-books">
        <div class="img"><img src=${item[i].img}></div>
        <div class="name field">${item[i].name}</div>
        <div class="price field">${item[i].price}</div>
        <div class="description field">${item[i].author}</div>
       </div>`
        }

    }




}
/*
https://ibb.co/2hNNbYW
https://ibb.co/59Z7dvh
https://ibb.co/J2ZWpDh
https://ibb.co/4WRqt0F
https://ibb.co/R0mqNXg
https://ibb.co/WP1nSVx
https://ibb.co/VM17Jvn
https://ibb.co/m8cZtZw
https://ibb.co/7NnL3zp
https://ibb.co/Hqp97Nt
https://ibb.co/vq1kvZB
https://ibb.co/r6L5VSc
*/


