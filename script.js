function gerarQRCode() {
    let inputText = document.getElementById('inputText').value.trim();
    let qrCodeImage = document.getElementById('qrcodeImage');

    if (inputText === '') {
        alert('Digite um texto para gerar o QR Code!');
        return;
    }

    let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;

    // Testa carregamento da imagem
    qrCodeImage.onerror = function () {
        alert("Erro ao carregar QR Code. Tente novamente!");
        qrCodeImage.style.display = "flex";
        qrCodeImage.style.justifyContent = "center";
    };

    qrCodeImage.onload = function () {
        qrCodeImage.style.display = "flex";
        qrCodeImage.style.justifyContent = "center";
        qrCodeImage.style.margin = "15px auto"
        qrCodeImage.style.padding = "30px"
    };

    qrCodeImage.src = apiUrl;
}
