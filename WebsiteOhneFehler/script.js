document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');

  const revealOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

function performSearch() {
  const query = document.getElementById('searchInput').value;
  if(query.trim() !== "") {
    alert("Du hast nach '" + query + "' gesucht. Diese Funktion wird bald erweitert!");
  } else {
    alert("Bitte gib einen Suchbegriff ein.");
  }
}
