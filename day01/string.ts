// string : data containing characters such as letters, numbers, or symbols, and usually marked with ""...""

let shopName: string = "Toko Olga";

// template literal
let address: string = `Jl. Genteng Kali Surabaya`;

// String data combination
// using addition +
let printInfo: string = shopName + " " + address + " Telp. 0897654321";
console.log(printInfo);

// template literal
printInfo = `${shopName} ${address} Telp. 0897654321`;
console.log(printInfo);

// built in string function
// string.length : count string length
console.log(address.length);

// string.toLowerCase() : all letters to lower case
console.log(shopName.toLowerCase());

// string.toUpperCase() : all letters to upper case
console.log(shopName.toUpperCase());

// string.include() : find if character exist in data
console.log(printInfo.includes("f"));
