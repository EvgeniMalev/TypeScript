
typescript
Copy code
enum Car {
    Fiat500,
    Fiat600,
    Fiat850,
    FiatCroma,
    FiatTempra,
    FiatScudo,
    FiatDucato
}

namespace CarType {
    export function isCityCar(car: Car): boolean {
        switch (car) {
            case Car.Fiat500:
            case Car.Fiat600:
            case Car.Fiat850:
                return true;
            default:
                return false;
        }
    }

    export function isFamilyCar(car: Car): boolean {
        switch (car) {
            case Car.FiatCroma:
            case Car.FiatTempra:
                return true;
            default:
                return false;
        }
    }

    export function isVan(car: Car): boolean {
        switch (car) {
            case Car.FiatScudo:
            case Car.FiatDucato:
                return true;
            default:
                return false;
        }
    }
}

const testCar1 = Car.Fiat500;
const testCar2 = Car.FiatCroma;
const testCar3 = Car.FiatDucato;

console.log(CarType.isCityCar(testCar1));   
console.log(CarType.isFamilyCar(testCar2)); 
console.log(CarType.isVan(testCar3));  
