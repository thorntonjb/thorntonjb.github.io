const file_input = document.getElementById('audio_file');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 300;

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const audio_ctx = new AudioContext();
    const source = audio_ctx.createMediaStreamSource(stream);
    const analyser = audio_ctx.createAnalyser();
    analyser.fftSize = 256;
    const data_array = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);

    function draw() {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(data_array);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = canvas.width / data_array.length;
      let x = 0;

      for (let i = 0; i < data_array.length; i++) {
        const height = data_array[i];
        ctx.fillStyle = `rgb(${height + 100},50,50)`;
        ctx.fillRect(x, canvas.height - height, barWidth, height);
        x += barWidth + 1;
      }
    }

    draw();
  })
  .catch(err => console.erro('Mic error', err));


// const audio_ctx = new AudioContext();
// const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// const source = audio_ctx.createMediaStreamSource(stream);
// const analyser = audio_ctx.createAnalyser();

// analyser.fftSize = 2048;
// const bufferLength = analyser.frequencyBinCount;
// const dataArray = new Uint8Array(bufferLength);
// // source.connect(analyser);

// analyser.getByteFrequencyData(dataArray);

// function draw() {
//   requestAnimationFrame(draw);
//   analyser.getByteFrequencyData(dataArray);
//   console.log(dataArray);
// }

// draw();
