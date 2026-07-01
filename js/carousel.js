new Glide(".glide", {
  type: "carousel",
  perView: 3,
  perMove: 1,
  autoplay: 3000,
  hoverpause: true,
  animationDuration: 800,
  gap: 16,

  breakpoints: {
    1024: { perView: 2 },
    640: { perView: 1 },
  },
}).mount();

// Lógica modificada: Ativação no Click e fechamento no Mouseleave
const slides = document.querySelectorAll(".glide__slide");
const previewWindow = document.getElementById("preview-window");
const previewContent = document.getElementById("preview-content");

slides.forEach((slide) => {
  // Alterado de 'mouseenter' para 'click'
  slide.addEventListener("click", (e) => {
    // Evita comportamentos padrão caso o slide fosse um link
    e.preventDefault();

    const rawData = slide.getAttribute("data-preview");

    if (rawData) {
      previewContent.innerHTML = "";
      const imagesArray = rawData.split(",");

      imagesArray.forEach((srcString) => {
        const imgElement = document.createElement("img");
        imgElement.src = srcString.trim();
        imgElement.alt = "Preview Item";
        previewContent.appendChild(imgElement);
      });

      previewWindow.classList.add("active");
    }
  });

  // Mantido para fechar quando o mouse sair do slide
  slide.addEventListener("mouseleave", () => {
    previewWindow.classList.remove("active");
    setTimeout(() => {
      if (!previewWindow.classList.contains("active")) {
        previewContent.innerHTML = "";
      }
    }, 300);
  });
}); 
