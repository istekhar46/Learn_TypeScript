// function sum(a: number, b: number): number {
//     return a + b;
// }

// const add = (a: number, b: number): number => {
//     return  a + b ;
// }


// let num:number = NaN;
// // num = 20 + 'istekhar'
// //  num = 30
//  console.log(num)
// sum(5, 10);


// let Name:string = 'istekhar lets lern TypeScript'
// let last:string = 'khan'

// let Length:number = Name.length;

// let myFullName:string;

// let Upper:string = Name.toUpperCase();
// let Lower:string = Name.toLowerCase();

// let short:string = Name.substring(0,5)

// console.log(short)

// myFullName = Name+last

// console.log(Upper)
// console.log(Lower)


// Day- 2 =>>>>>>>>>>>>>>>>>>>>>>

// const even =(a:number):boolean=>  {
//      if(a%2=== 0){
//         return true
//      }else{
//         return false
//      }
// }
// const iseven =(a:number):boolean=>  {
//     return a % 4 === 0 ||  a % 8  === 0
// }

// const big:bigint = 4937389739875834834n

// let arr: number[] = [1, 34, 5, 3, 3, 2, 75];

// let arr3: number[] = new Array(1, 2, 34, 5, 6, 3);

// const k: number[] = arr.filter((item) => item % 2 === 0)

// let max:number = 0;
//  for(let i= 0 ; i < arr.length; i++){
//      if(arr[i] > max){
//       max = arr[i];
//      }
// }

// console.log(max);

// const avg = (...arg: number[]) => {
//    let num: number[] = arg
//    let add: number = 0;
//    for (let i = 0; i < num.length; i++) {
//       add = add + num[i];
//    }
//    return add / num.length;

// }

// const avgReduce = (...arg: number[]) => {
//     if (arg.length === 0) {
//         return 0
//     }

//     const sum = arg.reduce((acc, currVal) => acc + currVal, 0)
//     return sum / arg.length
// }

// console.log(avgReduce(1,2,3,4,5));
// const p = arr.forEach((item:number)=> item )

// const a:number[] = arr.filter((item)=> item > 3)

// console.log(a);
// const k = arr.map((item)=>( item*2));

// console.log(k);
// console.log('p' + p);

// for (let i of arr3) { console.log(i) };

// const arr2 = arr.push(90);

// console.log(arr2)
// console.log(arr)


//  console.log(arr.filter((item, index)=> arr.indexOf(item) === index));
//  console.log(arr.sort((a,b)=> a-b));

// let index:number =  arr.indexOf(3)

// function unique(arr:number[]):number[]{
//    return  [...new Set(arr)]
// }

// console.log(unique(arr))

// const uniq = (arr:number[]):number[] => (arr.filter((item, index)=>(arr.indexOf(item) === index)))

// const sort = (arr:number[]):number[] => {
//    return function Sor(a,b )=
// }


// console.log(uniq(arr))



// let person: {
//    name: string;
//    job: string;
//    arr1: number[]
// } = {
//    name: 'istekhar',
//    job: 'student',
//    arr1: arr
// };

// const { arr1 } = person



// console.log(arr1[1])

//! Day 3 =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//? Type Alias 


// type Product = {
//     Name: string;
//     price: number;
//     quantity: number;
//     discount?: string; // optional property .... 
// }

// const product1: Product = {
//     Name: 'laptop',
//     price: 10000,
//     quantity: 5000
// }
// const product2: Product = {
//     Name: 'laptop',
//     price: 10000,
//     quantity: 5000
// }

// const total = (pro: Product) => {
//     return `total cost is ${pro.price * pro.quantity}`
// }

// console.log(total(product1))


// //? Function or Method call signature ......

// //*  defining the type and no of method of object or a function is called ........


// type Student = {
//     name: string;
//     age: number;
//     gender?: string;
//     greet: (countary: string) => string;
// }

// const student: Student = {
//     name: 'istekhar',
//     age: 21,
//     greet(countary) {
//         return `Hello my name is ${student.name} and i am ${student.age} years old. I am from ${countary}`
//     },
// }

// console.log(student.greet('india'));


//? Enums ...............................
//* enums is used when we have multiple values of  single propertiy.. 
// for ex - 

// enum Roles {
//     user = 'user',
//     admin = 'admin'
// }

// type user = {
//     userId: string;
//     password: string;
//     role: string
// }

// const Ethan: user = {
//     userId: 'EhtanGamer',
//     password: 'ethan',
//     role: Roles.user
// }

// const istekhar: user = {
//     userId: 'istekhar46',
//     password: 'istekhar46',
//     role: Roles.admin
// }

// const Authorization = (user: user) => {
//    const  { userId, role } = user
//     return role === 'user' ? `${userId} is user not authorized`  : `${userId} is admin, authorized.`
// }

//! Day 3 ======>>>>>>>>>>>>>>>>>>>>>>>>>>>.

//? Tuples in TypeScript .....

// type userinfo = readonly [string,number,boolean]; //?readonly here makes the array immutale .... 

// const user1:userinfo = ['istekhar', 22, true]

// const DisplayDetails = (user:userinfo) => {
//     const [name, age, hasLiscience ] = user

//     return `name ${name}, age ${age}, liecense ${hasLiscience === true ? 'yes' : 'no'} `
// }

// type ProductInfo = readonly [string, number, boolean ]

// const item1:ProductInfo = ['laptop', 1000, true]

// const displayItem = (item:ProductInfo)=> {
//     const [ name, price, isAvailable] = item
//     return `product: ${name}, Price: ${price}, Stock: ${isAvailable === true ? 'available' : 'not Available'}`
// }

// console.log(DisplayDetails(user1));
// console.log(displayItem(item1));

// const changer = (...args:(string | number)[]):(string | number)[]=> {
//      const values = args.map((item:(number | string))=>{
//         if(typeof item === 'number'){
//             return item * 2
//         }else{
//            return item.toUpperCase();
//         }
//      });

//      return values;
// }
// console.log(changer(400,'aieedf',27,'sifhin'))


// const changerGPT = (...args: (string | number)[]): (string | number)[] => {
//     const values = args.map((item: number | string) => {
//       if (typeof item === 'number') {
//         return item * 2;
//       } else {
//         return item.toString();
//       }
//     });

//     return values;
//   };

// Example usage:
//   const input1 = 5;
//   const input2 = "hello";
//   const input3 = "world";
//   const input4 = 10;

//   const convertedInputs = changer(input1, input2, input3, input4);
//   console.log(convertedInputs); // Output: [10, "hello", "world", 20]

type User = {
    name: string;
    age: number;
}

type MyLocation = {
    address: {
        city: string;
        state: string;
    }
}

const user: User = {
    name: 'istekhar',
    age: 22
}

const address: MyLocation = {
    address: {
        city: 'new york',
        state: 'N Y'
    }
}


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
const fun = <T, U>(val1: T, Val2: U): any => {
    return `${val1}${Val2}`;
}

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

   let arr = [ [1,2,3],[,4,5,6]];

   console.log(arr[0][0]);