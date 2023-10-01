const validator = require("validator"); // importando pacote validator e declarando o mesmo como validator

console.log(validator.isEmail('foo@bar.com')); // => true