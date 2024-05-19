import { API } from "./apiHandler.js"
import { Car } from "./objects/car.js"

var api = new API("http://127.0.0.1:5000/v1")

async function getAllcars(){
    var response = api.getHandler("/all_cars")

    var cars = []

    await response.then(
        cars_data => {
            for(let car_data of cars_data){
                var car = new Car(car_data);
                cars.push(car)
            }
        }
    );

    cars.forEach(element => {
        console.log(element)
    });
}

getAllcars()