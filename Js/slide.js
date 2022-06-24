var images = [];
for (let i = 1; i < 4; i++) {
    images[i] = new Image();
    images[i].src = "../Hinh_Anh/slide/" + i + ".png";
}

var index = 1;
var t;

function first() {
    index = 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}

function last() {
    index = images.length - 1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}

function next() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}

function fstart() {
    t = window.setInterval(next, 2000);
}

function prev() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
}