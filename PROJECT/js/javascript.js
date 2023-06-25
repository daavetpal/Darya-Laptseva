let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector("header").style.visibility = "visible";
  } else {
    document.querySelector("header").style.top = "-250px";
    document.querySelector("header").style.visibility = "hidden";
  }
  prevScrollpos = currentScrollPos;
};

const menu = document.querySelector('.header_menu'),
			burger = document.querySelector('.burger'),
			overlay = document.querySelector('.overlay'),
      btnCloseMenu = menu.querySelector('.burger_close'),
      swiper1 = document.querySelector('.slider__container'),
			swiper2 = document.querySelector('.swiper');

// Swiper
let swiperSlider1 = new Swiper(swiper1, {
  //Optional parameters
	centeredSlides: true,
	slidesPerView: 'auto', /*позволяет ширину слайдов задавать самим*/
  loop: true,
  spaceBetween: 10,

//Navigation arrows
    navigation: {
      nextEl: '.swiper__btn-right',
      prevEl: '.swiper__btn-left',
    },

//Autoplay
    autoplay: {
      delay: 3000,
    },
  
});

const swiperSlider2 = new Swiper(swiper2, {
  // Optional parameters
  centeredSlides: true,
	slidesPerView: 'auto', /*позволяет ширину слайдов задавать самим*/
  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
	  type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__btn-right',
    prevEl: '.testimonials__btn-left',
  },

});

/* Burger */
burger.onclick = () => {
	menu.classList.add('open');
	overlay.classList.add('open');
}

overlay.onclick = () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
}

btnCloseMenu.onclick = () => {
  	menu.classList.remove('open');
	overlay.classList.remove('open');
}


var cards = [
   
    {
        imgUrl: "",
        type: "Vegetable",
        sale: true,
        text: "Eggs"
    },
    {
        imgUrl: "",
        title: "Fresh",
        sale: false,
        text: "Новый BMW XM построен на гибридной платформе, которая состоит из бензинового двигателя V8 объёмом 4,4 литра мощностью 489 л.с. с 650 Нм крутящего момента и электромотора мощностью 196 л.с. Автомобиль получил восьмиступенчатую автоматическую коробку передач M Steptronic."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    }
];

var renderBtn = document.querySelector('button[data-blabla="render"]');
var app = document.getElementById('group_cards');

function render(){
    var str = "";

    for(var i = 0; i < cards.length; i++){
        str+= `
        <div class="card">
            <div class='type'><span class="card-type">${cards[i].type}</span></div>
            <img src="${cards[i].imgUrl}" class="card-img-top" "alt="${cards[i].imgUrl}">
            <div class="card-body">
    <p class="card-text">${cards[i].text}</p>
    <div class="card-description">${cards[i].text}</div>
  </div>
</div>
        </div>`
    }
    app.innerHTML = str
}

render();
