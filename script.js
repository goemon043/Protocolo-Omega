// Carga el build WebGL de Unity (carpeta game/) dentro del iframe.
// Si no existe todavía, muestra un aviso en lugar de una página de error.
(function () {
  const frame = document.getElementById('gameFrame');
  const placeholder = document.getElementById('gamePlaceholder');
  const wrap = document.getElementById('gameWrap');

  fetch('game/index.html', { method: 'HEAD' })
    .then(r => {
      if (r.ok) { frame.src = 'game/index.html'; }
      else { placeholder.hidden = false; frame.remove(); }
    })
    .catch(() => { placeholder.hidden = false; frame.remove(); });

  document.getElementById('btnFullscreen').addEventListener('click', () => {
    const el = frame.isConnected ? frame : wrap;
    if (el.requestFullscreen) el.requestFullscreen();
  });
})();
