gsap.to('#good',{
  text: "Приятного времяпровождения на нашем сайте!",
  duration: 4,
  ease: 'power1.in',
})


gsap.from('.inner', {opacity: 0, duration: 2, stagger: 0.8})
gsap.from('h1', {opacity: 0, duration: 3, ease: 'bounce'})
gsap.from('h2', {opacity: 0, duration: 3, ease: 'bounce'})

gsap.from('.slider', {y: 500, duration: 3, ease: 'bounce'})




function soonOpen() {
  const openDate = new Date('April 10,2022 00:00');
  const now = new Date();
  const diff = openDate - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(diff/msInDay);

  //Далее просклоняем день
  const dayinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
  }
  const dayinRussiaDisplay = dayinRussia (displayDay,['день', 'дня', 'дней']);
  document.querySelector('.days').innerHTML = `${displayDay}  <br> ${dayinRussiaDisplay}`;


  const displayHour = Math.floor((diff%msInDay) / msInHour);

 const hourinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
  }
  const hourinRussiaDisplay = hourinRussia (displayHour,['час', 'часа', 'часов']);
  document.querySelector('.hours').innerHTML = `${displayHour}  <br> ${hourinRussiaDisplay}`;


  const displayMinute = Math.floor((diff%msInHour) / msInMinute);
  const minuteinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
  }
  const minuteinRussiaDisplay = minuteinRussia (displayMinute,['минута', 'минуты', 'минут']);
  document.querySelector('.minutes').innerHTML = `${displayMinute}  <br> ${minuteinRussiaDisplay}`;



  const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
  const secondinRussia = function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles [(number%100>4 && number%100<20)? 2 : cases[(number%10<5)? number%10:5]];
  }
  const secondinRussiaDisplay = secondinRussia (displaySecond,['секунда', 'секунды', 'секунд']);
  document.querySelector('.seconds').innerHTML = `${displaySecond}  <br> ${secondinRussiaDisplay}`;
//Далее когда отсчет времени дойдет до 0 счетчик остановится

if (diff <= 0) {
  document.querySelector('.days').textContent = 0;
  document.querySelector('.hours').textContent = 0;
  document.querySelector('.minutes').textContent = 0;
  document.querySelector('.seconds').textContent = 0;
//js продолжает считать и нужно остановить счет

  clearInterval(timerID);
  changetitle();
  changeclass(); 
}
}
let timerID = setInterval( soonOpen, 1000);
//Меняем заголовок
function changetitle() {
  const title = document.querySelector('.counter'); 
  title.textContent = 'Ура! Мы открылись!';
  title.classList.add('new_title');
}
function changeclass() {
  const deletecounter = document.querySelector('.counter__all');
  deletecounter.remove('counter__all');
}



//Далее adventure game


const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");

const li1 = document.querySelector(".li1");
const li2 = document.querySelector(".li2");
const li3 = document.querySelector(".li3");
const li4 = document.querySelector(".li4");
const li5 = document.querySelector(".li5");
const li6 = document.querySelector(".li6");
const li7 = document.querySelector(".li7");
const li8 = document.querySelector(".li8");

const pizzaContainerMeat = document.querySelector(".pizzaContainerMeat");
const pizzaContainerSausage = document.querySelector(".pizzaContainerSausage");
const pizzaContainerMushroom = document.querySelector(".pizzaContainerMushroom");
const pizzaContainerСheese = document.querySelector(".pizzaContainerСheese");



const pizzaImg1 = document.querySelector(".pizzaImg1");
const pizzaImg2 = document.querySelector(".pizzaImg2");
const pizzaImg3 = document.querySelector(".pizzaImg3");
const pizzaImg4 = document.querySelector(".pizzaImg4");

const titleGame = document.querySelector("#titleGame");

const btnok = document.querySelector(".btnok");




btn5.addEventListener('click', meat);
btn6.addEventListener('click', no);


btn7.addEventListener('click', sousage);
btn8.addEventListener('click', no);

btn9.addEventListener('click', mushroom);
btn10.addEventListener('click', no);

btn11.addEventListener('click', cheese);
btn12.addEventListener('click', no);

function meat() {
  pizzaImg1.setAttribute('src', './images/Мясная.jpg');
  li1.innerHTML = 'МЕКСИКАНСКАЯ';
  li2.innerHTML = 'МЯСНАЯ';
  titleGame.textContent = "ПОПРОБУЙТЕ МЯСНЫЕ ВАРИАНТЫ";
  pizzaContainerSausage.style = 'display: none';
  pizzaContainerMushroom.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';

  btn5.addEventListener('click', yesMeat);
}

function no() {
  pizzaImg1.setAttribute('src', './images/no!.jpg');
  titleGame.textContent = "РАССМОТРИТЕ ДРУГИЕ ВАРИАНТЫ НА НАШЕМ САЙТЕ!";

  pizzaContainerSausage.style = 'display: none';
  pizzaContainerMushroom.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';

 btnok.style = 'display: block';
 btnok.addEventListener('click', ()=> {
   location.reload();
 })
 

  li1.style = 'display: none';
  li2.style = 'display: none';

  btn5.style = 'display: none';
btn6.style = 'display: none';
}


function yesMeat() {

  titleGame.textContent = "ОФОРМЛЯЙТЕ ЗАКАЗ И НАСЛАЖДАЙТЕСЬ!";

  pizzaContainerSausage.style = 'display: none';
  pizzaContainerMushroom.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';

  btn5.addEventListener('click', ()=>{
    
    btn5.innerHTML = '<a href="#sent">ЗАКАЗАТЬ!</a>'   //c кнопки переходит на раздел сайта
  
  })
}


function sousage() {
  pizzaImg2.setAttribute('src', './images/Папперони.jpg');
  li3.innerHTML = 'ГАВАЙСКАЯ';
  li4.innerHTML = 'ПАППЕРОНИ';


 pizzaContainerMushroom.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';
  pizzaContainerMeat.style = 'display: none';

  btn7.addEventListener('click', yesSousage);
}


function yesSousage() {

  titleGame.textContent = "ОФОРМЛЯЙТЕ ЗАКАЗ И НАСЛАЖДАЙТЕСЬ!";
  pizzaContainerMeat.style = 'display: none';
  pizzaContainerMushroom.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';

  btn7.innerHTML = '<a href="#sent">ЗАКАЗАТЬ!</a>'   //c кнопки переходит на раздел сайта
}

function mushroom() {
  pizzaImg3.setAttribute('src', './images/Деревенкая.jpg');
  li5.innerHTML = 'ДЕРЕВЕНСКАЯ';
  li6.innerHTML = 'МАРГАРИТТА';

  pizzaContainerMeat.style = 'display: none';
  pizzaContainerSausage.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';

  btn9.addEventListener('click', yesMushroom);
}

function  yesMushroom() {
  titleGame.textContent = "ОФОРМЛЯЙТЕ ЗАКАЗ И НАСЛАЖДАЙТЕСЬ!";
  pizzaContainerMeat.style = 'display: none';
  pizzaContainerSausage.style = 'display: none';
  pizzaContainerСheese.style = 'display: none';

  btn9.innerHTML = '<a href="#sent">ЗАКАЗАТЬ!</a>'   //c кнопки переходит на раздел сайта
}

function cheese() {
  pizzaImg4.setAttribute('src', './images/4 сыра.jpg');
  li7.innerHTML = '4 СЫРА';
  li8.innerHTML = 'МАРГАРИТТА';

  pizzaContainerMeat.style = 'display: none';
  pizzaContainerSausage.style = 'display: none';
  pizzaContainerMushroom.style = 'display: none';

  btn11.addEventListener('click', yesCheese);
}


function yesCheese() {
  titleGame.textContent = "ОФОРМЛЯЙТЕ ЗАКАЗ И НАСЛАЖДАЙТЕСЬ!";
  pizzaContainerMeat.style = 'display: none';
  pizzaContainerSausage.style = 'display: none';
  pizzaContainerMushroom.style = 'display: none';

  btn11.innerHTML = '<a href="#sent">ЗАКАЗАТЬ!</a>'   //c кнопки переходит на раздел сайта
}




//Далее слайдер
const next = document.querySelector(".next");
const back = document.querySelector(".back");

const photos = [
  "/images/4 сыра.jpg",
  "/images/Гавайская.jpg",
  "/images/Маргарита.jpg",
  "/images/Мексиканская.jpg",
  "/images/Мясная.jpg",
  "/images/Папперони.jpg",
  "/images/Цезарь с цыпленком.jpg",
];
let i = 0;
next.addEventListener('click', () => {
i++;
if (i > photos.length - 1) {
    i = 0;
}
document.querySelector('.slider_pictures').src = photos[i];
});
back.addEventListener('click', () => {
    i--;
    if (i < 0){
        i = photos.length - 1;
    }
    document.querySelector('.slider_pictures').src = photos[i];
    });



  //Далее эффект увеличения  

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    removeFocus();
    item.classList.add("increase");
  });
  removeFocus = () => {
    items.forEach((item) => {
      item.classList.remove("increase");
    });
  };
});
