// Membuat array Pendaftar
let listPendaftar = [];

// Function Pendaftar
class Pendaftar {
  constructor(nama, umur, uangSaku) {
    this.nama = nama;
    this.umur = umur;
    this.uangSaku = uangSaku;
  }
}

function open_Tab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function addPendaftar(pendaftar) {
  listPendaftar.push(pendaftar);
}

function removePendaftar(index) {
  listPendaftar.splice(index, 1);
}

function updateTabelPendaftar() {
  const tbody = $("#tabel-pendaftar tbody");
  tbody.empty();
  for (let i = 0; i < listPendaftar.length; i++) {
    const pendaftar = listPendaftar[i];
    const tr = $("<tr>");
    tr.append($("<td>").text(i + 1));
    tr.append($("<td>").text(pendaftar.nama));
    tr.append($("<td>").text(pendaftar.umur));
    tr.append($("<td>").text(pendaftar.uangSaku));
    tbody.append(tr);
  }
}

function updateResume() {
  if (listPendaftar.length > 0) {
    const totalUmur = listPendaftar.reduce(
      (sum, pendaftar) => sum + pendaftar.umur,
      0
    );
    const totalUangSaku = listPendaftar.reduce(
      (sum, pendaftar) => sum + pendaftar.uangSaku,
      0
    );
    const rataRataUmur = totalUmur / listPendaftar.length;
    const rataRataUangSaku = totalUangSaku / listPendaftar.length;
    const resumeText = `Rata-rata pendaftar memiliki uang saku sebesar ${rataRataUangSaku} dengan rata-rata umur ${rataRataUmur}`;
    $("#resume").text(resumeText);
  } else {
    $("#resume").text("");
  }
}

// Validasi Input Form
$(document).ready(() => {
  $("#form-pendaftaran").submit((event) => {
    event.preventDefault();
    const nama = $("#nama").val();
    const umur = parseInt($("#umur").val());
    const uangSaku = parseInt($("#uang-saku").val());
    const pendaftar = new Pendaftar(nama, umur, uangSaku);
    if (
      nama.length < 10 ||
      umur < 25 ||
      uangSaku < 100000 ||
      uangSaku > 1000000
    ) {
      alert("Data tidak valid. Mohon periksa kembali input Anda.");
    } else {
      addPendaftar(pendaftar);
      updateTabelPendaftar();
      updateResume();
      $("#nama").val("");
      $("#umur").val("");
      $("#uang-saku").val("");
      alert("Data berhasil disimpan.");
    }
  });

  $("#tabel-pendaftar").on("click", ".btn-delete", function () {
    const index = $(this).data("index");
    removePendaftar(index);
    updateTabelPendaftar();
    updateResume();
  });
});

//Membuat currency Rupiah
var rupiah = document.getElementById("rupiah");
rupiah.addEventListener("keyup", function (e) {
  // tambahkan 'Rp.' pada saat form di ketik
  // gunakan fungsi formatRupiah() untuk mengubah angka yang di ketik menjadi format angka
  rupiah.value = formatRupiah(this.value, "Rp. ");
});

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}
