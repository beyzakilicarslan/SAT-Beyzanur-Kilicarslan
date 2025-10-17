// ReformPilates Ana Script ✨
// ----------------------------
// Bu dosya ReformPilates projesinin temel etkileşimlerini yönetir.
// Dosya konumu: /scripts/main.js

document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ "Başla" butonuna tıklayınca hareketler sayfasına git
  const baslaBtn = document.querySelector("#btnBasla");
  if (baslaBtn) {
    baslaBtn.addEventListener("click", () => {
      window.location.href = "hareketler.html";
    });
  }

  // 2️⃣ Navbar scroll efekti
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    });
  }

  // 3️⃣ Kart animasyonu (hareketler sayfasında)
  // .card veya .hareket-card sınıfına sahip öğeleri gözlemler
  const kartlar = document.querySelectorAll(".card, .hareket-card");

  if (kartlar.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    kartlar.forEach(kart => observer.observe(kart));
  }

  // 4️⃣ Aktif menü bağlantısını vurgula
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 5️⃣ Sayfa yüklenince konsola bilgi
  console.log("ReformPilates sitesi tamamen çalışıyor ✅");

});
