let married:boolean = true;
let age:number = 10;
let first_name: string = 'y';
let arr1:number[] = [1,2,3];
let arr2: Array<number> = [4,5,6];
// 元祖类型tuple 数量和类型已知的数组
let test:[string,number] = ['test', 10];


enum Gender {
    GIRL,
    BOY
}

console.log(Gender.BOY, Gender[1]);
console.log(Gender.GIRL, Gender[0]);