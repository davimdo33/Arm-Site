const items = document.querySelectorAll('.historia-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Se quiser que só anime 1 vez:
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // 30% do elemento visível

    items.forEach(item => observer.observe(item));


const photo = document.querySelectorAll('.imagem-de-fundo');

const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // faz animar só una vez a image:
            photoObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // 20% do elemento visível na minha telinha

photo.forEach(img => photoObserver.observe(img));

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

