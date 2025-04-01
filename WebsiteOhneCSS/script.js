// Sobald der DOM geladen ist, wird das JavaScript ausgeführt
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
  
    const revealOnScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Da keine CSS-Animationen vorhanden sind, füge diese Klasse trotzdem hinzu,
        // damit sich der Zustand der Sektionen ändern könnte (z.B. für weitere JS-Interaktionen)
        if (rect.top <= window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  });
  
  // Simulierte Suchfunktion
  function performSearch() {
    const query = document.getElementById('searchInput').value;
    if(query.trim() !== "") {
      alert("Du hast nach '" + query + "' gesucht. Diese Funktion wird bald erweitert!");
    } else {
      alert("Bitte gib einen Suchbegriff ein.");
    }
  }
  