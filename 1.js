let married = true;
let age = 10;
let first_name = 'y';
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// 元祖类型tuple 数量和类型已知的数组
let test = ['test', 10];
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.BOY, Gender[1]);
console.log(Gender.GIRL, Gender[0]);
