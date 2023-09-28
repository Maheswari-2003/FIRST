
let array=

[
    {
        "Key1": {
            "test": 1,
            "id": 10,
            "Name": "test"
        },
        "demo": [1, 2, 3, 4, 6],
        "demo2": [
            {
                "id": 1,
                "Name": "mahi"
            },
            {
                "id": 2,
                "Name": "renu"
            },
            {
                "id": 3,
                "Name": "preeti"
            },
            {
                "id": 2,
                "Name": "hari"
            },
            {
                "id": 1,
                "Name": "anu"
            }
        ],
        "demo3": {
            "id": 4,
            "Name": "k"
        },
        "Total": "13",
        "company": "brimma",
        "rules": "rules"
    }
] 
/*array[0].demo2.forEach(item => {
    console.log("id:", item.id);
    console.log("Name:", item.Name);
}) 
array.forEach(item => {

    console.log(item)
})
// let f = array.filter(item => item.demo2.find(innerItem => innerItem.id < 3));

console.log(f); 
let filteredArray = array.filter(item => item.demo2.every(innerItem => innerItem.id < 2));

console.log(filteredArray); 

let index = 2;

console.log(`{index of ${index} the item returned is ${array.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"
 let a=[2,3,4] 
 console.log(`{index of ${index} the item returned is ${a.at(index)}`);


 let separatedArray = [];

 // Iterate through the original array and push each object to the new array
 for (let i = 0; i < array.length; i++) {
     separatedArray.push(array[i]);
 }
 
 console.log(separatedArray); 
 const indexToConcat = 1;

 // Define the array to concatenate
 const arrayToConcat = [7, 8, 9];
 
 // Create a copy of the original array with the concatenation at the specified index
 let modifiedArray = array.map((item, index) => {
     if (index === indexToConcat) {
         return {
             ...item,
             demo: [...item.demo, ...arrayToConcat]
         };
     }
     return { ...item };
 });
 
 /*console.log(modifiedArray); 
 const indexToCopy = 0; 
 const copiedObject = { ...array[indexToCopy] };


const newIndex = 1; 
array.splice(newIndex, indexToCopy, copiedObject);

let x=[1,2,3,4] 
let y=[6,7,3,5] 
let p=x.concat(y) 
console.log(p) 
*/
const demo2Array = array[0].demo2;

// Use a Set to store unique IDs
const uniqueIdsSet = new Set();

// Filter and print unique IDs
const uniqueIds = demo2Array.filter(item => {
    if (!uniqueIdsSet.has(item.id)) {
        uniqueIdsSet.add(item.id);
        return true;
    }
    return false;
}).map(item=>item.id)


console.log("Unique IDs in demo2:", uniqueIds)


// Using map with an arrow function to create a new array with each element doubled
const doubledArray = array[0].demo2.map(item=>item.id*2);

console.log(doubledArray); 




