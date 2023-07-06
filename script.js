// Acessa a video stream do dispositivo
navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream) {
    var video = document.getElementById('video');

    // Define a stream de vídeo para a tag de vídeo
    video.srcObject = stream;

    // Play the video stream
    video.play();
})
.catch(function(err) {
    console.error("Ocorreu um erro! " + err);
});

// Pega o elemento 'snap'
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Adiciona o listener de eventos ao botão
document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});
