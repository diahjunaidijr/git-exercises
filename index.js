// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

/*
-------------------------========= Intro JS Basic ===============-------------------
*/

//soal 1
/*
console.log('Clara');
console.log('DKI Jakarta');
console.log('November');
console.log(18);
console.log('Web Developer Jr.');
*/

//soal 2
/*
let name = prompt('Username: ');
let country = prompt('Country: ');
let validation = prompt('Is data correct? (Y/N) : ');
if (validation == 'Y') {
    alert('Thank you for fill the form, ' + name);
}else if (validation == 'N') {
    alert('Please fill correctly, ' + name);
}else {
    alert('Invalid input. Please enter either Y or N.');
}
*/

//soal 3
/*
console.log('Clara'); // nama kamu
console.log('DKI Jakarta'); //asal daerah kamu
console.log(3); // tanggal/bulan kamu saja dalam angka :3
console.log(18); // umur kamu
console.log('Web Developer Jr.'); //pekerjaan kamu atau status
*/

//soal 4
/*
-----FORM DATA DIRI SINGKAT----
~~~~~~~Mohon untuk diisi~~~~~~~~~
*/
/*
let name = prompt('Username: ');
let country = prompt('Country: ');
let validation = prompt('Is data correct? (Y/N) : ');
if (validation == 'Y') {
    alert('Thank you for fill the form, ' + name);
}else if (validation == 'N') {
    alert('Please fill correctly, ' + name);
}else {
    alert('Invalid input. Please enter either Y or N.');
}
*/
/*
---------------END----------------
*/

//soal 5
/*
let nama = 'Clara' 
let asalDaerah = 'Jakarta' 
let tanggalLahir = '3' 
let umur = 18 
let pekerjaan = 'Web Developer Jr' 

console.log('Nama: '+ nama);
console.log('Asal: ' + asalDaerah);
console.log('Tanggal/Bulan Lahir: ' + tanggalLahir);
console.log('Umur: ' + umur);
console.log('Pekerjaan: ' + pekerjaan);
*/


//soal 6
/*
let penjumlahan = 25 + 10;
let perkalian = 100 * 2
let pembagian = 99 / 2 //pembagian biasa yang bisa menghasilkan pecahan juga
let modulus = 99 % 2 //sisa bagi
console.log("Penjumlahan 25 + 10 = " + penjumlahan)
console.log("Perkalian 100 * 2 = " + perkalian)
console.log("Pembagian 99 / 2 = " + pembagian)
console.log("Modulus 99 % 2 = " + modulus)
*/


/*
--------------------------===== Conditional ==========--------------------------------
*/

//soal 1
/*
nama = prompt('Masukkan nama kamu: ')
role = prompt('Masukkan posisi role kamu (Frontend/Backend): ')
if (role == "Frontend" || role == "FRONTEND"){
    console.log("Tugas kamu sebagai " + role + " adalah merancang dan memastikan UI/UX Web" + ", " + nama)
}else if (role == "Backend" || role == "BACKEND"){
    console.log("Tugas kamu sebagai " + role + " adalah merancang dan memelihara keperluan sistem" + ", " + nama)
}else{
    console.log("Tugas kamu sebagai " + role + " bukan bagian dari tim saat ini. Mungkin coba tanya tim lain" + ", " + nama)
}
*/

//soal 2
/*
let a = parseFloat(prompt("Masukkan nilai a: "));
let b = parseFloat(prompt("Masukkan nilai b: "));
if (a === b) {
    console.log("a bernilai sama dengan b")
}else if (a > b) {
    console.log("a bernilai lebih besar dari b")
}else{
    console.log("a bernilai lebih kecil dari b")
}
*/

//soal 3
/*
let angka = prompt("Masukkan angka: ");

switch (parseInt(angka)) {
    case 1:
        console.log('Kamu pilih Senin');
        break;
    case 2:
        console.log('Kamu pilih Selasa');
        break;
    case 3:
        console.log('Kamu pilih Rabu');
        break;
    case 4:
        console.log('Kamu pilih Kamis');
        break;
    case 5:
        console.log("Kamu pilih Jum'at");
        break;
    case 6:
        console.log('Kamu pilih Sabtu');
        break;
    case 7:
        console.log('Kamu pilih Minggu');
        break;
    default:
        console.log('Ga ada piihan dari angka yang kamu input');
}
*/

//soal 4

/*
let arah = prompt("Pilih arah untuk karakter kamu -> up/right/bottom/left: ")

switch (arah.toUpperCase()) {
    case "UP":
        console.log("karakter berjalan ke atas");
        break;
    case "BOTTOM":
        console.log("karakter berjalan ke bawah");
        break;
    case "LEFT":
        console.log('karakter berjalan ke kiri');
        break;
    case "RIGHT":
        console.log('karakter berjalan ke kanan');
        break;
    default:
        console.log('Ga ada piihan dari arah yang kamu input atau kamu typo');
}
*/


/*
--------------------------===== Loop ==========--------------------------------
*/

//soal 1 hanya js logic nya saja
/*
for (let user = 1; user <= 100; user++){
    console.log("user ke- " + user)
}
*/

//soal 2
/*
let nilai = 0;
for (let i=0; i<10; i++){
    nilai += 2;
    console.log(nilai);
}
*/

//soal 3

/*
for (let i=0; i<=20; i++){
    if(i % 2 == 0){
        console.log(i + ": bilangan genap")
    }else{
        console.log(i + ": bilangan ganjil")
    }
}
*/

//soal 4
/*
let konfirmasi;

let totalPerulanganOk = 0;

do {
    konfirmasi = prompt("Apakah anda mau mengulangi box confirm?: ");
    konfirmasi = konfirmasi.toUpperCase();
    
    if (konfirmasi == "OK"){
        totalPerulanganOk++;
    }
}
while (konfirmasi == "OK")

if (konfirmasi == "CANCEL"){
    console.log("Perulangan sudah dilakukan sebanyak " + totalPerulanganOk + " kali");
}else{
    console.log("Konfirmasi bukan dari Pilihan, tolong pilih OK atau Cancel! " + "info: telah melakukan konfirmasi sebelumnya sebanyak: " + totalPerulanganOk)
}
*/


//soal 5
/*
let jawaban;
do {
    jawaban = prompt("Sebutkan kepanjangan dari nama IB (format inputan adalah kapitalisasi):  ")
}
while(jawaban !== "Impact Byte")

if(jawaban === "Impact Byte"){
    console.log("Selamat jawaban kamu benar!")
}
*/