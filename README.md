# Reform Pilates Web Sitesi 🧘‍♀️

![Reform Pilates Banner](https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop)

Bu proje, kurgusal bir pilates stüdyosu olan **"Reform Pilates"** için geliştirilmiş modern, kullanıcı dostu ve tam duyarlı (responsive) bir web sitesidir. 

Proje, **Frontend Web Geliştirme** yeteneklerini sergilemek amacıyla; herhangi bir hazır kütüphane (Bootstrap, jQuery vb.) kullanılmadan, tamamen **Saf (Vanilla) JavaScript**, **HTML5** ve **CSS3** teknolojileri kullanılarak hazırlanmıştır.

## 🚀 Proje Hakkında

Reform Pilates web sitesi, ziyaretçilere stüdyonun hizmetlerini tanıtmak, pilates hareketlerini kategorize ederek sunmak ve blog yazıları aracılığıyla bilgi vermek amacıyla tasarlanmıştır. 

### Öne Çıkan Özellikler:

#### 1. 📱 Tam Duyarlı Tasarım (Responsive Design)
"Mobile-First" yaklaşımı ile geliştirildi. Masaüstü, tablet ve mobil cihazlarda kusursuz görünür.

![Mobil Uyumlu Tasarım](https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop)

#### 2. 🔍 Gelişmiş Filtreleme Sistemi (JavaScript)
"Hareketler" sayfasında, kullanıcılar pilates ekipmanına (Reformer, Mat vb.) göre anlık olarak içerik filtreleyebilir. JavaScript DOM manipülasyonu ile anlık geçişler sağlanır.

![Pilates Hareketleri](https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop)

#### 3. 🪟 Modal (Pop-up) Yapısı
Blog sayfasında detaylar, sayfa değişmeden açılan pencereler (modal) içinde görüntülenir.

![Blog Sayfası](https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=800&auto=format&fit=crop)

---

## 🛠️ Kullanılan Teknolojiler

Projede aşağıdaki teknolojiler kullanılmıştır:

* **HTML5:** Semantik etiket yapısı.
* **CSS3:** Flexbox, Grid, CSS Variables (:root), Media Queries.
* **JavaScript (ES6+):** DOM Manipülasyonu, Event Handling.
* **Google Fonts:** Montserrat & Playfair Display.
* **Görseller:** Unsplash (CDN üzerinden).

## 💻 Kurulum ve Çalıştırma

Bu proje **Statik Web Sitesi** yapısındadır. Herhangi bir sunucu kurulumu (Node.js, PHP, Database vb.) gerektirmez.

1.  Bu repository'i bilgisayarınıza indirin:
    ```bash
    git clone [https://github.com/beyzakilicarslan/SAT-Beyzanur-Kilicarslan.git](https://github.com/beyzakilicarslan/SAT-Beyzanur-Kilicarslan.git)
    ```
    *(Veya sağ üstteki **Code** butonuna tıklayıp **Download ZIP** diyerek indirebilirsiniz.)*

2.  İndirdiğiniz klasörü açın.
3.  **`index.html`** dosyasına çift tıklayın.
4.  Proje tarayıcınızda çalışmaya başlayacaktır. 🎉

## 📂 Dosya Yapısı

```text
Reform-Pilates/
├── index.html         # Ana Sayfa (Karşılama ve Vitrin)
├── hakkinda.html      # Kurumsal Bilgiler
├── hareketler.html    # JS Filtreleme Özellikli Kütüphane
├── blog.html          # Modal Yapılı Blog Sayfası
├── iletisim.html      # İletişim Formu (JS Simülasyonlu)
└── README.md          # Proje Dokümantasyonu
