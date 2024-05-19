import json
from car import Car

class Data:
    def __init__(self) -> None:

        self.brands_json = open("data/brands.json")
        self.cars_json = open("data/cars.json")
        self.brands = json.load(self.brands_json)
        self.cars = json.load(self.cars_json)

    def getAllCars(self, order_by="id", reverse=False):
        cars = []
        for car_data in self.cars:
            cars.append(car_data)

        return sorted(cars, key=lambda key: key[order_by], reverse=reverse)

    def getCarById(self, id):
        for car_data in self.cars:
            if int(car_data["id"]) == id:
                return car_data
            
    def getAllBrands(self):
        brands = []
        for brand_data in self.brands:
            brands.append(brand_data)
        return brands
    
    def getBrandById(self,id):
        for brand_data in self.brands:
            if int(brand_data["id"]) == id:
                return brand_data
            






if __name__ == "__main__":
    data = Data()

    print(data.getCarById(1))