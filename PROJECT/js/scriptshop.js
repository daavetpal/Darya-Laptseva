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
        imgUrl: "./img/broccoli.png",
        type: "Vegetable",
        text: "Calabrese Broccollis",
        old: "$20.00",
        new: "$13.00"
    },
    {
        imgUrl: "./img/banan.png",
        type: "Fresh",
        text: "Fresh Banana Fruites",
        old: "$20.00",
        new: "$14.00"
    },
    {
        imgUrl: "./img/nuts.png",
        type: "Millets",
        text: "White Nuts",
        old: "$20.00",
        new: "$15.00"
    },
    {
        imgUrl: "./img/tomato.png",
        type: "Vegetable",
        text: "Vegan Red Tomato",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "./img/bean.png",
        type: "Health",
        text: "Mung Bean",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "./img/hazelnut.png",
        type: "Nuts",
        text: "Brown Hazelnut",
        old: "$20.00",
        new: "$12.00"
    },
    {
        imgUrl: "./img/eggs.png",
        type: "Fresh",
        text: "Calabrese Broccollis",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "./img/broccoli.png",
        type: "Fresh",
        text: "Zelco Suji Elaichi Rusk",
        old: "$20.00",
        new: "$15.00"
    },
    {
        imgUrl: "./img/mungbean.png",
        type: "Health",
        text: "Mung Bean",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "./img/whitenuts.png",
        type: "Nuts",
        text: "White Hazelnut",
        old: "$20.00",
        new: "$12.00"
    },
    {
        imgUrl: "./img/corn.png",
        type: "Fresh",
        text: "Fresh Corn",
        old: "$20.00",
        new: "$17.00"
    },
    {
        imgUrl: "./img/almonds.png",
        type: "Fresh",
        text: "Organic Almonds",
        old: "$20.00",
        new: "$15.00"
    }
];

var renderBtn = document.querySelector('button[data-blabla="render"]');
var app = document.getElementById('group_cards');

function render() {
    var str = "";

    for (var i = 0; i < cards.length; i++) {
        str += `
        <div class="card">
            <div class='type'><span class='card-type'>${cards[i].type}</span></div>
            <img src="${cards[i].imgUrl}" class="card-img-top" "alt="${cards[i].imgUrl}">
            <div class="card-body">
    <span class="card-text">${cards[i].text}</span>
    <div class="card-description"><span class="old-price">${cards[i].old}</span><span class="new-price">${cards[i].new}</span>
    <div class="rating-area">
	<input type="radio" id="star-5" name="rating" value="5">
	<label for="star-5" title="5"></label>	
	<input type="radio" id="star-4" name="rating" value="4">
	<label for="star-4" title="4"></label>    
	<input type="radio" id="star-3" name="rating" value="3">
	<label for="star-3" title="3"></label>  
	<input type="radio" id="star-2" name="rating" value="2">
	<label for="star-2" title="2"></label>    
	<input type="radio" id="star-1" name="rating" value="1">
	<label for="star-1" title="1"></label>
</div>
    </div>
  </div>
</div>
        </div>`
    }
    app.innerHTML = str
}

render();
