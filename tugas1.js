// 1. indexOf()
// Mengembalikan indeks pertama dari suatu elemen yang ditemukan di dalam array.
// Jika elemen tidak ditemukan, akan mengembalikan -1.
const friends = ["Agus", "Rovan", "Din", "Yaz",];
const index1 = friends.indexOf("Din");
const index2 = friends.indexOf("Yan");
console.log(index1); // Output: 2
console.log(index2); // Output: -1

// 2. toUpperCase()
// Mengubah karakter dalam string menjadi huruf kapital
const name = "Alfin Yahya";
const hasil = name.toUpperCase();
console.log(hasil); // Output: ALFIN YAHYA

// 3. toLowerCase()
// Mengubah karakter dalam string menjadi huruf kecil
const name2 = "Afin Yahya";
const result = name2.toLowerCase();
console.log(result); // Output: alfin yahya

// 4.includes()
// Memeriksa apakah sebuah element ada di dalam array. Menegembalikan nilai boolean
const fruits = ["Apple", "Orange", "Banana"];
const fruit1 = fruits.includes("Banana");
const fruit2 = fruits.includes("melon");
console.log(fruit1) // Output: true
console.log(fruit2) // Output: false

// 5.charAt()
// Menampilkan karakter tertentu dalam sebuah string
const car = "supra";
const character = car.charAt(2);
console.log(character) //Output: p

// 6.replace()
// Mengganti substring pertama yang cocok dengan substring baru dalam string
const p = "I Love Cake";
const resultP = p.replace("Cake", "Fruits")
console.log(resultP) // Output: I Love Fruits

// 7.push()
// Menambahkan element yang ditentukan ke akhir array dan mengembalikan panjang array baru
const students = ["Arya", "Leo", "Rito"];
const student = students.push("Angga");
console.log(students) // Output: ['Arya', 'Leo', 'Rito', 'Angga']
console.log(student) // Output: 4

// 8.mathRandom()
// Menghasulkan nilai acak anatara 0 (inklusif) dan 1 (eklusif)
const randomNum = Math.random();
console.log(randomNum); // Output: angka acak antara 0 dan 1

// 9.pop()
// Menghapus element terakhir dari array
const teachers = ["Asep", "Budi", "Udin"];
const teacher = teachers.pop();
console.log(teachers) // Output: ['Asep', 'Budi']

// 10.repeat()
// menggadakan sebuah string dengan jumlah yang ditentukan
const say = "Hello ";
const sayy = say.repeat(3);
console.log(sayy) //Output: Hello Hello Hello