// 1. Pegamos os elementos que vamos usar
const startButton = document.getElementById("startButton");
const videoElement = document.getElementById("localVideo");

// 2. Função para ligar a webcam
async function startWebcam() {
  try {
    // 3. Pedimos acesso à câmera (isso vai mostrar popup de permissão)
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // 4. Conectamos o stream de vídeo ao elemento <video>
    videoElement.srcObject = stream;

    console.log("Webcam ligada com sucesso!");
    startButton.textContent = "Webcam Ativa";
    startButton.disabled = true;
  } catch (error) {
    // 5. Tratamos erros (permissão negada, sem câmera, etc.)
    console.error("Erro ao acessar webcam:", error);
    alert("Não foi possível acessar a webcam. Verifique as permissões!");
  }
}

// 6. Adicionamos o evento de clique
startButton.addEventListener("click", startWebcam);

console.log("Script carregado!");
