/* TypeScript example of primitive datatypes */

let ourTuple: [number, boolean, string, bigint, symbol];

ourTuple = [89, false, 'New coding example in TS', BigInt('98765432109876543210'), Symbol('unique')];

ourTuple = [...ourTuple, 'I can\'t be displayed right now'];

console.log(ourTuple);
