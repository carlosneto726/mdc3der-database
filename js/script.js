import cars from '../json/cars.json' assert { type: 'json' };

var container = document.getElementById("container");
for(let i = 0; i < cars.length; i++){

    var element = document.createElement("div");

    element.innerHTML = 
                    "<center><img src='img/"+(i+1)+".png'></img></center>" +
                    "<br/><h4> Nome: "+cars[i].name +  "</h4>" +
                    "<br/><h4> Class: "+ cars[i].class + "</h4>" +
                    "<br/><h4> Tipo: "+ cars[i].type + "</h4>" +
                    "<br/><h4> Preço: "+ cars[i].price + "</h4>" +
                    "<br/><h4> Aceleração: "+ cars[i].aceleration + "</h4>" +
                    "<br/><h4> Velocidade: "+ cars[i].speed + "</h4>" +
                    "<br/><h4> Manuseio: "+ cars[i].handling + "</h4>" +
                    "<br/><h4> Remix: "+ cars[i].remix + "</h4>" +
                    "<br/><h4> Aceleração Tunada: "+ cars[i].tuned_aceleration + "</h4>" +
                    "<br/><h4> Velocidade Tunada: "+ cars[i].tuned_speed + "</h4>" +
                    "<br/><h4> Manuseio Tunado: "+ cars[i].tuned_handling + "</h4><br/>";

    container.appendChild(element);

}