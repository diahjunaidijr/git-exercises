- Kapan harus menggunakan function?  
jawaban:  
ketika kita membutuhkan task yang berulang-ulang digunakan dan dapat digunakan dengan kasus lain hanya dengan cara dipanggil.  
jadi kita gak perlu repot-repot membuat kodingan per input yang ternyata masih menggunakan kode yang sama.  

- Apa bedanya parameter dan argumen?  
jawaban:  
parameter adalah variabel untuk menerima inputan ketika fungsi dijalankan. Seperti halnya cetakan yang menerima adonan untuk di bake.  
argumen adalah nilai sebagai syarat agar fungsi dapat dieksekusi sesuai parameter. Seperti adonan yang dicetak sesuai cetakan agar bisa di bake.  

- Apa itu arrow function?  
jawaban:  
cara singkat menulis fungsi yang dipopulerkan oleh ES6.  
contohnya:  

- cara konvensional:  

        const fungsiBake = function(jenisRoti,jumlahRoti ) {
            return jenisRoti * jumlahRoti;
        };  

- cara arrow function:  

        const fungsiBake = (jenisRoti, jumlahRoti) => return jenisRoti * jumlahRoti;  

- Apakah wajib menggunakan return pada function? Jelaskan alasannya!  
jawaban:  
saya bisa menjelaskan dengan analogi toko roti. Di toko roti tersebut setiap kali pelanggan datang ingin membeli, mereka pasti ingin dilayani dengan diberikan roti yang sesuai keinginan mereka. Pelayan cukup melakukan layanan sesuai dengan fungsi dia menjadi pelayan (function) dimana dia harus mencocokan info dari pelanggan (argument) yang sesuai dengan layanan di toko tersebut misalnya jenis roti dan jumlah (parameter). Pelayan cukup mengetahui 1 hal pasti bahwa dia harus memberi apa yang diminta yakni jenis roti dan jumlah. Nah disini itu disebut return (mengembalikan nilai). Artinya pelayan menyiapkan, membuat, atau mengantarkan permintaan lalu jika pelayan ingin memberikan pelayan akan memanggil pelanggan (console.log contohnya) agar pelanggan dapat mengetahui dan mengambil pesanannya.  

singkatnya:  
Dalam analogi ini, pelanggan (pemanggil fungsi -> const pelanggan) meminta layanan dengan memberikan informasi yang dibutuhkan (argument -> pesanRoti(argument)), dan kemudian pelayan (fungsi -> (pesanRoti(parameter))) mengembalikan hasil layanan (return value -> return parameter dan console.log(pelanggan)) kepada pelanggan untuk digunakan atau dikonsumsi.