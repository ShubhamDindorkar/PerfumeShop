const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Emrald Green Special",
    price: 119,
    colors: [
      {
        code: "green",
        img: "./images/perfume1.png",
      },
     
    ],
  },
  {
    id: 2,
    title: "Roses New Special",
    price: 149,
    colors: [
      {
        code: "pink",
        img: "./images/perfume2.png",
      },
     
    ],
  },
  {
    id: 3,
    title: "Tom Ford Special",
    price: 109,
    colors: [
      {
        code: "turqouise",
        img: "./images/perfume3.png",
      },
      
    ],
  },
  {
    id: 4,
    title: "Crater Blue",
    price: 129,
    colors: [
      {
        code: "blue",
        img: "./images/perfume4.png",
      },
      
    ],
  },
  {
    id: 5,
    title: "Benigna New Season",
    price: 99,
    colors: [
      {
        code: "Yellow",
        img: "./images/perfume5.png",
      },
     
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    });
  });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
