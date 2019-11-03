var products = [];
            let xhr = new XMLHttpRequest();
            xhr.open('GET', "http://www.json-generator.com/api/json/get/cfpkCJQyoO?indent=2");
            xhr.send();
            var func = (response) => {
                let string = ''
                for(let i = 0; i<20; i++){
                   string +=  `img=${response[i].img}, </br> name=${response[i].name}, </br> price=${response[i].price}, </br> author=${response[i].author}`;
                }
                document.getElementById('product').innerHTML = string
            }
            xhr.onload = function(){
                products = JSON.parse(xhr.response);
                func(products)
                }

        function drawButtons(productPerPage){
            let buttonCount = products.length/productPerPage;
            let c = '';

             for (let i=0; i<buttonCount; i++){
             c += (`<button>${i+1}</button>`)
             };
             document.getElementById('buttons').innerHTML = c;
        }
       const a=() => {
        var productPerPage = 20;
        drawButtons(productPerPage) 
       }  ;
       a();

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
