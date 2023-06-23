var cards = [
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Volvo",
        sale: false,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    },
    {
        imgUrl: "https://cdn.motor1.com/images/mgl/jllxgl/s1/2023-mercedes-amg-c43-front-3-4.jpg",
        title: "Mercedes-Benz C-класса",
        sale: true,
        text: "Седан и универсал Mercedes-Benz C-класса, пережившие смену поколений в феврале прошлого года, обзавелись первой «заряженной» модификацией. Это младшая из AMG-версий, и, вопреки слухам о переименовании, она сохранила индекс 43."
    },
    {
        imgUrl: "https://www.ixbt.com/img/x780/n1/news/2022/8/3/bmw-xm-2023-oficzialno-predstavlen-i-dostupen-dlya-pokupki_large.jpg",
        title: "BMW XM",
        sale: false,
        text: "Новый BMW XM построен на гибридной платформе, которая состоит из бензинового двигателя V8 объёмом 4,4 литра мощностью 489 л.с. с 650 Нм крутящего момента и электромотора мощностью 196 л.с. Автомобиль получил восьмиступенчатую автоматическую коробку передач M Steptronic."
    },
    {
        imgUrl: "https://avatars.mds.yandex.net/get-verba/787013/2a000001609d0898e5f4cbbd14057098e52d/cattouchret",
        title: "Audi A7",
        sale: true,
        text: "(4G) Рестайлинг – лифтбек E-класса, полный и передний привод. Робот и автомат. Бензиновые и дизельные двигатели мощностью от 218 до 338 лошадиных сил."
    }
];

var renderBtn = document.querySelector('button[data-blabla="render"]');
var del = document.querySelector('button[data-blabla="delete"]');
var app = document.getElementById('app');

function render(){
    var str = "";

    for(var i = 0; i < cards.length; i++){
        str+= `
        <div class="card" style="width: 18rem;">
            ${cards[i].sale ? "<div class='sale'></div>": "" } 
            <img src="${cards[i].imgUrl}" class="card-img-top" alt="${cards[i].imgUrl}">
            <div class="card-body">
                <h5 class="card-title">${cards[i].title}</h5>
                <p class="card-text">${cards[i].text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    }

    app.innerHTML = str
}

render();

// renderBtn.onclick = render;
del.onclick = function(){
    cards.pop();
    render();
}