Soal nomor 1:  
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.  
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru  

        nama = prompt('Masukkan nama kamu: ')
        role = prompt('Masukkan posisi role kamu (Frontend/Backend): ')
        if (role == "Frontend" || role == "FRONTEND"){
            console.log("Tugas kamu sebagai " + role + " adalah merancang dan memastikan UI/UX Web" + ", " + nama)
        }else if (role == "Backend" || role == "BACKEND"){
            console.log("Tugas kamu sebagai " + role + " adalah merancang dan memelihara keperluan sistem" + ", " + nama)
        }else{
            console.log("Tugas kamu sebagai " + role + " bukan bagian dari tim saat ini. Mungkin coba tanya tim lain" + ", " + nama)
        }

---------------------------------------------------  

Soal nomor 2:  
Buat conditional untuk membandingkan 2 buah nilai.  
Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.  

        let a = prompt("Masukkan nilai a: ")
        let b = prompt("Masukkan nilai b: ")
        if (a === b) {
            console.log("a bernilai sama dengan b")
        }else if (a > b) {
            console.log("a bernilai lebih besar dari b")
        }else{
            console.log("a bernilai lebih kecil dari b")
        }

--------------------------------------------------  

Soal nomor 3:  
Gunakan switch case untuk mengetahui nama hari berdasarkan angka.  
Hari minggu dimulai dari angka 1 dan seterusnya  

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

---------------------------------------------------------  

Soal nomor 4:  
Gunakan switch case untuk membuat sebuah game sederhana.  

+ UP -> Karakter berjalan keatas  
+ RIGHT -> Karakter berjalan kekanan  
+ BOTTOM -> Karakter berjalan kebawah  
+ LEFT -> Karakter berjalan kekiri  

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
