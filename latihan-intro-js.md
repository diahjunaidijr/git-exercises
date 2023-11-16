- Soal 1:

Console log:
Data diri Nama  
Asal daerah  
Tanggal lahir  
Umur  
Posisi pekerjaan  

            console.log('Clara');
            console.log('DKI Jakarta');
            console.log('November');
            console.log(18);
            console.log('Web Developer Jr.');


- Soal 2

Membuat interaksi kepada user.  
Prompt data berikut:  
Nama user  
Asal Negara  
Confirm data user. Apakah data yang diisi sudah benar?  
Alert “Terima kasih sudah mengisi form”  


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


- Soal 3

Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1

            console.log('Clara'); // nama kamu
            console.log('DKI Jakarta'); //asal daerah kamu
            console.log(3); // tanggal/bulan kamu saja dalam angka :3
            console.log(18); // umur kamu
            console.log('Web Developer Jr.'); //pekerjaan kamu atau status


- Soal 4

Berikan multiple comments pada fitur soal nomor 2

            /*
            -----FORM DATA DIRI SINGKAT----
            
            ~~~~~~~Mohon untuk diisi~~~~~~~~~
            */
            
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
            
            /*
            ---------------END----------------
            */

- Soal 5

Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1.  
Lalu panggil dan tampilkan dengan menggunakan console log

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



- soal 6

Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.  
25 + 10  
100 * 2  
99 / 2  
99 % 2  

                let penjumlahan = 25 + 10;
                let perkalian = 100 * 2
                let pembagian = 99 / 2 //pembagian biasa yang bisa menghasilkan pecahan juga
                let modulus = 99 % 2 //sisa bagi
                console.log("Penjumlahan 25 + 10 = " + penjumlahan)
                console.log("Perkalian 100 * 2 = " + perkalian)
                console.log("Pembagian 99 / 2 = " + pembagian)
                console.log("Modulus 99 % 2 = " + modulus)
