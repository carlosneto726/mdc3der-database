from data_handler import Data
from flask import Flask, jsonify, request
from flask_cors import CORS

API_VERSION = "v1"

app = Flask(__name__)
CORS(app=app)
data = Data()

@app.route("/{API_VERSION}/ping", methods=["GET"])
def ping():
    return "pong"

@app.route(f"/{API_VERSION}/all_cars", methods=["GET"])
def getAllCars():
    order_by = request.args.get("order_by")
    reverse = request.args.get("reverse")

    if(order_by is None):
        order_by = "id"
    if(reverse is None):
        reverse = False

    return jsonify(data.getAllCars(order_by=order_by, reverse=reverse))

@app.route(f"/{API_VERSION}/car/<int:id>", methods=["GET"])
def getCarByID(id):
    car = data.getCarById(id)
    return jsonify(car)

if (__name__ == "__main__"):
    app.run(host="0.0.0.0")