import Header from './components/header/header.js'

const header = new Header();
header.create('Plugins');


//DefinePlugin
console.log(VERSION);
console.log(PORT)

//DotenvPlugin
console.log(process.env.API_KEY)