// Sayfayı yukarı kaydırma fonksiyonu
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Butona tıklama olayını dinleme
document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);

// Sayfa kaydırma ile butonun görünürlüğünü kontrol etme
window.addEventListener('scroll', function() {
    const button = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) {
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
});
// Menü panelini açma ve kapama
const menuIcon = document.getElementById('menuIcon');
const sidePanel = document.getElementById('sidePanel');
const closePanel = document.getElementById('closePanel');

menuIcon.addEventListener('click', function() {
    sidePanel.classList.toggle('open');
});

closePanel.addEventListener('click', function() {
    sidePanel.classList.remove('open');
});

