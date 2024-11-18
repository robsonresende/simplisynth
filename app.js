const keys = document.querySelectorAll(".pianokey")

keys.forEach((key) => {
      key.addEventListener('pointerdown', (e) => {

        // pointerup to off the button
      key.addEventListener('pointerup', (e) => {
        osc.stop();
        key.style.borderColor = "#aaaaaa";
      });

      // pointerleave in case the user leave the button
      key.addEventListener('pointerleave', (e) => {
        osc.stop();
        key.style.borderColor = "#aaaaaa";
      });

      key.style.borderColor = "#0000ff";
    
      const ctx = new (window.AudioContext || window.webkitAudioContext)();

      const master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.frequency.value = key.dataset.key * document.querySelector('input[name="oct-input"]:checked').value;

      osc.type = document.querySelector("#select-wave").value;

      osc.connect(master);

      osc.start();
    });

    
});

