const pdfFiles = [
    "Swift.pdf",
    "diploma programacion con python.pdf",
    "diploma-algebra-lineal.pdf",
    "diploma-algebra-ml.pdf",
    "diploma-algoritmos-avanzados-arrays.pdf",
    "diploma-algoritmos-avanzados-entrevistas.pdf",
    "diploma-algoritmos-avanzados-grafos.pdf",
    "diploma-algoritmos-avanzados-lineales.pdf",
    "diploma-arboles-machine-learning.pdf",
    "diploma-calculo-diferencial-ds.pdf",
    "diploma-clustering.pdf",
    "diploma-css.pdf",
    "diploma-django-rest-framework.pdf",
    "diploma-django.pdf",
    "diploma-estadistica-inferencial-python.pdf",
    "diploma-estructuras-datos-python.pdf",
    "diploma-funciones-matematicas.pdf",
    "diploma-fundamentos-js.pdf",
    "diploma-git-github.pdf",
    "diploma-linux.pdf",
    "diploma-machine-learning.pdf",
    "diploma-n8n-lowcode.pdf",
    "diploma-negocios-data-science-2020.pdf",
    "diploma-probabilistica.pdf",
    "diploma-programacion-estocastica.pdf",
    "diploma-python-poo.pdf",
    "diploma-regresion-lineal.pdf",
    "diploma-regresion-logistica.pdf",
    "diploma-terminal.pdf",
    "diploma-web-python.pdf",
    "ml-certificado.jpeg",
    "pythonAvanzado.pdf"
];

const imageFiles = [
    "AdmisionTramite.jpeg",
    "envioJustificante.jpeg",
    "pagoTasa.jpeg",
    "AsigNSS.jpeg",
    "homologacion.jpeg",
    "pasaporte.jpeg",
    "CarnetSalud.jpeg",
    "matricula1Asir.jpeg",
    "seguroEstud2asir.jpeg",
    "admisionTramite2.jpeg",
    "nie.jpeg"
];

const pdfContainer = document.getElementsByClassName("pdf-container")[0];
const imageContainer = document.getElementsByClassName("img-container")[0];
const btnCertificados = document.getElementById("btn-certificados");
const btnDocumentos = document.getElementById("btn-documentos");

// --- Render Certificates ---
pdfFiles.forEach(file => {
    const card = document.createElement("div");
    card.className = "pdf-card";

    const isImage = file.endsWith(".jpeg") || file.endsWith(".jpg");
    const cleanTitle = file.replace(/\.(pdf|jpeg|jpg)$/i, "");

    const previewHtml = isImage 
        ? `<img src="./platzi_certificados/${file}" class="pdf-preview" alt="${cleanTitle}">`
        : `<embed src="./platzi_certificados/${file}" type="application/pdf" class="pdf-preview">`;

    card.innerHTML = `
        ${previewHtml}
        <p>${cleanTitle}</p>
        <a href="./platzi_certificados/${file}" target="_blank">Abrir Documento</a>
    `;
    pdfContainer.appendChild(card);
});

// --- Render Documents ---
imageFiles.forEach(file => {
    const card = document.createElement("div");
    card.className = "pdf-card";

    const cleanTitle = file.replace(/\.(jpeg|jpg)$/i, "");

    card.innerHTML = `
        <img src="./documents/${file}" class="img-preview" alt="${cleanTitle}" >
        <p>${cleanTitle}</p>
        <a href="./documents/${file}" target="_blank">Abrir Documento</a>
    `;
    imageContainer.appendChild(card);
});

// --- Tab Switching Logic ---
function switchTab(showCertificates) {
    if (showCertificates) {
        pdfContainer.style.display = "grid"; // Or "flex" depending on your CSS
        imageContainer.style.display = "none";
        btnCertificados.classList.add("active");
        btnDocumentos.classList.remove("active");
    } else {
        pdfContainer.style.display = "none";
        imageContainer.style.display = "grid"; // Or "flex" depending on your CSS
        btnCertificados.classList.remove("active");
        btnDocumentos.classList.add("active");
    }
}

// Event Listeners
btnCertificados.addEventListener("click", () => switchTab(true));
btnDocumentos.addEventListener("click", () => switchTab(false));

// Initialize: Show certificates by default
switchTab(true);