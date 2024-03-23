/**
Typescript example of generic Interdace in use
*/

interface KeyFamily<T, U, N> {
    (key: T, val1: U, val2: N): void;
}

function processKeyPairs<T, U, N>(key: T, value1: U, value2: N): void { 
    console.log(`processKeyPairs: key = ${key}, value1 = ${value1}, value2 = ${value2}`);
}

let numKVProcessor: KeyFamily<number, number, number> = processKeyPairs;
let strKVProcessor: KeyFamily<string, string, string> = processKeyPairs; 
let membersKVProcessor: KeyFamily<number, string, number> = processKeyPairs;

