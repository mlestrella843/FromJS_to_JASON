var fs = require('fs');

var jsObject = {
    Company: "BVC", type: "college", location: "calgary", ownedby: "public", program: "daytime"
};
// Create a jason file with stringify

fs.writeFileSync("employee.json", JSON.stringify(jsObject));

console.log("file has been created");

var data = fs.readFileSync('employee.json', 'utf-8');
console.log(data);