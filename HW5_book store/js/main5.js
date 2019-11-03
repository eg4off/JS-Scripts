<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Homework_5</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="box-category">
            <div class="number">
                <span>Number of products on the page</span>
                <input id="countPerPage" value="20" onchange="numberProducts()">
            </div>
            <div id="sort">
                <button onclick="sortByName()">sort by name</button>
                <button onclick="sortByPrice()">sort by price</button>
            </div>
        </div>
        <div id="data">

        </div>
        <div id="btns"></div>
    </div>

    <script>
        let productsPerPage = +document.getElementById('countPerPage').value;

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.json-generator.com/api/json/get/cfQWQLOqNu?indent=2");
        xhr.send();

        var func = (productsPerPage) => {

            let content = '';
            for (let i = 0; i < productsPerPage; i++) {
                content +=
                    `<div class="goods-card">
                <img onmouseover="mOver(this)" onmouseout="mOut(this)" src="${products[i].image}"> 
               <h1>${products[i].name}</h1>
                <p>${products[i].author}</p>
                <h5>${products[i].price} $</h5>
                <input type="button" value="Buy now">
                </div>`

            }
            document.getElementById('data').innerHTML = content;

        }



        function numberProducts() {
            let productsPerPage = +document.getElementById('countPerPage').value;
            products = JSON.parse(xhr.response);

            // console.log(products)
            func(productsPerPage);
            drawButtons(productsPerPage);
            setEvents();
        }
        xhr.onload = numberProducts;

        function addProducts(products) {

            let content = '';
            for (let i = 0; i < products.length; i++) {
                content +=
                    `<div class="goods-card">
                <img onmouseover="mOver(this)" onmouseout="mOut(this)" src="${products[i].image}"> 
               <h1>${products[i].name}</h1>
                <p>${products[i].author}</p>
                <h5>${products[i].price} $</h5>
                <input type="button" value="Buy now">
                </div>`
            }
            document.getElementById('data').innerHTML = content;
        }




        function sortByName() {
            numberProducts();
            sortName(products);
            func(productsPerPage);

        }

        function sortName(arr) {
            arr.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
        };

        function sortByPrice() {
            numberProducts();
            sortPrice(products);
            func(productsPerPage);
        };


        function sortPrice(arr) {
            arr.sort(function (a, b) {
                return a.price - b.price
            });
        };


        function drawButtons(productsPerPage) {
            let buttonCount = products.length / productsPerPage;

            let butt = '';

            for (let i = 0; i < buttonCount; i++) {

                butt += (`<button class='numBtn'>${i + 1}</button>`)

            }
            document.getElementById('btns').innerHTML = butt;

        }

        function setEvents() {

            let items = document.getElementsByClassName('numBtn');
            // console.log(items);
            for (let item of items) {

                item.addEventListener('click', function () {
                    let pageNum = +this.innerHTML;
                    let start = (pageNum - 1) * productsPerPage;
                    let end = start + productsPerPage;

                    let notes = products.slice(start, end)
                    addProducts(notes);
                    console.log(notes);

                });
            }
        }
















        function mOver(element) {
            element.style.opacity = "0.7";
            // element.style.border = "1px solid black"
        }

        function mOut(element) {
            element.style.opacity = "1";
            // element.style.border = "none"

        }





    </script>
</body>

</html>