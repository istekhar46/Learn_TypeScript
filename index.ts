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


type Product = {
    Name: string;
    price: number;
    quantity: number;
    discount?: string; // optional property .... 
}

const product1: Product = {
    Name: 'laptop',
    price: 10000,
    quantity: 5000
}
const product2: Product = {
    Name: 'laptop',
    price: 10000,
    quantity: 5000
}

const total = (pro: Product) => {
    return `total cost is ${pro.price * pro.quantity}`
}

console.log(total(product1))


//? Function or Method call signature ......

//*  defining the type and no of method of object or a function is called ........


type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (countary: string) => string;
}

const student: Student = {
    name: 'istekahar',
    age: 21,
    greet(countary) {
        return `Hello my name is ${student.name} and i am ${student.age} years old. I am from ${countary}`
    },
}

console.log(student.greet('india'));


//? Enums ...............................
//* enums is used when we have multiple values of  single propertiy.. 
// for ex - 

enum Roles {
    user = 'user',
    admin = 'admin'
}

type user = {
    userId: string;
    password: string;
    role: string
}

const Ethan: user = {
    userId: 'EhtanGamer',
    password: 'ethan',
    role: Roles.user
}

const istekhar: user = {
    userId: 'istekhar46',
    password: 'istekhar46',
    role: Roles.admin
}

const Authorization = (user: user) => {
   const  { userId, role } = user
    return role=== 'user' ? `${userId} is user not authorized`  : `${userId} is admin, authorized.`
}


console.log(Authorization(Ethan))
console.log(Authorization(istekhar))
