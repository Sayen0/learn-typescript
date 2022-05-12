let married:boolean = true;
let age:number = 10;
let first_name: string = 'y';
let arr1:number[] = [1,2,3];
let arr2: Array<number> = [4,5,6];
// 元祖类型tuple 数量和类型已知的数组
let test:[string,number] = ['test', 10];

// 普通枚举
enum Gender {
    GIRL,
    BOY
}
console.log(Gender.BOY, Gender[1]);
console.log(Gender.GIRL, Gender[0]);

// 常量枚举
const enum Colors {
    RED,YELLOW,BLUE
}
let myColor = [Colors.RED,Colors.YELLOW,Colors.BLUE];

// 任意类型
// any
// 如果变量定义为any类型，就跟js差不多，不进行类型检查
// let root:any = document.getElementById('root');
// root.style.color = 'red';

// let elemet:HTMLElement|null = document.getElementById('root');
// // 非空断言
// elemet!.style.color = 'gree';

// null undefined 是其他类型的子类型
// 如果说strictNullChecks的值为true，则不能把null undefined 赋值给x;
let x: number;
x =1;
// x=undefined;
// x=null;

let y:number|null|undefined;
y=1;
y=undefined;
y=null;

// nerver 代表不会出现的值
// 1.作为不会返回的函数的返回值 类型
function error(message: string):never{
    throw new Error('报错了'); // 直接异常结束了
    console.log('ok');
}

function loop():never {
    while(true){

    }
    console.log('ok')
}

function fn(x:number | string) {
    if(typeof x === 'number') {
        console.log(x)
    } else if (typeof x === 'string') {
        console.log(x);
    } else {
        // 不会进来，因为strictNullChecks为true
        console.log(x);
    }
}

//void never
// 函数没有返回值，那么就是void类型
// strictNullChecks 为false的时候null可以被赋值给void，true则不行
function greeting():void {
    return undefined;
}

// void never
// void可被赋值为null undefined，never不能包含任何类型
// 返回嘞那个为void的函数能正常执行，但是返回never的函数无法正常执行
// Symbol 代表独一无二的值 ESNext 代表下一版本的es
const s1 = Symbol('key');
const s2 = Symbol('key');
// console.log(s1===s2);

// BigInt
// const max = Number.MAX_SAFE_INTEGER; // 2 ** 53-1
// console.log(max+1 === max+2)

const max = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max+BigInt(1) === max+BigInt(2));
// 数字后面加n代表大整形
// console.log(max+1n === max+2n); // 改tsconfig.json target版本才不会报错

let foo:number;
let bar:bigint;
// foo=bar;
// bar = foo;

//类型推导
let uname;
uname = 1;
uname = 'test';
uname = null;

let uname2 = 'test1';
uname2;
// 包装对象 wrapper object
// 原始类型 对象类型
// 原始类型
let name2 = 'test';
// 如果 内部 自动帮你包装成对象类型 自动装箱
console.log(name2.toUpperCase());
console.log(new String(name2).toUpperCase());

let isOk1:boolean = true;
let isOk2:boolean = Boolean(1);
// let isOk3:boolean = new Boolean(1); // 不能把对象类型赋给基本类型

// 联合类型
let name3:string | number;
console.log(name3!.toString());
name3 = 3;
console.log(name3.toFixed(2));
name3 = 'test';
console.log(name3.length);

// 类型断言
let name4: string | number;
console.log((name4! as number).toFixed(2));
console.log((name4! as string).length);

// 双重断言
console.log(name4! as any as boolean);

// 字面量类型
const up:'Up' = 'Up';
const down:'Down' = 'Down';
const left:'Left' = 'Left';
const right:'Right' = 'Right';
type Direction = 'Up' | 'Down' | 'Left'| 'Right';
// 可以实现枚举的效果
function move(direction: Direction) {

}
move('Down');

// 类型字面量
type Persion = {
    name: string;
    age: number;
}
let p1: Persion = {
    name: 'text',
    age: 10,
}

// 字符串字面量和联合类型
type T1 = '1' | '2' |'3'; // 字符串的字面量
type T2 = string | number | boolean; // 联合类型
let t1:T1 = '1';
let t2:T2 = true;