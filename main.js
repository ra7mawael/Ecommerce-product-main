let menu = document.querySelector(".menu");
let close = document.querySelector(".mean-links .close");
let linksContainer = document.querySelector(".mean-links");
let next = document.querySelector(".next");
let before = document.querySelector(".before");
let meanImg = document.querySelector(".mean-img");
let miuns = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let countnum = document.querySelector(".left-hea .buttom span");
let btn = document.querySelector(".btn");
let span = document.querySelector(".right-nav span");
let cart = document.querySelector(".cart-btn");
let btnchekout = document.querySelector(".btnchekout");
let empty = document.querySelector(".empty");
let filedNum = document.querySelector(".filed-num");
let checkout = document.getElementById("checkout");
let num = document.querySelector(".num");
let spanNum = document.querySelector(".span-num");
let del = document.querySelector(".image-two .image-two");
let smallImages = document.querySelectorAll(".small-images img");
//start nav
menu.onclick = () => {
    linksContainer.style.left = "0";
};

close.onclick = () => {
    linksContainer.style.left = "-60%";
};
//end nav

let images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
];

let numImg = 0;

next.onclick = () => {
    if (numImg < 3) {
        numImg++;
        meanImg.src = `images/${images[numImg]}`;
        console.log(numImg);
    }
};

before.onclick = () => {
    if (numImg > 0) {
        numImg--;
        meanImg.src = `images/${images[numImg]}`;
        console.log(numImg);
    }
};

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].onclick = () => {
        meanImg.src = `images/${images[i]}`;
        console.log(1);
    };
}
count = 0;
plus.onclick = () => {
    if (count < 10) {
        count++;
        countnum.innerHTML = count;
        console.log(count);
    }
};

miuns.onclick = () => {
    if (count > 0) {
        count--;
        countnum.innerHTML = count;
        console.log(count);
    }
};

btn.onclick = () => {
    if (count > 0) {
        span.style.display = "block";
        span.innerHTML = count;
    } else {
        span.style.display = "none";
    }
    showData();
};

cart.onclick = () => {
    btnchekout.classList.toggle("btncheckout-toogle");
    if (count > 0) {
        empty.style.display = "none";
        filedNum.style.display = "flex";
        checkout.style.display = "block";
        num.innerHTML = count;
        spanNum.innerHTML = `  $${125 * count}.00`;
    } else {
        empty.style.display = "block";
        filedNum.style.display = "none";
        checkout.style.display = "none";
    }
    showData();
};

function showData() {
    if (count > 0) {
        empty.style.display = "none";
        filedNum.style.display = "flex";
        checkout.style.display = "block";
        num.innerHTML = count;
        spanNum.innerHTML = `  $${125 * count}.00`;
        del.onclick = () => {
            count--;
            countnum.innerHTML = count;
            span.innerHTML = count;
            if (count == 0) {

                span.style.display = "none";
            }
            showData();
        };
    } else {
        empty.style.display = "block";
        filedNum.style.display = "none";
        checkout.style.display = "none";
    }
}