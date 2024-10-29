import { carModel } from "./car.model.js";

// Kalder instans af car model
const car = new carModel();
// Kalder list metode på car objekt
const data = await car.list()

console.log(data);
