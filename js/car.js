import cars from '../json/cars.json' assert { type: 'json' };

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var car_id = urlParams.get('carid');
console.log(car_id)

var car_card = document.getElementById("car-card");
var h1 = document.createElement("h1");
var i = car_id-1;

h1.innerHTML =
    "<div>"+
    "    <img src='../img/cars/"+(i+1)+".png'></img>"+
    "    <p align='left' class='ms-3'>" + 
    "        Nome:"+cars[i].name+"</br>" + 
    "        Tipo: "+cars[i].class+" / "+cars[i].type+"</br>" +
    "        Preço: R$"+cars[i].price+"<br/>"+
    "        Aceleração: "+cars[i].aceleration+"<br/>"+
    "        Velocidade: "+cars[i].speed+"<br/>"+
    "        Manuseio: "+cars[i].handling+"<br/>"+
    "        Aceleração máximo: "+cars[i].tuned_aceleration+"<br/>"+
    "        Velocidade máximo: "+cars[i].tuned_speed+"<br/>"+
    "        Manuseio máximo: "+cars[i].tuned_handling+"<br/>"+
    "    </p>" +
    "</div>";


//+cars[car_id-1]['id'];

"    <img src='img/"+(i+1)+".png' class='card-img-top'>" +
"    <div class='card-body'>" +


car_card.appendChild(h1);