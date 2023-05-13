import listCars from '../json/cars.json' assert { type: 'json' };
import listBrands from '../json/brands.json' assert { type: 'json' };

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



function showCars(cars){

    var container = document.getElementById("container");
    container.innerHTML = "";
    for(let i = 0; i < cars.length; i++){

        var element = document.createElement("div");
        element.classList.add('childElement');

        element.innerHTML = 
        "<div class='car-card card' style='width: 24rem;'>" +
        "    <img src='img/cars/"+(cars[i].id)+".webp' class='card-img-top rounded-1'>" +
        "    <div class='card-body'>" +
        "        <h4 class='name border-bottom border-secondary card-title fw-bold' align='left'>"+cars[i].name+"</h4>" + 
        "        <span class='type-class fw-bold fs-5'><p class='d-inline-flex border-bottom border-secondary card-text' align='left'>"+cars[i].class+" / "+cars[i].type+"</p></span>" +
        "    </div>" +
        "    <p align='left' class='ms-3'>" + 
        "        <span class='border-bottom border-secondary brand'>Marca: <span class='fw-bold'>"+listBrands[cars[i].brand_id - 1].name+"</span></span><br/>"+
        "        <span class='border-bottom border-secondary price'>Preço: <span class='fw-bold'>"+formatadorDePreco(cars[i].price)+"</span></span><br/>"+
        "        <span class='aceleration'>Aceleração: <span class='fw-bold'>"+formatadorFloat(cars[i].aceleration)+"</span></span><br/>"+
        "        <span class='border-bottom border-secondary tuned-aceleration'>Aceleração modificada: <span class='fw-bold'>"+formatadorFloat(cars[i].tuned_aceleration)+"</span></span><br/>"+
        "        <span class='velocity'>Velocidade máxima: <span class='fw-bold'>"+formatadorFloat(cars[i].speed)+"</span></span><br/>"+
        "        <span class='border-bottom border-secondary tuned-velocity'>Velocidade máxima modificada: <span class='fw-bold'>"+formatadorFloat(cars[i].tuned_speed)+"</span></span><br/>"+
        "        <span class='handling'>Manuseio: <span class='fw-bold'>"+formatadorFloat(cars[i].handling)+"</span></span><br/>"+
        "        <span class='border-bottom border-secondary tuned-handling'>Manuseio modificado: <span class='fw-bold'>"+formatadorFloat(cars[i].tuned_handling)+"</span></span><br/>"+
        
        "    </p>" +
        "    <div class='card-body' align='left'>" +
        "        <a href='sections/car_view.html?carid="+cars[i].id+"' class='btn btn-primary'>Ver melhor</a>" +
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
    var ordernar_btn = document.getElementById("ordernar-btn");

    if(acao == "padrao"){showCars(listCars.sort(function(a, b){return a.id - b.id})); ordernar_btn.innerHTML = "Ordernar por 'Padrão'"}
    else if(acao == "marca"){showCars(listCars.sort(function(a, b){return a.brand_id.localeCompare(b.brand_id)})); ordernar_btn.innerHTML = "Ordernar por 'Marca'"}
    else if(acao == "alfa"){showCars(listCars.sort(function(a, b){return a.name.localeCompare(b.name)})); ordernar_btn.innerHTML = "Ordernar por 'Alfabeto'"}
    else if(acao == "preco"){showCars(listCars.sort(function(a, b){return b.price - a.price})); ordernar_btn.innerHTML = "Ordernar por 'Preço'"}
    else if(acao == "classe"){showCars(listCars.sort(function(a, b){return a.class.localeCompare(b.class)})); ordernar_btn.innerHTML = "Ordernar por 'Classe'"}
    else if(acao == "tipo"){showCars(listCars.sort(function(a, b){return a.type.localeCompare(b.type)})); ordernar_btn.innerHTML = "Ordernar por 'Tipo'"}
    else if(acao == "ace_p"){showCars(listCars.sort(function(a, b){return b.aceleration - a.aceleration})); ordernar_btn.innerHTML = "Ordernar por 'Aceleração'"}
    else if(acao == "ace_m"){showCars(listCars.sort(function(a, b){return b.tuned_aceleration - a.tuned_aceleration})); ordernar_btn.innerHTML = "Ordernar por 'Aceleração modificada'"}
    else if(acao == "vel_p"){showCars(listCars.sort(function(a, b){return b.speed - a.speed})); ordernar_btn.innerHTML = "Ordernar por 'Velocidade'"}
    else if(acao == "vel_m"){showCars(listCars.sort(function(a, b){return b.tuned_speed - a.tuned_speed})); ordernar_btn.innerHTML = "Ordernar por 'Velocidade modificada'"}
    else if(acao == "man_p"){showCars(listCars.sort(function(a, b){return b.handling - a.handling})); ordernar_btn.innerHTML = "Ordernar por 'Manuseio'"}
    else if(acao == "man_m"){showCars(listCars.sort(function(a, b){return b.tuned_handling - a.tuned_handling})); ordernar_btn.innerHTML = "Ordernar por 'Manuseio modificado'"}
    else if(acao == "remix"){showCars(listCars.sort(function(a, b){return b.remix - a.remix})); ordernar_btn.innerHTML = "Ordernar por 'Remix'"}
    
}



export function switchAttrs(btn){
    var cards = document.getElementsByClassName("car-card");
    var preco = document.getElementsByClassName("price");
    var brand = document.getElementsByClassName("brand");
    var aceleracao = document.getElementsByClassName("aceleration");
    var velocidade = document.getElementsByClassName("velocity");
    var manuseio = document.getElementsByClassName("handling");
    var velocidade_mod = document.getElementsByClassName("tuned-velocity");
    var aceleracao_mod = document.getElementsByClassName("tuned-aceleration");
    var manuseio_mod = document.getElementsByClassName("tuned-handling");
    var tipo_class = document.getElementsByClassName("type-class");
    var element = btn.name;

    for(let i = 0; i < cards.length; i++){
        if(element === "preco"){preco[i].hidden = !(preco[i].hidden); window.sessionStorage.setItem("preco", preco[i].hidden);}
        if(element === "classe-tipo"){tipo_class[i].hidden = !(tipo_class[i].hidden); window.sessionStorage.setItem("tipo_class", tipo_class[i].hidden);}
        if(element === "marca"){brand[i].hidden = !(brand[i].hidden); window.sessionStorage.setItem("brand", brand[i].hidden);}
        if(element === "aceleracao-padrao"){aceleracao[i].hidden = !(aceleracao[i].hidden); window.sessionStorage.setItem("aceleracao", aceleracao[i].hidden);}
        if(element === "aceleracao-modificada"){aceleracao_mod[i].hidden = !(aceleracao_mod[i].hidden); window.sessionStorage.setItem("aceleracao_mod", aceleracao_mod[i].hidden);}
        if(element === "velocidade-padrao"){velocidade[i].hidden = !(velocidade[i].hidden); window.sessionStorage.setItem("velocidade", velocidade[i].hidden);}
        if(element === "velocidade-modificada"){velocidade_mod[i].hidden = !(velocidade_mod[i].hidden); window.sessionStorage.setItem("velocidade_mod", velocidade_mod[i].hidden);}
        if(element === "manuseio-padrao"){manuseio[i].hidden = !(manuseio[i].hidden); window.sessionStorage.setItem("manuseio", manuseio[i].hidden);}
        if(element === "manuseio-modificado"){manuseio_mod[i].hidden = !(manuseio_mod[i].hidden); window.sessionStorage.setItem("manuseio_mod", manuseio_mod[i].hidden);}
    }            
}

function booleanConverter(str){
    var myString = str
    if(myString === 'true'){
        return 1;
    }else if(myString === 'false'){
        return 0;
    }
}




var input_check = document.getElementsByClassName("form-check-input");
for(let i = 0; i < input_check.length; i++){
    if(input_check[i].name == "preco"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("preco"))}
    if(input_check[i].name == "classe-tipo"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("tipo_class"))}
    if(input_check[i].name == "marca"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("brand"))}
    if(input_check[i].name == "aceleracao-padrao"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("aceleracao"))}
    if(input_check[i].name == "aceleracao-modificada"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("aceleracao_mod"))}
    if(input_check[i].name == "velocidade-padrao"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("velocidade"))}
    if(input_check[i].name == "velocidade-modificada"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("velocidade_mod"))}
    if(input_check[i].name == "manuseio-padrao"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("manuseio"))}
    if(input_check[i].name == "manuseio-modificado"){input_check[i].checked = booleanConverter(window.sessionStorage.getItem("manuseio_mod"))}

}


showCars(listCars);
