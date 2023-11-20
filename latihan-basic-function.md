1. Latihan 1

Buat sebuah function untuk toko online kita. Ikuti poin-poin dibawah ini:  
Function mempunyai 2 parameter yaitu nama pembeli dan produk yang dibeli  
Function akan mengembalikan nilai "Terima kasih (nama pembeli) telah membeli produk (produk yang dibeli)"  
Panggil function dengan menggunakan console.log()  
jawaban:  

        function infoPembeli(nama, produk){
            return 'Terima kasih ' + nama + " telah membeli produk " + produk;
        } 
        console.log(infoPembeli('Clara', 'sparkling blue mocktail'))  

2.Latihan 2  
Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. Ikuti poin-poin dibawah ini:  
Buat sebuah function helper lalu gunakan pada function converternya. Seperti contoh dibawah ini. Jadi kita tinggal membuat function helper dan function utama untuk convert fahrenheit ke Celcius  
jawaban:  

            function multiplyByNineFifths(number) {
                return number * (9/5);
            }

            function getCelsius(fahrenheit) {
                return (fahrenheit - 32) * (5/9);
            }

            function getFahrenheit(celsius) {
                return multiplyByNineFifths(celsius) + 32;
            }

            // Contoh penggunaan
            console.log(getFahrenheit(15));  // Output: 59
            console.log(getCelsius(59));     // Output: 15

3.Latihan 3  
Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinya adalah:  
Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia  
Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia  
Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah 4 kali umur manusia. Jadi jika umur kucing saat ini 4 tahun berarti dalam kalendar tahun kucing, umurnya adalah 32 tahun.  
Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.  
jawaban:  

            const umurKucing = (umur) => {
                if (umur == 1){
                    return 'umur kucing: ' + 15 + ' tahun manusia';
                }else if (umur == 2){
                    return 'umur kucing: ' + 24 + ' tahun manusia';
                }else if (umur >=3) {
                    return 'umur kucing: ' + (24 + (umur - 2) * 4) + ' tahun manusia';
                }else {
                    return 'umur tidak boleh <= 0';
                }
            }
            console.log(umurKucing(1));
            console.log(umurKucing(2));
            console.log(umurKucing(3));
            console.log(umurKucing(4));
            console.log(umurKucing(5));

4.Soal 4  
Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.  
Menerima 1 parameter string  
Gunakan single line block function  
Output adalah string yang telah diubah formatnya menjadi lower case  
Gunakan built in method string  
jawaban:  
            const hurufKecil = (kata) => kata.toLowerCase();

            let inputKata = 'UbahLah MenjADI hURUF KeciL SemUA';
            let hasil = hurufKecil(inputKata);
            console.log(hasil)

            //console.log(hurufKecil('HaloHaAY'));
