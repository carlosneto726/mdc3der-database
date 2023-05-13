import cars from '../json/cars.json' assert { type: 'json' };
import brands from '../json/brands.json' assert { type: 'json'};


        
function formatadorDePreco(price_value){
    var formatted_price = '';
    var price = ''+price_value;
    var price_length = price.length;
    var start;
    while(price_length > 0){
        start = price_length - 3 > 0 ? price_length - 3 : 0;
        formatted_price = ' ' + price.substring(start, start+3)+formatted_price;
        price = price.substring(0, start);
        price_length = price.length;
    }
    formatted_price = formatted_price.replace(/^\s+/, '$').replace(' ', '.');
    return formatted_price;
}

function formatadorFloat(numero){
    return numero.replace('.', ',');
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var car_id = urlParams.get('carid');
console.log(car_id)

var car_card = document.getElementById("car-card");
var card = document.createElement("div");
card.classList.add("car-card")

var i = car_id-1;

card.innerHTML =
    "<center>" +
    "   <div class='card' style='width: 55rem;'>" +
    "       <div class='card-body'>" +
    "          <h1 class='card-title' align='left'>Nome: <span class='fw-bold'>"+cars[i].name+"</span></h1>" + 
    "          <p class='card-text fs-4' align='left'>Classe: <span class='fw-bold'>"+cars[i].class+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Tipo: <span class='fw-bold'>"+cars[i].type+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Marca: <span class='fw-bold'>"+brands[cars[i].brand_id - 1].name+"</span></p>"+
    "          <p class='card-text fs-4' align='left'>Preço: <span class='fw-bold'>"+formatadorDePreco(cars[i].price)+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Aceleração: <span class='fw-bold'>"+formatadorFloat(cars[i].aceleration)+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Aceleração modificada: <span class='fw-bold'>"+formatadorFloat(cars[i].tuned_aceleration)+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Velocidade máxima: <span class='fw-bold'>"+formatadorFloat(cars[i].speed)+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Velocidade máxima modificada: <span class='fw-bold'>"+formatadorFloat(cars[i].tuned_speed)+"</span></p>" +
    "          <p class='card-text fs-4' align='left'>Manuseio: <span class='fw-bold'>"+formatadorFloat(cars[i].handling)+"</p>" +
    "          <p class='card-text fs-4' align='left'>Manuseio modificado: <span class='fw-bold'>"+formatadorFloat(cars[i].tuned_handling)+"</span></p>" +
    "      </div>" +
    "      <img class='card-img-bottom rounded' src='../img/cars/"+(i+1)+".WEBP'></img>" +
    "   </div>" +
    "</center>";

car_card.appendChild(card);



var page_navigation = document.getElementById("page-navigation");
var pagination = document.createElement("div");



var minus_current = parseInt(cars[i].id);
var current = parseInt(cars[i].id);
var plus_current = parseInt(cars[i].id);


var next = parseInt(cars[i].id) + 1;
var previous = parseInt(cars[i].id) - 1;

if(minus_current <= 3){
    minus_current = 4
}else if(plus_current >= 90){
    plus_current = 91
}




pagination.innerHTML = 
"<nav class='page-navigation' id='page-navigation' aria-label='mb-5'>"+
"    <ul class='pagination justify-content-center mt-5'>"+
"        <li class='page-item'><a class='page-link' id='anterior' href='car_view.html?carid="+ (previous) +"'>Anterior</a></li>"+
"        <li class='page-item'><a class='page-link' href='car_view.html?carid="+(minus_current - 3)+"'>"+(minus_current - 3)+"</a></li>"+
"        <li class='page-item'><a class='page-link' href='car_view.html?carid="+(minus_current - 2)+"'>"+(minus_current - 2)+"</a></li>"+
"        <li class='page-item'><a class='page-link' href='car_view.html?carid="+(minus_current - 1)+"'>"+(minus_current - 1)+"</a></li>"+
"        <li class='page-item'><a class='page-link' style='background-color: #161821; color: white;' href='#'>"+current+"</a></li>"+
"        <li class='page-item'><a class='page-link' href='car_view.html?carid="+(plus_current + 1)+"'>"+(plus_current + 1)+"</a></li>"+
"        <li class='page-item'><a class='page-link' href='car_view.html?carid="+(plus_current + 2)+"'>"+(plus_current + 2)+"</a></li>"+
"        <li class='page-item'><a class='page-link' href='car_view.html?carid="+(plus_current + 3)+"'>"+(plus_current + 3)+"</a></li>"+
"        <li class='page-item'><a class='page-link' id='proximo' href='car_view.html?carid="+next+"'>Próximo</a></li>"+
"    </ul>"+
"</nav>";


page_navigation.appendChild(pagination);


if(current == 94){
    var proximo = document.getElementById("proximo");
    proximo.href = "#"
}else if(current == 1){
    var anterior = document.getElementById("anterior");
    anterior.href = "#"
}