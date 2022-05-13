function hello(name: string): void {
    console.log('hello', name);
}

hello('test');

type GetName = (firstName: string, lastName: string) => string;
let getName: GetName = function(firstName: string, lastName: string): string{
    return firstName + lastName;
}

function print(name: string, age?:number):void {
    console.log(name, age);
}
print('test', 2);

function ajax(url: string, method: string = 'GET') {
    console.log(url, method);
}
ajax('/');

function sum(...numbers:number[]) {
    return numbers.reduce((val, item) => val+item, 0)
}
console.log(sum(1,2,3))

// 函数的重载
let obj:any = {};
/**
 * 如果传的val是一个字符串赋值给obj.name
 *                数字，赋值给obj.age
 */
function attr(val: string):void
function attr(val: number):void
function attr(val: any):void {
    if (typeof val === 'string') {
        obj.name = val;
    } else if ((typeof val === 'number')) {
        obj.age = val;
    }
}

attr('test');
attr(10);
// attr(true);

function add(a:string,b:string):void
function add(a:number,b:number):void
function add(a: string|number, b:string|number):void {
   
}
add('a','b');
add(1,2);
// add(1,'b');