export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

/*
const root = document.getElementById('root');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.5 });

observer.observe(root);
*/