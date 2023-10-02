const hitung = () => {
  let tinggi = document.getElementById("tinggi").value;
  let berat = document.getElementById("berat").value;
  let hasil = document.getElementById("hasil");
  let penjelasan = document.getElementById("penjelasan");
  penjelasan.style.fontWeight = "700";

  let tebel = document.getElementById("tebel");
  tebel.style.fontWeight = "700";

  let hasil2 = document.getElementById("hasil2");

  let rumus = berat / ((tinggi / 100) * (tinggi / 100));
  let simpulan = rumus.toFixed(1);

  if (tinggi && berat != "") {
    if (rumus <= 18.5) {
      hasil.innerHTML = "Your BMI is ";
      tebel.innerText = simpulan;
      hasil2.innerText = "whice means you'r ";
      penjelasan.innerText = "Underweight";
    } else if (rumus <= 24.9) {
      hasil.innerHTML = "Your BMI is ";
      tebel.innerText = simpulan;
      hasil2.innerText = "whice means you'r ";
      penjelasan.innerText = "Normal weight";
    } else if (rumus <= 29.9) {
      hasil.innerHTML = "Your BMI is ";
      tebel.innerText = simpulan;
      hasil2.innerText = "whice means you'r ";
      penjelasan.innerText = "Overweight";
    } else {
      hasil.innerHTML = "Your BMI is ";
      tebel.innerText = simpulan;
      hasil2.innerText = "whice means you'r ";
      penjelasan.innerText = "Obesity";
    }
  } else {
    alert("Input tidak boleh kosong");
  }
};

const reset = () => {
  document.getElementById("tinggi").value = "";
  document.getElementById("berat").value = "";
};
