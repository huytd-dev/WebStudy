// const = a variable that can't be changed
// noi chung la hang so do 

const  PI = 3.14159;
let radius;
let circumference;

radius = window.prompt(" nhap vao ban kinh cua hinh tron");

radius = Number(radius);

// PI = 5;

circumference = 2 * PI * radius;

console.log("dien tich hinh tron la:", circumference);