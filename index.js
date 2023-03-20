function myEach(collection, alert){
    let array = Object.values(collection);
    array.forEach(element => alert(element));
    return collection;
}

function myMap(collection, cb){
    let array = Object.values(collection);
    let newArray = [];
    for(let element of array){
        newArray.push(cb(element));
    
    }
    return newArray;
}

function myReduce(collection, cb, ...accumulator){
    let array = Object.values(collection);
    let newTotal;
    let i;
    if(accumulator.length > 0){
        newTotal = accumulator[0];
        i = 0;
    } else {
        newTotal = array[0];
        i = 1;
    }
    for(i; i < array.length; i++){
        newTotal = cb(newTotal, array[i], collection);
    }
    return newTotal;
}

function myFind(collection, cb){
    let array = Object.values(collection);
    for(let i = 0; i < array.length; i++){
        if (cb(collection[i])) return collection[i];
    }
    return undefined;
}

function myFilter(collection, cb){
    let array = Object.values(collection);
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if (cb(collection[i])) newArray.push(collection[i]);
    }
    return newArray;
}

function mySize(collection){
    let array = Object.values(collection);
    return array.length;
}

function myFirst(array, n=false){
    return (n) ? array.slice(0, n) : array[0]
}

function myLast(array, n=false){
    return (n) ? array.slice((array.length - n), array.length) : array[array.length - 1]
}

function myKeys(object){
    const keys = [];
    for (let key in object){
        keys.push(key);
    }
    return keys;
}

function myValues(object){
    const values = [];
    for(let value in object){
        values.push(object[value])
    }
    return values;
}