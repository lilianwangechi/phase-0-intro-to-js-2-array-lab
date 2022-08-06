// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}


function appendCat(name){
    let newCats = cats.slice()
    newCats.push(name)
    return newCats;
}

function prependCat(name){
    let newCats = cats.slice()
    newCats.unshift(name)
    return newCats;
}

function removeLastCat(){
    let bigCats = cats.slice()
    bigCats.pop()
    return bigCats;
}

function removeFirstCat(){
    let smallCats = cats.slice()
    smallCats.shift()
    return smallCats
}