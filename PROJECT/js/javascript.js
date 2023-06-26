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

var cards = [
   
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/broccoli.png",
        type: "Vegetable",
        text: "Calabrese Broccollis",
        old: "$20.00",
        new: "$13.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/banan.png",
        type: "Fresh",
        text: "Fresh Banana Fruites",
        old: "$20.00",
        new: "$14.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/nuts.png",
        type: "Millets",
        text: "White Nuts",
        old: "$20.00",
        new: "$15.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/tomato.png",
        type: "Vegetable",
        text: "Vegan Red Tomato",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/bean.png",
        type: "Health",
        text: "Mung Bean",
        description: "Calabrese Broccolli"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/hazelnut.png",
        type: "Nuts",
        text: "Brown Hazelnut",
        description: "Calabrese Broccolli"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/.png",
        type: "Fresh",
        text: "Calabrese Broccollis",
        description: "Calabrese Broccolli"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/broccoli.png",
        type: "Fresh",
        text: "Zelco Suji Elaichi Rusk",
        description: "Calabrese Broccolli"
    }
];

var renderBtn = document.querySelector('button[data-blabla="render"]');
var app = document.getElementById('group_cards');

function render(){
    var str = "";

 for(var i = 0; i < cards.length; i++){
        str+= `
        <div class="card">
            <div class='type'><span class='card-type'>${cards[i].type}</span></div>
            <img src="${cards[i].imgUrl}" class="card-img-top" "alt="${cards[i].imgUrl}">
            <div class="card-body">
    <p class="card-text">${cards[i].text}</p>
    <div class="card-description"><span class="old-price">${cards[i].old}</span><span class="old-price">${cards[i].new}</span></div>
  </div>
</div>
        </div>`
    }
    app.innerHTML = str
}

render();

document.querySelector(".header_burger").onclick = () => {
    document.querySelector(".header_button").classList.toggle("change");
  };

var cards2 = [
   
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/broccoli.png",
        type: "Vegetable",
        text: "Calabrese Broccollis",
        old: "$20.00",
        new: "$13.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/banan.png",
        type: "Fresh",
        text: "Fresh Banana Fruites",
        old: "$20.00",
        new: "$14.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/nuts.png",
        type: "Millets",
        text: "White Nuts",
        old: "$20.00",
        new: "$15.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/tomato.png",
        type: "Vegetable",
        text: "Vegan Red Tomato",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/bean.png",
        type: "Health",
        text: "Mung Bean",
        description: "Calabrese Broccolli"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/hazelnut.png",
        type: "Nuts",
        text: "Brown Hazelnut",
        description: "Calabrese Broccolli"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/.png",
        type: "Fresh",
        text: "Calabrese Broccollis",
        description: "Calabrese Broccolli"
    },
    {
        imgUrl: "http://127.0.0.1:5500/PROJECT/img/broccoli.png",
        type: "Fresh",
        text: "Zelco Suji Elaichi Rusk",
        description: "Calabrese Broccolli"
    }
];

var renderBtn2 = document.querySelector('button[abc="render2"]');
var prod = document.getElementById('group_cards2');

function render2(){
    var str2 = "";

 for(var f = 0; f < cards2.length; f++){
        str2+= `
        <div class="card">
            <div class='type'><span class='card-type'>${cards2[i].type}</span></div>
            <img src="${cards2[i].imgUrl}" class="card-img-top" "alt="${cards2[i].imgUrl}">
            <div class="card-body">
    <p class="card-text">${cards2[i].text}</p>
    <div class="card-description"><span class="old-price">${cards2[i].old}</span><span class="old-price">${cards2[i].new}</span></div>
  </div>
</div>
        </div>`
    }
    app.innerHTML = str2
}

render2();