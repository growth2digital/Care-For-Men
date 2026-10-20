document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    const header = document.querySelector('.header');

    if (mobileMenuBtn && navMenu && header) {
        const spans = mobileMenuBtn.querySelectorAll('span');

        const setIcon = (open) => {
            if (open) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        };

        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = header.classList.toggle('menu-open');
            setIcon(isOpen);
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('menu-open');
                setIcon(false);
            });
        });
    }

    // Hero video: play/pause + lightbox
    const heroVideo = document.getElementById('heroVideo');
    const videoCard = document.querySelector('.hero-video-card');
    const playBtn = document.getElementById('videoPlayBtn');
    const expandBtn = document.getElementById('videoExpandBtn');
    const lightbox = document.getElementById('videoLightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const lightboxClose = document.getElementById('videoLightboxClose');
    const lightboxBackdrop = document.getElementById('videoLightboxBackdrop');

    if (heroVideo && playBtn && videoCard) {
        const syncState = () => {
            videoCard.classList.toggle('playing', !heroVideo.paused);
            playBtn.setAttribute('aria-label', heroVideo.paused ? 'Reproduzir vídeo' : 'Pausar vídeo');
        };
        playBtn.addEventListener('click', () => {
            if (heroVideo.paused) { heroVideo.play(); } else { heroVideo.pause(); }
        });
        heroVideo.addEventListener('click', () => {
            if (!heroVideo.paused) heroVideo.pause();
        });
        heroVideo.addEventListener('play', syncState);
        heroVideo.addEventListener('pause', syncState);

        // Garante autoplay mudo no preview (alguns navegadores exigem play() explícito)
        const startMutedPlayback = () => {
            heroVideo.muted = true;
            const attempt = heroVideo.play();
            if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
        };
        startMutedPlayback();
        syncState();
    }

    if (expandBtn && lightbox && lightboxVideo) {
        const openLightbox = () => {
            if (heroVideo && !heroVideo.paused) heroVideo.pause();
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
            lightboxVideo.currentTime = heroVideo ? heroVideo.currentTime : 0;
            lightboxVideo.play();
        };
        const closeLightbox = () => {
            lightbox.classList.remove('open');
            document.body.style.overflow = '';
            lightboxVideo.pause();
        };
        expandBtn.addEventListener('click', openLightbox);
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
        });
    }

    // Accordion FAQ
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close other open items
            const currentlyActive = document.querySelector('.accordion-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
            }

            // Toggle current item
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
