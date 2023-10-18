// efek dropdown di footer

// Mengambil referensi tombol dropdown
const menuButton = document.getElementById("menu-button");

// Mengambil referensi menu dropdown
const dropdownMenu = document.getElementById("menu-dropdown");

// Mengambil referensi footer
const footer = document.getElementById("footer");

// nilai ori paddingbottom
const defaultpaddingbottom = getComputedStyle(footer).paddingBottom;

// Menambahkan event listener ke tombol dropdown
menuButton.addEventListener("click", function () {
  // Memeriksa apakah menu sedang terbuka atau tidak
  const isExpanded = menuButton.getAttribute("aria-expanded");

  if (isExpanded === "true") {
    // Jika menu sudah terbuka, kita akan menutupnya
    dropdownMenu.style.display = "none"; // Menyembunyikan menu
    menuButton.setAttribute("aria-expanded", "false"); // Mengubah atribut tombol
    footer.style.paddingBottom = defaultpaddingbottom;
  } else {
    // Jika menu belum terbuka, kita akan membukanya
    dropdownMenu.style.display = "block"; // Menampilkan menu
    menuButton.setAttribute("aria-expanded", "true"); // Mengubah atribut tombol
    // ubah pb saat dropdown tampil
    footer.style.paddingBottom = "180px";
  }
});

document.addEventListener("click", function (event) {
  if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
    dropdownMenu.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
    // ubah pb saat dropdown ditutup
    footer.style.paddingBottom = defaultpaddingbottom;
  }
});

// efek dropdown di footer end

// testimoni
let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = document.getElementsByTagName('li');

let sliderContainerWidth = sliderContainer.clientWidth;
let elementToShow = 3;
if (document.body.clientWidth<1000) {
  elementToShow= 1;

}else if (
  document.body.clientWidth<1500){
elementToShow = 3;
  }



slider.style.transition= 'margin';
slider.style.transitionDuration= '1s';

let cardWidth = sliderContainerWidth/elementToShow;

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < array.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth+'px';
  
}

function prev(){
  if (+slider.style.marginLeft.slice(0,-2) != -cardWidth * (cards.length-elementToShow)) 
slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) - cardWidth) + 'px'; // 100px
}

function next(){
  if (+slider.style.marginLeft.slice(0,-2)!=0) 
    
  
  slider.style.marginLeft = (+slider.style.marginLeft.slice(0,-2))+cardWidth+'px';
}

// end testimoni

// efek smooth button explore start

document.querySelector('a[href="#section3"]').addEventListener('click', function(e) {
  e.preventDefault(); // Menghentikan perilaku default dari tautan

  const targetSection = document.querySelector('#section3'); // Element tujuan
  const offset = 0; // Sesuaikan dengan offset yang diinginkan

  // Menghitung posisi scroll target
  const targetOffset = targetSection.offsetTop - offset;

  // Animasi scroll yang halus
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth'
  });
});


// efek smooth button explore end
