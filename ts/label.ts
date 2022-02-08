// function printLabel(labelObj:{label: string,name:string}){
//     console.log(labelObj.label);
//     console.log(labelObj.name);
// }

// let myObj = {size: 10,label: "Size 10 Object",name: "Nicholas Zakas"};
// printLabel(myObj);

interface LabelledValue {
    label: string
}

interface LabelledValue{
    name: string,
    setName(name:string):void,
    getName():string
}

function printLabel(labelObj:LabelledValue){
    console.log(labelObj.label);
    console.log(labelObj.name);
    labelObj.setName("Hanmeimei");
}
let myObj= {size: 10, label: "Size 10 Object",name: "Nicholas Zakas"};
// printLabel(myObj);
