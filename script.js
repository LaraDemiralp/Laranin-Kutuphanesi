// Şarkı verilerini içeren dizi
const songs = [
    { song: "Vazgeçtim Dünyadan", correctAlbum: "Kadın", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Deli Kızım Uyan", correctAlbum: "Kadın", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Oyunlar", correctAlbum: "Artık Kısa Cümleler Kuruyorum", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Bu Aşk Fazla Sana", correctAlbum: "Kadın", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Bırak Kadının Olayım", correctAlbum: "Kadın", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Üvey", correctAlbum: "Artık Kısa Cümleler Kuruyorum", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Yağmurlar", correctAlbum: "Kadın", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Bugün", correctAlbum: "Artık Kısa Cümleler Kuruyorum", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Kalbim Mezar", correctAlbum: "Od", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Birileri Var", correctAlbum: "Od", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Kalbim", correctAlbum: "Artık Kısa Cümleler Kuruyorum", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Savaş Boyası", correctAlbum: "Od", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Bin Yıldır", correctAlbum: "Od", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Yorgun", correctAlbum: "Artık Kısa Cümleler Kuruyorum", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Zaman Geçip Gidiyor", correctAlbum: "Can Kırıkları", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Okyanus", correctAlbum: "Can Kırıkları", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Çakıl Taşları", correctAlbum: "Can Kırıkları", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] },
    { song: "Çok Yorgunum", correctAlbum: "Od", options: ["Kadın", "Artık Kısa Cümleler Kuruyorum", "Od", "Can Kırıkları"] }
];

// Şu anki şarkı dizisinin index'i
let currentSongIndex = 0;

// Şarkıyı ve seçenekleri kullanıcıya göstermek için fonksiyon
function displaySong() {
    const songElement = document.getElementById("song"); // Şarkı ismini gösterecek HTML öğesi
    const optionsElement = document.getElementById("options"); // Albüm seçeneklerini gösterecek HTML öğesi
    const resultElement = document.getElementById("result"); // Sonuç mesajını gösterecek HTML öğesi

    resultElement.textContent = ""; // Sonuç mesajını temizle
    const songData = songs[currentSongIndex]; // Şu anki şarkı verisini al
    songElement.textContent = `Hangi albümden? Şarkı: "${songData.song}"`; // Şarkı ismini göster

    optionsElement.innerHTML = ""; // Seçenekleri temizle

    // Şarkının albüm seçenekleri için butonlar oluştur
    songData.options.forEach(option => {
        const button = document.createElement("button"); // Yeni bir buton oluştur
        button.textContent = option; // Butonun metnini albüm adı yap
        button.onclick = () => checkAnswer(option); // Butona tıklandığında cevap kontrolünü yap
        optionsElement.appendChild(button); // Butonu seçenekler kısmına ekle
    });
}

// Seçilen albümün doğru olup olmadığını kontrol etme fonksiyonu
function checkAnswer(selectedAlbum) {
    const songData = songs[currentSongIndex]; // Şu anki şarkı verisini al
    const resultElement = document.getElementById("result"); // Sonuç mesajını gösterecek öğe
    const buttons = document.querySelectorAll("#options button"); // Albüm seçeneklerini içeren butonlar

    // Tüm butonları devre dışı bırak
    buttons.forEach(btn => btn.disabled = true);

    // Doğru cevabı kontrol et ve sonucu mesaj olarak göster
    if (selectedAlbum === songData.correctAlbum) {
        resultElement.textContent = "✅ Doğru!"; // Doğru cevap
        resultElement.style.color = "green"; // Yeşil renkte göster
    } else {
        resultElement.textContent = `❌ Yanlış! Doğru cevap: ${songData.correctAlbum}`; // Yanlış cevap
        resultElement.style.color = "red"; // Kırmızı renkte göster
    }

    // Sonraki şarkıya geçmek için index'i güncelle
    currentSongIndex = (currentSongIndex + 1) % songs.length;

    // 2 saniye sonra yeni şarkıyı göster
    setTimeout(displaySong, 2000);
}

// Sayfa yüklendiğinde ilk şarkıyı göster
window.onload = displaySong;

// Formun submit edilmesiyle verilerin tabloya eklenmesi
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm"); // Form öğesini al
  const tableBody = document.getElementById("tableBody"); // Tablo içeriğini tutacak öğe

  // Formun submit olayını dinle
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Sayfa yeniden yüklenmesini engelle

    // Formdaki verileri al
    const name = document.getElementById("name").value.trim(); // İsim
    const email = document.getElementById("email").value.trim(); // E-posta
    const message = document.getElementById("message").value.trim(); // Mesaj
    const genderElement = document.querySelector("input[name='gender']:checked"); // Seçilen cinsiyet

    // Eğer bir alan boşsa uyarı ver
    if (!name || !email || !message || !genderElement) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const gender = genderElement.value; // Cinsiyeti al

    // Yeni bir tablo satırı oluştur
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>  <!-- İsim -->
      <td>${email}</td> <!-- E-posta -->
      <td>${gender}</td> <!-- Cinsiyet -->
      <td>${message}</td> <!-- Mesaj -->
    `;

    tableBody.appendChild(row); // Yeni satırı tabloya ekle
    form.reset(); // Formu temizle
  });
});
