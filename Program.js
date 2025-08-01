const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// FUNCTION 1: Menentukan Grade
function tentukanGrade(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}

// FUNCTION 2: Menentukan Status Lulus/Tidak
function tentukanStatus(nilai) {
    if (nilai >= 70) {
        return "LULUS";
    } else {
        return "TIDAK LULUS";
    }
}

// FUNCTION 3: Menentukan Keterangan
function tentukanKeterangan(grade) {
    if (grade === "A") {
        return "Sangat Baik";
    } else if (grade === "B") {
        return "Baik";
    } else if (grade === "C") {
        return "Cukup";
    } else if (grade === "D") {
        return "Kurang";
    } else {
        return "Sangat Kurang";
    }
}

// FUNCTION 4: Program Utama dengan Input Terminal
function programPenilaian() {
    console.log("===============================");
    console.log("    PROGRAM PENILAIAN SISWA");
    console.log("===============================");
    
    rl.question("Masukkan nama siswa: ", (nama) => {
        
        rl.question("Masukkan nilai (0-100): ", (inputNilai) => {
            let nilai = parseInt(inputNilai);
            
            if (isNaN(nilai) || nilai < 0 || nilai > 100) {
                console.log("Error: Nilai harus berupa angka antara 0-100!");
                rl.close();
                return;
            }

            
            let grade = tentukanGrade(nilai);
            let status = tentukanStatus(nilai);
            let keterangan = tentukanKeterangan(grade);
            
            console.log("\n===============================");
            console.log("       HASIL PENILAIAN");
            console.log("===============================");
            console.log("Nama       : " + nama);
            console.log("Nilai      : " + nilai);
            console.log("Grade      : " + grade);
            console.log("Keterangan : " + keterangan);
            console.log("Status     : " + status);
            console.log("===============================");
            
            if (status === "LULUS") {
                console.log("Selamat! Anda berhasil lulus!");
            } else {
                console.log("Jangan menyerah! Belajar lebih giat lagi!");
            }
            
            rl.question("\nIngin menilai siswa lain? (y/n): ", (jawaban) => {
                if (jawaban.toLowerCase() === 'y' || jawaban.toLowerCase() === 'yes') {
                    console.log();
                    programPenilaian();
                } else {
                    console.log("\nTerima kasih telah menggunakan program ini!");
                    rl.close();
                }
            });
        });
    });
}



// FUNCTION 5: Tampilkan Ringkasan
function tampilkanRingkasan(hasil) {
    console.log("\n===============================");
    console.log("        RINGKASAN HASIL");
    console.log("===============================");
    
    let jumlahLulus = 0;
    let totalNilai = 0;
    
    for (let i = 0; i < hasil.length; i++) {
        let siswa = hasil[i];
        console.log(`${i+1}. ${siswa.nama.padEnd(15)} - ${siswa.nilai.toString().padStart(3)} - ${siswa.grade} - ${siswa.status}`);
        
        if (siswa.status === "LULUS") {
            jumlahLulus++;
        }
        totalNilai += siswa.nilai;
    }
    
    let rataRata = totalNilai / hasil.length;
    let persentaseLulus = (jumlahLulus / hasil.length) * 100;
    
    console.log("===============================");
    console.log("Total Siswa      : " + hasil.length);
    console.log("Jumlah Lulus     : " + jumlahLulus);
    console.log("Jumlah Tidak Lulus: " + (hasil.length - jumlahLulus));
    console.log("Rata-rata Kelas  : " + rataRata.toFixed(2));
    console.log("Persentase Lulus : " + persentaseLulus.toFixed(2) + "%");
    
    let evaluasi;
    if (persentaseLulus >= 80) {
        evaluasi = "SANGAT BAIK";
    } else if (persentaseLulus >= 60) {
        evaluasi = "BAIK";
    } else if (persentaseLulus >= 40) {
        evaluasi = "CUKUP";
    } else {
        evaluasi = "PERLU PERBAIKAN";
    }
    
    console.log("Evaluasi Kelas   : " + evaluasi);
    console.log("===============================");
}

// FUNCTION 6: Menu Utama
function menuUtama() {
    console.log("===============================");
    console.log("    PROGRAM PENILAIAN SISWA");
    console.log("===============================");
    console.log("Pilih menu:");
    console.log("1. Nilai siswa");
    console.log("2. Keluar");
    console.log("===============================");
    
    rl.question("Pilih menu (1-2): ", (pilihan) => {
        if (pilihan === "1") {
            programPenilaian();
        } else if (pilihan === "2") {
            console.log("Terima kasih! Sampai jumpa!");
            rl.close();
        } else {
            console.log("Pilihan tidak valid! Silakan pilih 1-2.");
            console.log();
            menuUtama();
        }
    });
}

menuUtama();
