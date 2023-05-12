import listCars from '../json/cars.json' assert { type: 'json' };

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
    formatted_price = formatted_price.replace(/^\s+/, '$');
    formatted_price = formatted_price.replace(' ', '.');
    return formatted_price;
}

function formatadorFloat(numero){
    return numero.replace('.', ',');
}



function showCars(cars){

    var container = document.getElementById("container");
    container.innerHTML = "";
    for(let i = 0; i < cars.length; i++){

        var element = document.createElement("div");
        element.classList.add('childElement');

        element.innerHTML = 
                            "<div class='car-card card' style='width: 24rem;'>" +
                            "    <img src='img/cars/"+(cars[i].id)+".png' class='card-img-top'>" +
                            "    <div class='card-body'>" +
                            "        <h5 class='name card-title fw-bold' align='left'>"+cars[i].name+"</h5>" + 
                            "        <p class='type-class card-text' align='left'>"+cars[i].class+" / "+cars[i].type+"</p>" +
                            "    </div>" +
                            "    <p align='left' class='ms-3'>" + 
                            "        <span class='price'>Preço: "+formatadorDePreco(cars[i].price)+"</span><br/>"+
                            "        <span class='aceleration'>Aceleração: "+formatadorFloat(cars[i].aceleration)+"</span><br/>"+
                            "        <span class='velocity'>Velocidade: "+formatadorFloat(cars[i].speed)+"</span><br/>"+
                            "        <span class='handling'>Manuseio: "+formatadorFloat(cars[i].handling)+"</span><br/>"+
                            "        <span class='tuned-aceleration'>Aceleração máximo: "+formatadorFloat(cars[i].tuned_aceleration)+"</span><br/>"+
                            "        <span class='tuned-velocity'>Velocidade máximo: "+formatadorFloat(cars[i].tuned_speed)+"</span><br/>"+
                            "        <span class='tuned-handling'>Manuseio máximo: "+formatadorFloat(cars[i].tuned_handling)+"</span><br/>"+
                            "    </p>" +
                            "    <div class='card-body' align='left'>" +
                            "        <a href='sections/car_view.html?carid="+cars[i].id+"' class='btn btn-primary'>Mais Informações</a>" +
                            "    </div>" +
                            "</div>" ;
                            
        container.appendChild(element);

    }
}






export function searchCar(){
    var search = document.getElementById("search").value.toUpperCase();
    const cars = [];

    for(let i = 0; i < listCars.length; i++){
        if(new String(listCars[i].name).valueOf().includes(new String(search).valueOf())){
          cars.push(listCars[i]);
        }
    }
    showCars(cars);
}


export function orderby(btn){
    var acao = btn.name

    if(acao == "padrao"){
        showCars(listCars.sort(function(a, b){return a.id - b.id}));
    }
    else if(acao == "alfa"){
        showCars(listCars.sort(function(a, b){return a.name.localeCompare(b.name)}));
    }
    else if(acao == "preco"){
        showCars(listCars.sort(function(a, b){return b.price - a.price}));
    }
    else if(acao == "classe"){
        showCars(listCars.sort(function(a, b){return a.class.localeCompare(b.class)}));
    }
    else if(acao == "tipo"){
        showCars(listCars.sort(function(a, b){return a.type.localeCompare(b.type)}));
    }
    else if(acao == "ace_p"){
        showCars(listCars.sort(function(a, b){return b.aceleration - a.aceleration}));
    }
    else if(acao == "ace_m"){
        showCars(listCars.sort(function(a, b){return b.tuned_aceleration - a.tuned_aceleration}));
    }
    else if(acao == "vel_p"){
        showCars(listCars.sort(function(a, b){return b.speed - a.speed}));
    }
    else if(acao == "vel_m"){
        showCars(listCars.sort(function(a, b){return b.tuned_speed - a.tuned_speed}));
    }
    else if(acao == "man_p"){
        showCars(listCars.sort(function(a, b){return b.handling - a.handling}));
    }
    else if(acao == "man_m"){
        showCars(listCars.sort(function(a, b){return b.tuned_handling - a.tuned_handling}));
    }
    else if(acao == "remix"){
        showCars(listCars.sort(function(a, b){return b.remix - a.remix}));
    }
    
}



export function switchAttrs(btn){
    var cards = document.getElementsByClassName("car-card");
    var preco = document.getElementsByClassName("price");
    var aceleracao = document.getElementsByClassName("aceleration");
    var velocidade = document.getElementsByClassName("velocity");
    var manuseio = document.getElementsByClassName("handling");
    var velocidade_mod = document.getElementsByClassName("tuned-velocity");
    var aceleracao_mod = document.getElementsByClassName("tuned-aceleration");
    var manuseio_mod = document.getElementsByClassName("tuned-handling");
    var tipo_class = document.getElementsByClassName("type-class");
    var element = btn.name;

    for(let i = 0; i < cards.length; i++){
        if(element === "preco"){preco[i].hidden = !(preco[i].hidden)}
        if(element === "classe-tipo"){tipo_class[i].hidden = !(tipo_class[i].hidden)}
        //if(element === "marca"){[i].hidden = !([i].hidden)}
        if(element === "aceleracao-padrao"){aceleracao[i].hidden = !(aceleracao[i].hidden)}
        if(element === "aceleracao-modificada"){aceleracao_mod[i].hidden = !(aceleracao_mod[i].hidden)}
        if(element === "velocidade-padrao"){velocidade[i].hidden = !(velocidade[i].hidden)}
        if(element === "velocidade-modificada"){velocidade_mod[i].hidden = !(velocidade_mod[i].hidden)}
        if(element === "manuseio-padrao"){manuseio[i].hidden = !(manuseio[i].hidden)}
        if(element === "manuseio-modificado"){manuseio_mod[i].hidden = !(manuseio_mod[i].hidden)}
        
    }            
}





showCars(listCars);
