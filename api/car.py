class Car:
    def __init__(self, car_data) -> None:
        self.id = car_data["id"]
        self.name = car_data["name"]
        self.brand_id = car_data["brand_id"]
        self.car_class = car_data["class"]
        self.type = car_data["type"]
        self.price = car_data["price"]
        self.aceleration = car_data["aceleration"]
        self.speed = car_data["speed"]
        self.handling = car_data["handling"]
        self.remix = car_data["remix"]
        self.tuned_aceleration = car_data["tuned_aceleration"]
        self.tuned_speed = car_data["tuned_speed"]
        self.tuned_handling = car_data["tuned_handling"]

    def getCar(self):
        return {
            "id": self.id,
            "name": self.name,
            "brand_id": self.brand_id,
            "car_class": self.car_class,
            "type": self.type,
            "price": self.price,
            "aceleration": self.aceleration,
            "speed": self.speed,
            "handling": self.handling,
            "remix": self.remix,
            "tuned_aceleration": self.tuned_aceleration,
            "tuned_speed": self.tuned_speed,
            "tuned_handling": self.tuned_handling
        }
