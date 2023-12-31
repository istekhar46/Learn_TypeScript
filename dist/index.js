"use strict";
// function sum(a: number, b: number): number {
//     return a + b;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: 'istekhar',
    age: 22
};
const address = {
    address: {
        city: 'new york',
        state: 'N Y'
    }
};
const display = (obj) => {
    const { name, age, address } = obj;
    return `My name is ${name} and Age ${age}. I am from ${address.city}, ${address.state}`;
};
const fullDetail = (user, add, callBack) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(callBack(obj));
        }, 2000);
        return;
    });
    const obj = {
        name: user.name,
        age: user.age,
        address: {
            city: add.address.city,
            state: add.address.state
        }
    };
    return callBack(obj);
};
console.log(fullDetail(user, address, display));
//! Day-4 ========================================>
//? Generics 
//* generics are templets in typeSript
const fun = (val1, Val2) => {
    return `${val1}${Val2}`;
};
// console.log(fun<string, number>('istekhar', 47))
// console.log('Hello There console hehe!! ')
const api = () => __awaiter(void 0, void 0, void 0, function* () {
    const p1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        });
    });
    const p2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(20);
        });
    });
    const response = yield Promise.all([p1, p2]);
    return response;
});
api().then((val) => {
    console.log(val[0]);
    console.log(val[1]);
}).catch((err) => {
    console.log(err);
});
function hello(a) {
    return a;
}
console.log(hello("hello"));
