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
