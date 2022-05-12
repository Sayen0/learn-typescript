var married = true;
var age = 10;
var first_name = 'y';
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
// 元祖类型tuple 数量和类型已知的数组
var test = ['test', 10];
// 普通枚举
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY, Gender[1]);
console.log(Gender.GIRL, Gender[0]);
var myColor = [0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */];
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
var x;
x = 1;
// x=undefined;
// x=null;
var y;
y = 1;
y = undefined;
y = null;
// nerver 代表不会出现的值
// 1.作为不会返回的函数的返回值 类型
function error(message) {
    throw new Error('报错了'); // 直接异常结束了
    console.log('ok');
}
function loop() {
    while (true) {
    }
    console.log('ok');
}
function fn(x) {
    if (typeof x === 'number') {
        console.log(x);
    }
    else if (typeof x === 'string') {
        console.log(x);
    }
    else {
        // 不会进来，因为strictNullChecks为true
        console.log(x);
    }
}
//void never
// 函数没有返回值，那么就是void类型
// strictNullChecks 为false的时候null可以被赋值给void，true则不行
function greeting() {
    return undefined;
}
// void never
// void可被赋值为null undefined，never不能包含任何类型
// 返回嘞那个为void的函数能正常执行，但是返回never的函数无法正常执行
// Symbol 代表独一无二的值 ESNext 代表下一版本的es
var s1 = Symbol('key');
var s2 = Symbol('key');
// console.log(s1===s2);
// BigInt
// const max = Number.MAX_SAFE_INTEGER; // 2 ** 53-1
// console.log(max+1 === max+2)
var max = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max + BigInt(1) === max + BigInt(2));
// 数字后面加n代表大整形
// console.log(max+1n === max+2n); // 改tsconfig.json target版本才不会报错
var foo;
var bar;
// foo=bar;
// bar = foo;
//类型推导
var uname;
uname = 1;
uname = 'test';
uname = null;
var uname2 = 'test1';
uname2;
// 包装对象 wrapper object
// 原始类型 对象类型
// 原始类型
var name2 = 'test';
// 如果 内部 自动帮你包装成对象类型 自动装箱
console.log(name2.toUpperCase());
console.log(new String(name2).toUpperCase());
var isOk1 = true;
var isOk2 = Boolean(1);
// let isOk3:boolean = new Boolean(1); // 不能把对象类型赋给基本类型
// 联合类型
var name3;
console.log(name3.toString());
name3 = 3;
console.log(name3.toFixed(2));
name3 = 'test';
console.log(name3.length);
// 类型断言
var name4;
console.log(name4.toFixed(2));
console.log(name4.length);
// 双重断言
console.log(name4);
// 字面量类型
var up = 'Up';
var down = 'Down';
var left = 'Left';
var right = 'Right';
// 可以实现枚举的效果
function move(direction) {
}
move('Down');
var p1 = {
    name: 'text',
    age: 10,
};
var t1 = '1';
var t2 = true;
