const bioData = {
    name :"naveen",
    age : 26,
    batch : 2023,
    branch : "EE"
};

//  convert an Object into JSON DATA
const JsonData = JSON.stringify(bioData);

console.log("JsonData is ",JsonData
);

//  convert an JSON into OBJECT DATA
const objData = JSON.parse(JsonData);
 console.log("objData is ",objData);

//sending to another file
const fs = require('fs');
fs.writeFile("data.json",JsonData,(err)=>{
console.log("file created and data transfered in data.json file.");
});

//reading data from another file
fs.readFile('data.json', 'utf-8',(err,data)=>{
    console.log(data)
});

fs.appendFile(" data.json","data is add now",(err)=>{
    console.log('file updated');
});
