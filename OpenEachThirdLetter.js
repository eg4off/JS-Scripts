var hideFunc = function(){var mail = document.getElementsByClassName("zA");
var nth = 3;

for (var i = nth-1; i < mail.length-1; i+=nth) {
    mail[i].style.display = "none";
}
};
hideFunc();
