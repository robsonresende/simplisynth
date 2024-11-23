const keys = document.querySelectorAll(".pianokey")


keys.forEach((key) => {


      key.addEventListener('pointerdown', (e) => {

          key.style.borderColor = "#0000ff";

          const ctx = new (window.AudioContext || window.webkitAudioContext)();

          const master = ctx.createGain();
          master.gain.value = 0.9;
          master.connect(ctx.destination);

          const trem = document.getElementById("tremolo");

          if (trem.checked) {

            const osc2 = ctx.createOscillator();
            osc2.frequency.value = 28;
            osc2.connect(master.gain);
            osc2.start();

          }

          const osc = ctx.createOscillator();
          osc.frequency.value = key.dataset.key * document.querySelector('input[name="oct-input"]:checked').value;

          osc.type = document.querySelector("#select-wave").value;

          osc.connect(master);

          osc.start(); 

          key.addEventListener('pointerup', (x) => {
            osc.stop();
            key.style.borderColor = "#aaaaaa";
          });

          key.addEventListener('pointerleave', (y) => {
            osc.stop();
            key.style.borderColor = "#aaaaaa";
          });
            
      
    });

});
