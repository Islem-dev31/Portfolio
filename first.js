document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('navbarNav');
    const navbar = document.querySelector('.navbar');
    
    // Gestion des clics sur les liens
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                // Fermer le menu après un court délai
                setTimeout(() => {
                    new bootstrap.Collapse(menu).hide();
                }, 800);

                // Scroll doux vers la cible
                const targetId = this.getAttribute('href');
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start' 
                        });
                    }
                }
            }
        });
    });

    // Bloquer le scroll quand le menu est ouvert
    menu.addEventListener('show.bs.collapse', () => {
        document.body.style.overflow = 'hidden';
    });

    menu.addEventListener('hide.bs.collapse', () => {
        document.body.style.overflow = '';
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("navbarNav");
    const navbar = document.querySelector(".navbar");
    let lastScroll = window.pageYOffset;   // <- position de départ
    const HIDE_THRESHOLD = 100;
  
    // (bootstrap Collapse pour le menu mobile reste inchangé…)
  
    window.addEventListener(
      "scroll",
      () => {
        const currentScroll = window.pageYOffset;
  
        // Toujours visible tout en haut
        if (currentScroll < 10) {
          navbar.classList.remove("navbar--hidden");
          lastScroll = currentScroll;
          return;
        }
  
        // Descend + dépasse le seuil -> cache
        if (currentScroll > lastScroll && currentScroll > HIDE_THRESHOLD) {
          navbar.classList.add("navbar--hidden");
        }
        // Remonte (même 1px) -> réaffiche
        else if (currentScroll < lastScroll) {
          navbar.classList.remove("navbar--hidden");
        }
  
        lastScroll = currentScroll;
      },
      { passive: true }
    );
  });
  
  
