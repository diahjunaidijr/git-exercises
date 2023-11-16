- Soal 1:
Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
Lakukan FOR LOOP pada Javascript.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User List</title>
</head>
<body>

<script>
    // Loop untuk menampilkan teks pada halaman HTML
    for (let user = 1; user <= 100; user++) {
        document.write('User ke - ' + user + '<br>');
    }
</script>

</body>
</html>


- Soal 2:
Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
Nilai awal = 0
Pengulangan = 10 kali
Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan

let nilai = 0;
for (let i=0; i<10; i++){
    nilai += 2;
    console.log(nilai);
}

- Soal 3:
Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan


for (let i=0; i<=20; i++){
    if(i % 2 == 0){
        console.log(i + ": bilangan genap")
    }else{
        console.log(i + ": bilangan ganjil")
    }
}

-soal 4:
Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)


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

- Soal 5:
Buat sebuah program kuis.
Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar

let jawaban;
do {
    jawaban = prompt("Sebutkan kepanjangan dari nama IB (format inputan adalah kapitalisasi):  ")
}
while(jawaban !== "Impact Byte")

if(jawaban === "Impact Byte"){
    console.log("Selamat jawaban kamu benar!")
}