// Cek Grade Mahasiswa
function cekGrade(nilai) {
  let grade;

  if (nilai >= 90) {
    grade = "A";
  } else if (nilai >= 80) {
    grade = "B";
  } else if (nilai >= 70) {
    grade = "C";
  } else if (nilai >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }

  console.log(`Nilai: ${nilai}, Grade: ${grade}`);
}

// Cek Ganjil atau Genap
function cekGanjilGenap(angka) {
  if (angka % 2 === 0) {
    console.log(`${angka} adalah angka genap`);
  } else {
    console.log(`${angka} adalah angka ganjil`);
  }
}

// Menu Pilihan dengan Switch
function tampilkanMenu(pilihan) {
  switch (pilihan) {
    case 1:
      console.log("Kamu memilih Makanan 🍛");
      break;
    case 2:
      console.log("Kamu memilih Minuman 🥤");
      break;
    case 3:
      console.log("Kamu memilih Camilan 🍟");
      break;
    default:
      console.log("Pilihan tidak valid!");
  }
}

// Contoh pemanggilan fungsi (simulasi input langsung)
cekGrade(85);        // Output: Nilai: 85, Grade: B
cekGanjilGenap(7);   // Output: 7 adalah angka ganjil
tampilkanMenu(2);    // Output: Kamu memilih Minuman 🥤
