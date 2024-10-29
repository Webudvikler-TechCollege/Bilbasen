import { carModel } from "./car.model.js";

// Kalder instans af car model
const car = new carModel();
const data = await car.list()
console.log(data);
