const slide = document.querySelectorAll(".glide__slide");
const previewWindow = document.getElementById("preview-window");
const previewContent = document.getElementById("preview-content");

slide.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    const rawData = slide.getAttribute("data-preview");

    if (rawData) {
      previewContent.innerHTML = "";

      const imagesArray = rawData.split(",");

      imagesArray.forEach((srcString) => {
        const imgElement = document.createElement("img");
        imgElement.src = srcString.trim(); // .trim() remove espaços em branco acidentais
        imgElement.alt = "Preview Item";
        previewContent.appendChild(imgElement);
      });

      previewWindow.classList.add("active");
    }
  });

  slide.addEventListener("mouseleave", () => {
    previewWindow.classList.remove("active");
    // Limpar o conteúdo após o encerramento da animação do CSS
    setTimeout(() => {
      if (!previewWindow.classList.contains("active")) {
        previewContent.innerHTML = "";
      }
    }, 300);
  });
});

/* JANELA FLUTUANTE*/
.preview-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 500px; /* Largura expandida para suportar mais imagens */
  max-width: 90vw;
  height: auto;
  max-height: 80vh;
  background: white;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  overflow-y: auto; /* Permite scroll interno se houver muitas imagens */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.preview-window.active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Grid para organizar as múltiplas imagens lado a lado ou em grade */
.preview-content {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

/* Estilização aplicada a cada imagem gerada via JS */
.preview-content img {
  width: calc(
    50% - 6px
  ); /* Duas imagens por linha. Ajuste conforme necessário */
  height: auto;
  min-width: 140px;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: block;
}
