// function sum(a: number, b: number): number {
//     return a + b;
// }
var user = {
    name: 'istekhar',
    age: 22
};
var address = {
    address: {
        city: 'new york',
        state: 'N Y'
    }
};
// const display = (obj: (User & MyLocation)): string => {
//     const { name, age, address } = obj
//     return `My name is ${name} and Age ${age}. I am from ${address.city}, ${address.state}`
// }
// const fullDetail = (user: User, add: MyLocation, callBack: (obj: (User & MyLocation)) => string) => {
//     let promise = new Promise((resolve)=>{
//         setTimeout(()=>{
//              resolve(callBack(obj));
//         },2000)
//         return
//     })
//     const obj: User & MyLocation = {
//         name: user.name,
//         age: user.age,
//         address: {
//             city: add.address.city,
//             state: add.address.state
//         }
//     }
//     return callBack(obj);
// }
// console.log(fullDetail(user, address, display));
//! Day-4 ========================================>
//? Generics 
//* generics are templets in typeSript
var fun = function (val1, Val2) {
    return "".concat(val1).concat(Val2);
};
// console.log(fun<string, number>('istekhar', 47))
// console.log('Hello There console hehe!! ')
// const api = async ():Promise<number[]> => {
//     const p1 = new Promise<number>((resolve) => {
//       setTimeout(() => {
//         resolve(10);
//       })
//     })
//     const p2 = new Promise<number>((resolve) => {
//       setTimeout(() => {
//         resolve(20);
//       })
//     })
// const response:any[] = await Promise.all([p1, p2])
// return response;
//   }
//    api().then((val)=>{
//     console.log(val[0])
//     console.log(val[1])
//    }).catch((err)=>{
//     console.log(err)
//    })
//    function hello  <T>(a:Array<T> ){
//     return a.length
//    }
//    hello<string>(['hello'])
// var arr = [[1, 2, 3], [, 4, 5, 6]];
// console.log(arr[0][0]);
