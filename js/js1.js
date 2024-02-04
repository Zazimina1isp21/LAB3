//вариант 6 Зазымина 1исп21 1 задание
alert ("Программа для вычисления Объема(V),а так же площадь поверхности (S)")
let a = parseFloat(prompt("Введите число a"));
let b = parseFloat(prompt("Введите число b"));
let c = parseFloat(prompt("Введите число c"));
let v = a*b*c
let s = a*b+b*c+c*a
alert("Объем равен " + v)
alert("Площадь поверхности равна "+ s)