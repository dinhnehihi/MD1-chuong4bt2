//Radius: Bán kính
//Diameter: Đường kính
//Perimeter: Chu vi
//Area: Diện tích
let inputRadius = prompt('Nhập bán kính hình tròn: ');
let radius = parseFloat(inputRadius);
let diameter = radius * 2;
let pi = 3.14;
let perimeter = diameter * pi;
let area = Math.pow(radius, 2) * pi;
document.write('Đường kính của hình tròn là: ' + diameter);
document.write('<br>');
document.write('Chu vi của hình tròn là: ' + perimeter);
document.write('<br>');
document.write('Diện tích của hình tròn là: ' + area);
