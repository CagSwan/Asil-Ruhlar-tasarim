function hakkimizdaAciklama() {
   var baseZoneDiv = document.getElementById("baseZone");
    baseZoneDiv.innerHTML = '<div id="hakkimizda-page"><br><br><b>Asil Ruhlar</b> vatanına bağlı <br>"<i>Evvelce gidenlerin asil ruhları şad olsun</i>" <br>düşüncesiyle <br> hareket eden gençler tarafından oluşturulmuştur ';
}


function sehitlerimiz() {
    var baseZoneDiv = document.getElementById("baseZone");
    baseZoneDiv.innerHTML = '<br><div id="sehitler-header">"Evvelce gidenlerin Asil Ruhları şad olsun."</div><br><br><br><div id="sehit-tarih">Şehadet tarihi: 04.03.2024</div><br><div id="sehit-foto"><img src="sehitler/Orhan-Mutlu.png" alt="Şehit Orhan Mutlu" id="orhan-mutlu-foto"><div id="sehit-bilgi">Samsun-Havza Bölge Trafik Denetleme İstasyon Amirliği<br> kadrosunda görevli Polis Memuru Orhan Mutlu, <br> 04.03.2024 tarihinde dur ihtarına uymayan şüpheli aracın <br>çarpması sonucu şehit oldu. Şehidimize Allah tan rahmet <br> yakınlarına başsağlığı dileriz. Türk milletinin başı sağ olsun.<br>"Evvelce gidenlerin Asil Ruhları şad olsun."</div></div>'
}


function sozluk() {
    var baseZoneDiv = document.getElementById("baseZone");
    baseZoneDiv.innerHTML = '<br><br><div id="slideshow-container" class="slideshow-container"><div class="slide fade"><img src="sozluk/asil-ruhlar.png" alt="Image 1" class="sozluk-foto"></div><div class="slide fade"><img src="sozluk/gara-sehitlerimiz.png" alt="Image 2" class="sozluk-foto"></div><div class="slide fade"><img src="sozluk/söz.er.png" alt="Image 3" class="sozluk-foto"></div><div class="slide fade"><img src="sozluk/uzm.cvs.png" alt="Image 4" class="sozluk-foto"></div><a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div>'
    showSlides(slideIndex); 
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


function sosyal() {
  var baseZoneDiv = document.getElementById("baseZone");
  baseZoneDiv.innerHTML = ''
}

function sosyal() {
    var baseZoneDiv = document.getElementById("baseZone");
    baseZoneDiv.innerHTML = '<br><br><br><br><br><br><a href="https://www.instagram.com/asil_ruhlar/"><img src="kaynak-fotolar/Instagram-Logo.png" alt="Asil Ruhlar - İnstagram" id="insta-logo"></a><a href="https://twitter.com/Asil_Ruhlar"><img src="kaynak-fotolar/X-Logo.png" alt="Asil Ruhlar - X" id="x-logo"></a>'
}


function iletisim() {
    var baseZoneDiv = document.getElementById("baseZone");
    baseZoneDiv.innerHTML = '<br><br><div id="iletisim-padding" style="margin-right: 940px;"><b>İletişim için e-posta adresimiz:</b><br><br><hr /><br><div style="font-family: Cambria, Cochin, Georgia, Times, serif;">asilruhlariletisim@gmail.com</div></div>'
}

