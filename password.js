console.log('Welcome!')

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What is the password?", function(input){
	let password = ('');

for (i=0; i=0; i++); {
    if(input.length < 9) {
        console.log('This password is too short.')
    }
    if (input.length >= 9){
        console.log('This password is just right.');
    }
}
reader.close()
})
