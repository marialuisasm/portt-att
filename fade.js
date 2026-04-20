const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // ativa quando 20% do elemento aparece
});

document.querySelectorAll('.fade').forEach(el => {
  observer.observe(el);
});
