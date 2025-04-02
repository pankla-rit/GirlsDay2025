// Globales Array zur Kontrolle, ob eine Aufgabe gelöst wurde
let tasksSolved = Array(11).fill(false); // Index 1-10 verwenden

function runTask(taskNumber) {
  switch(taskNumber) {
    case 1:
      var code1 = document.getElementById('task1-code').value;
      document.getElementById('task1-preview').innerHTML = code1;
      break;
    case 2:
      var code2 = document.getElementById('task2-code').value;
      document.getElementById('task2-preview').innerHTML = code2;
      break;
    case 3:
      var code3 = document.getElementById('task3-code').value;
      document.getElementById('task3-preview').innerHTML = code3;
      break;
    case 4:
      var code4 = document.getElementById('task4-code').value;
      document.getElementById('task4-preview').innerHTML = code4;
      break;
    case 5:
      var css5 = document.getElementById('task5-code').value;
      document.getElementById('task5-preview').style.cssText = css5;
      break;
    case 6:
      var css6 = document.getElementById('task6-code').value;
      document.getElementById('task6-preview').style.cssText = css6;
      break;
    case 7:
      try {
        eval(document.getElementById('task7-code').value);
      } catch (e) {
        alert("Fehler im JavaScript-Code: " + e);
      }
      break;
    case 8:
      try {
        eval(document.getElementById('task8-code').value);
      } catch (e) {
        alert("Fehler im JavaScript-Code: " + e);
      }
      break;
    case 9:
      try {
        eval(document.getElementById('task9-code').value);
      } catch (e) {
        alert("Fehler im JavaScript-Code: " + e);
      }
      break;
      case 10:
        var code10 = document.getElementById('task10-code').value.trim().toLowerCase();
        if(code10 === "geschafft") {
          document.getElementById('task10-preview').innerHTML = "Super, du hast es geschafft!";
          tasksSolved[10] = true;
          checkAllTasksCompleted();
        } else {
          document.getElementById('task10-preview').innerHTML = "Bitte gib 'Geschafft' ein, wenn du alle Aufgaben gelöst hast.";
        }
        break;
      
    default:
      alert("Unbekannte Aufgabe!");
  }
  // Markiere die Aufgabe als gelöst und prüfe, ob alle Aufgaben fertig sind
  tasksSolved[taskNumber] = true;
  checkAllTasksCompleted();
}

function checkAllTasksCompleted() {
  // Überprüfe, ob alle Aufgaben (1 bis 10) als gelöst markiert sind
  for (let i = 1; i <= 10; i++) {
    if (!tasksSolved[i]) return;
  }
  // Alle Aufgaben gelöst – löse das Konfetti aus (als Überraschung)
  triggerConfetti();
}

function triggerConfetti() {
  // Erzeuge 50 Konfetti-Elemente mit dynamischen Eigenschaften
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    // Zufällige horizontale Position
    confetti.style.left = Math.random() * 100 + 'vw';
    // Zufällige Farbe aus einer schönen Palette
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // Zufälliger Wert für border-radius, damit nicht alle gleich aussehen
    confetti.style.borderRadius = Math.random() < 0.5 ? '50%' : '0';
    // Zufällige Animationsdauer zwischen 2.5s und 3.5s
    confetti.style.animationDuration = (2.5 + Math.random()) + 's';
    document.body.appendChild(confetti);
    // Entferne das Konfetti nach der Animation
    setTimeout(() => {
      confetti.remove();
    }, 3500);
  }
}
