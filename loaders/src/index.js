import Title from "./components/title.js";
import Image from "./components/image.js";
import Button from './components/button.js'
import warning from './templates/warning.html'
import './templates/warning.css'
import myDocument from './files/my-document.txt'
import data from './files/data.json'

const title = new Title()
const image = new Image();
const button = new Button();


title.create("Primeira página")
image.insertPatrick()
button.create()

//Babel spread
const obj = { a: 1, b: 2, c: 3, d: 4 }
let { a, b, ...teste } = obj;

console.log(a)
console.log(b)
console.log(teste)

// import HTML
const body = document.querySelector('body');
body.innerHTML += warning

//import txt
const txt = myDocument;
console.log(txt)
console.log(txt.toUpperCase());

//import JSON
const dataJson = data;
body.innerHTML += JSON.stringify(dataJson)
console.log(dataJson)