// Array: data type that can contain otherdatatype
/**
 * enclosed by [...]
 * data insaide array has index,starting from 0
 * usually used to ease data processing
 */

const daftarSiswa: string[] = ["Edo", "Edi", "Eda"];
const ddaftarKelas: string[] = new Array("IPA", "IPS", "BAHASA");

console.log(daftarSiswa[1]);
console.log(ddaftarKelas);

// array destructure, access data in array by marking each data with variable
const data: any[] = ["Abdi", 20, "Sidoarjo"];
let [nama, usia, alamat] = data;
console.log(nama);
console.log(usia);
console.log(alamat);

daftarSiswa[2] = "Andre";
console.log(daftarSiswa);

// array.push(newData) ,add data at the end of array
daftarSiswa.push("Olga");
console.log(daftarSiswa);

// array.pop(), delete data at the end of array
daftarSiswa.pop();
console.log(daftarSiswa);

// array.unshift(newData), add data at the start of array
daftarSiswa.unshift("Rafi");
console.log(daftarSiswa);

// array.shift(), delete data at the start of array
daftarSiswa.shift();
console.log(daftarSiswa);

// array.length, value of how many data onsode an array
console.log(daftarSiswa.length);

// array.splice(index, deletedAmount, newData?), delete, renew, and insert new data at selected index
daftarSiswa.splice(1, 1);
daftarSiswa.splice(1, 0, "Edid", "Dimas", "El");
console.log(daftarSiswa);

const daftar: string[] = ["Edo", "Edi", "Eda"];
let printed: string = "";
for (let i = 0; i < daftar.length; i++) {
  printed += `${i + 1}. ${daftar[i]} \n`;
}
console.log(printed);
