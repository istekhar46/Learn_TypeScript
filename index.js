"use strict";
// function sum(a: number, b: number): number {
//     return a + b;
// }
const product1 = {
    Name: 'laptop',
    price: 10000,
    quantity: 5000
};
const product2 = {
    Name: 'laptop',
    price: 10000,
    quantity: 5000
};
const total = (pro) => {
    return `total cost is ${pro.price * pro.quantity}`;
};
console.log(total(product1));
const student = {
    name: 'istekahar',
    age: 21,
    greet(countary) {
        return `Hello my name is ${student.name} and i am ${student.age} years old. I am from ${countary}`;
    },
};
console.log(student.greet('india'));
//? Enums ...............................
//* enums is used when we have multiple values of  single propertiy.. 
// for ex - 
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const Ethan = {
    userId: 'EhtanGamer',
    password: 'ethan',
    role: Roles.user
};
const istekhar = {
    userId: 'istekhar46',
    password: 'istekhar46',
    role: Roles.admin
};
const Authorization = (user) => {
    const { userId, role } = user;
    return role === 'user' ? `${userId} is user not authorized` : `${userId} is admin, authorized.`;
};
console.log(Authorization(Ethan));
console.log(Authorization(istekhar));
