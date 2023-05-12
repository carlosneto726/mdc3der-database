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
                            "<div class='card' style='width: 24rem;'>" +
                            "    <img src='img/cars/"+(cars[i].id)+".png' class='card-img-top'>" +
                            "    <div class='card-body'>" +
                            "        <h5 class='card-title fw-bold' align='left'>"+cars[i].name+"</h5>" + 
                            "        <p class='card-text' align='left'>"+cars[i].class+" / "+cars[i].type+"</p>" +
                            "    </div>" +
                            "    <p align='left' class='ms-3'>" + 
                            "        Preço: "+formatadorDePreco(cars[i].price)+"<br/>"+
                            "        Aceleração: "+formatadorFloat(cars[i].aceleration)+"<br/>"+
                            "        Velocidade: "+formatadorFloat(cars[i].speed)+"<br/>"+
                            "        Manuseio: "+formatadorFloat(cars[i].handling)+"<br/>"+
                            "        Aceleração máximo: "+formatadorFloat(cars[i].tuned_aceleration)+"<br/>"+
                            "        Velocidade máximo: "+formatadorFloat(cars[i].tuned_speed)+"<br/>"+
                            "        Manuseio máximo: "+formatadorFloat(cars[i].tuned_handling)+"<br/>"+
                            "    </p>" +
                            "    <div class='card-body' align='left'>" +
                            "        <a href='sections/car_view.html?carid="+cars[i].id+"' class='btn btn-primary'>Mais Informações</a>" +
                            "    </div>" +
                            "</div>" ;
                            
        container.appendChild(element);

    }
}


function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current.price < inputArr[j].price)) {
                console.log(current.price, inputArr[j].price)
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        }
    return inputArr;
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
    
    if(acao == "alfa"){

    }
    else if(acao == "preco"){

        showCars(insertionSort(listCars));
    }
    else if(acao == "classe"){

    }
    else if(acao == "tipo"){
        
    }
    else if(acao == "ace_p"){
        
    }
    else if(acao == "ace_m"){
        
    }
    else if(acao == "vel_p"){
        
    }
    else if(acao == "vel_m"){
        
    }
    else if(acao == "man_p"){
        
    }
    else if(acao == "man_m"){

    }
    else if(acao == "remix"){

    }
    
}




showCars(listCars);
