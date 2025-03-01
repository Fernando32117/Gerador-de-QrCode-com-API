function gerarQRCode() {
    let inputText = document.getElementById('inputText').value.trim();
    let qrCodeImage = document.getElementById('qrcodeImage');

    if (inputText === '') {
        alert('Digite um texto para gerar o QR Code!');
        return;
    }

    let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;

    qrCodeImage.onerror = function () {
        alert("Erro ao carregar QR Code. Tente novamente!");
    };

    qrCodeImage.onload = function () {
        qrCodeImage.style.display = "block";
        qrCodeImage.style.margin = "15px auto";
    };

    qrCodeImage.src = apiUrl;
}

function baixarPDF() {
    const { jsPDF } = window.jspdf;
    let qrCodeImage = document.getElementById('qrcodeImage');

    if (qrCodeImage.src.includes("qrcode.png") || qrCodeImage.src === "") {
        alert("Por favor, gere um QR Code antes de baixar!");
        return;
    }

    let pdf = new jsPDF();

    pdf.text("QR Code Gerado", 70, 20);
    pdf.addImage(qrCodeImage, "PNG", 50, 30, 100, 100);
    pdf.save("QRCode.pdf");
}
