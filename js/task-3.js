function getElementWidth(content, padding, border){
let contentInt = Number.parseFloat(content);
let paddingInt = Number.parseFloat(padding);
let borderInt = Number.parseFloat(border);
let allWidth = contentInt + paddingInt * 2 + borderInt * 2;
return allWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));