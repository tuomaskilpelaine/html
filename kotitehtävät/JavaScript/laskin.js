function laskeLoppusumma() {
    var alkuSummaElement = document.getElementById("alkusumma");
    var prosenttiosuusElement = document.getElementById("prosenttiosuus");
    var loppusummaElement = document.getElementById("loppusumma");
  
    var alkuSumma = parseFloat(alkuSummaElement.value);
    var prosenttiosuus = parseFloat(prosenttiosuusElement.value);
  
    if (isNaN(alkuSumma) || isNaN(prosenttiosuus)) {
      loppusummaElement.value = "Syötä kelvolliset luvut.";
      return;
    }
  
    var loppusumma = alkuSumma + (alkuSumma * (prosenttiosuus / 100));
    loppusummaElement.value = loppusumma.toFixed(2);
  }