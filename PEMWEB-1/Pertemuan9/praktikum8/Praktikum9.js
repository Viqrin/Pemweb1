function hitung_lingkaran() {
    var radius = document.getElementById("radius").value;
  
    // Validasi input harus angka positif
    if (radius > 0) {
      var luas = 3.14 * radius * radius;
      var keliling = 2 * 3.14 * radius;
      document.getElementById("lingkaranOutput").innerText =
        "Luas: " + luas.toFixed(2) + " cm², Keliling: " + keliling.toFixed(2) + " cm";
    } else {
      document.getElementById("lingkaranOutput").innerText ="Masukkan jari-jari yang valid!";
    }
  }
  
  //soal 2
  function hitungDuit() {
    var rupiah=document.getElementById("rupiah").value;
    if (rupiah > 0) {
      var kurs = 15870;
      var dollar = rupiah / kurs;
      document.getElementById("hasilDuit").innerText ="Nilai : $" + dollar.toFixed(2);
    } else {
      document.getElementById("hasilDuit").innerText ="Masukan Nilai Valid!";
    }
  }
  //Soal 3
  // Soal 3
  
  function hitungPenjumlahan(){
  
      var bil1 = parseFloat(
          document.getElementById("bil1").value) || 0;
      var bil2 = parseFloat(
          document.getElementById("bil2").value) || 0;
      var jumlah = bil1 + bil2;
          document.getElementById(
              "hasiljumlah").innerText = "Jumlah:" + jumlah.toFixed(2);
  }
  