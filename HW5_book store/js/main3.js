class Goods {
    constructor(name,price,author,img){
        this.name = name;
        this.price = price;
        this.author = author;
        this.img = img;
    }
}

var arrBooks = new Array()
 arrBooks[1] = new Goods ("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg")
 arrBooks[2] = new Goods ("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg")
 arrBooks[3] = new Goods ("The Da Vinci Code ",310,"Dan Brown","img/3.jpg")
 arrBooks[4] = new Goods ("The Outsider", 270, "Stephen King", "img/4.jpg")
 arrBooks[5] = new Goods ("It",270,"Stephen King","img/5.jpg")
 arrBooks[6] = new Goods ("The Shining", 200, "Stephen King","img/6.jpg")
 arrBooks[7] = new Goods ("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg")
 arrBooks[8] = new Goods ("The Raven", 95, "Edgar Allan Poe","img/8.jpg")
 arrBooks[9] = new Goods ("The Talisman", 150, "Walter Scott","img/9.jpg")
 arrBooks[10] = new Goods ("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg")
 arrBooks[11] = new Goods ("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg")
 arrBooks[12] = new Goods ("Tai-pan",195,"James Clavell","img/12.jpg")
 arrBooks[13] = new Goods ("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg")
 arrBooks[14] = new Goods ("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg")
 arrBooks[15] = new Goods ("The Da Vinci Code ",310,"Dan Brown","img/3.jpg")
 arrBooks[16] = new Goods ("The Outsider", 270, "Stephen King", "img/4.jpg")
 arrBooks[17] = new Goods ("It",270,"Stephen King","img/5.jpg")
 arrBooks[18] = new Goods ("The Shining", 200, "Stephen King","img/6.jpg")
 arrBooks[19] = new Goods ("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg")
  arrBooks[20] = new Goods ("The Raven", 95, "Edgar Allan Poe","img/8.jpg")
  arrBooks[21] = new Goods ("The Talisman", 150, "Walter Scott","img/9.jpg")
  arrBooks[22] = new Goods ("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg")
  arrBooks[23] = new Goods ("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg")
  arrBooks[24] = new Goods ("Tai-pan",195,"James Clavell","img/12.jpg")
  arrBooks[25] = new Goods ("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg")
  arrBooks[26] = new Goods ("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg")
  arrBooks[27] = new Goods ("The Da Vinci Code ",310,"Dan Brown","img/3.jpg")
  arrBooks[28] = new Goods ("The Outsider", 270, "Stephen King", "img/4.jpg")
  arrBooks[29] = new Goods ("It",270,"Stephen King","img/5.jpg")
  arrBooks[30] = new Goods ("The Shining", 200, "Stephen King","img/6.jpg")
  arrBooks[31] = new Goods ("At the Mountains of Madness",100,"Howard Lovecraft","img/7.jpg")
  arrBooks[32] = new Goods ("The Raven", 95, "Edgar Allan Poe","img/8.jpg")
  arrBooks[33] = new Goods ("The Talisman", 150, "Walter Scott","img/9.jpg")
  arrBooks[34] = new Goods ("The Last of the Mohicans", 140, "James Fenimore Cooper", "img/10.jpg")
  arrBooks[35] = new Goods ("The Count of Monte Cristo",205,"Alexandre Dumas","img/11.jpg")
  arrBooks[36] = new Goods ("Tai-pan",195,"James Clavell","img/12.jpg")
  arrBooks[37] = new Goods ("The Turkish Gambit", 135, "Boris Akunin","img/1.jpg")
 arrBooks[38] = new Goods ("The Murder at the Vicarage", 150, "Agatha Christie","img/2.jpg")
 arrBooks[39] = new Goods ("The Da Vinci Code ",310,"Dan Brown","img/3.jpg")
 arrBooks[40] = new Goods ("The Outsider", 270, "Stephen King", "img/4.jpg")

var productPerPage = 15;

class ArrayGoodsFilter {
    constructor(arr) {
        this.arr = arr;
        this.defaultData()
        this.pageCount()
        this.manageButtons()
        this.nextPage()
    }

        defaultData() {
            var productPerPage = 15;
            for (let i = 0; i<productPerPage; i++){
                document.getElementById("products").innerHTML += `<div class="info-books">
                <div class="img"><img src=${item[i].img}></div>
                <div class="name field">${item[i].name}</div>
                <div class="price field">${item[i].price}</div>
                <div class="description field">${item[i].author}</div>
               </div>`
            }
    }

    //sort functions
    sortByPrise() {
        var div = document.querySelector("#products");
        if (div){
            div.innerHTML = '';
            PriseSort(arrBooks);
            addBooks(arrBooks);
        };
        
    }

    sortByName() {
        var div = document.querySelector("#products");
        if (div){
            div.innerHTML = '';
            nameSort(arrBooks);
            addBooks(arrBooks);
        };
    }

    PriseSort(arr){
        arr.sort(function(a,b){
            return a.price - b.price;
        });
    };

    nameSort(arr){
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
}
//create buttons
