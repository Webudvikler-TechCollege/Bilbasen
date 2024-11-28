import { myFetch } from "./myFetch.js";

const posters = await myFetch(`http://localhost:3000/posters`, 'POST')
console.log(posters);