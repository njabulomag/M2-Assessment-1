var fs = require('fs')
let fInput = "The Best Campus Cup 2021 winner is UniWise developed by Tebogo Serogolo from Tshwane University"
fs.writeFile('tp.txt', fInput, (err) => {
   if (err) throw err;
   else{
      console.log("The file is updated with the given data")
   }
})
var fs = require('fs')
fs.readFile('tp.txt', (err, inputD) => {
   if (err) throw err;
      console.log(inputD.toString());
})