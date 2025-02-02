// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "우린 너무 달라<br>(urin neomu dalla)<br>Somos tan diferentes", time: 9 },
  { text: "잘 알고 있잖아<br>(jal algo itjana)<br>Tú lo sabes bien", time: 14 },
  { text: "서로의 진심을<br>(seoroui jinsimeul)<br>Seamos sinceros entre nosotros", time: 20 },
  { text: "알 수 없잖아<br>(al su eopjana)<br>Y de nuestra realida", time: 25 },
  { text: "이해하지 않아<br>(ihaehaji ana)<br>No lo sé", time: 31 },
  { text: "기억하지 않아<br>(gieokaji ana)<br>No lo recuerdo", time: 38 },
  { text: "늘 말뿐인 말들<br>(neul malppunin maldeul)<br>Las palabras son solo palabras", time: 44 },
  { text: "기대하지 않아<br>(gidaehaji ana)<br>Y no espero nada de ellas", time: 49 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 55 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 61 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 67 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 73 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 79 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 85 },
  { text: "따스한 그대의<br>(ttaseuhan geudae ui son)<br>Con el calor de tu...", time: 91 },
  { text: "손길로<br>(gillo)<br>piel", time: 91.002 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 103 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 109 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 115 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 121 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 127 },
  { text: "난 너를 사랑해<br>(nan neoreul saranghae)<br>TE AMO", time: 133 },
  { text: "따스한 그대의<br>(ttaseuhan geudae ui son)<br>Con el calor de tu..", time: 139 },
  { text: "손길로<br>(gillo)<br>piel", time: 139.002 },
  { text: "나를 안아줘<br>(nareul anajwo)<br>Abrázame", time: 147 },
  { text: "나를 잡아줘<br>(nareul jabajwo)<br>Atrápame", time: 153 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);