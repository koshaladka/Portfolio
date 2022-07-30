let prom = document.querySelector('#prompt');


let menuItem = document.querySelectorAll('.menu-item');
console.log(menuItem);

/* menuItem[1].style.borderRadius = '100%';

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].style.color = 'red';
}

menuItem.forEach(function(item, i, mass) {
    item.style.color = 'blue';
}) */


let div = document.createElement('div');
    

div.classList.add('menu-item');

/* document.body.appendChild(div); /* добавляем в конец созданный элемент */ 

let menu = document.querySelector('.menu');

menu.appendChild(div);
div.innerHTML = 'Пятый элемент';

menu.insertBefore(menuItem[2],menuItem[1]);

let answer =  prompt ("Какое Ваше отношение к технике apple", "");
prom.textContent = answer;

let title = document.getElementById("title");
let adv = document.getElementsByClassName("adv")[0];

title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();   

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';