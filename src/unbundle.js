function add(a, b) {
    return a + b;
}

console.log(add(2, "6"))

function pelindrom(str) {
    return str === str.split('').reverse().join('');


}

console.log(pelindrom("ana"))

let arr = [4, 6, 5, 3, 2]

console.log(arr.filter(item => item % 2 === 0))
console.log(arr)
const fact = (num) => {
    if (num === 1 || num === 0) {
        return 1;
    }
    else {
        return num * fact(num - 1);
    }
}

console.log(fact(3));

const func = ()=>{
    const a = new FormData();
    a.append('name', 'istekhar')
    a.append('name', 'istekhar')
    console.log(a);

}

func();

const test = new Promise((resoleve, reject) => {
    resoleve("promise done!!")
})


const check = async () => {
    const val = await test;
    console.log(val)
    return val;

}
check().then(res=> console.log(res))

console.log(check());

console.log(check().then(res => console.log(res)));
/*
input =>
object = {
    name : istekhar
    branch: csds
    address:crossing  
}
output
[[name, istekhar], [branch, csds], [address, crossing]]
*/

const object = {
    name: 'istekhar',
    branch: 'csds',
    address: 'crossing'
}

// console.log([Object.entries(object)])
const array = (obj) => {
    const keys = Object.keys(obj);
    const ans = keys.map((key) => {
        const value = obj[key];
       return [key, value];
    })
    // console.log(ans)
    return ans;
}

console.log(array(object))