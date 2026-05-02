/**
 * SLIDE ENGINE v1.0
 * Criador de Slides HTML - WDK Skills
 */

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('slides-container');
    const slides = document.querySelectorAll('.slide');
    const progressBar = document.getElementById('progress-bar');
    const counter = document.getElementById('slide-counter');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    let currentSlide = 0;
    const totalSlides = slides.length;
    let isAnimating = false;

    function updateUI() {
        // Slide Transition
        slidesContainer.style.transform = `translateY(-${currentSlide * 100}vh)`;
        
        // Update Active Class
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        // Progress Bar
        if (progressBar) {
            const progress = ((currentSlide + 1) / totalSlides) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // Counter
        if (counter) {
            counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }

        // Nav Buttons
        if (btnPrev) btnPrev.disabled = currentSlide === 0;
        if (btnNext) btnNext.disabled = currentSlide === totalSlides - 1;

        // Reset Animation Lock
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }

    function goNext() {
        if (isAnimating) return;
        if (currentSlide < totalSlides - 1) {
            isAnimating = true;
            currentSlide++;
            updateUI();
        }
    }

    function goPrev() {
        if (isAnimating) return;
        if (currentSlide > 0) {
            isAnimating = true;
            currentSlide--;
            updateUI();
        }
    }

    function goFirst() {
        isAnimating = true;
        currentSlide = 0;
        updateUI();
    }

    function goLast() {
        isAnimating = true;
        currentSlide = totalSlides - 1;
        updateUI();
    }

    // Button Events
    if (btnNext) {
        btnNext.addEventListener('click', goNext);
        btnNext.addEventListener('dblclick', (e) => { e.preventDefault(); goLast(); });
    }
    if (btnPrev) {
        btnPrev.addEventListener('click', goPrev);
        btnPrev.addEventListener('dblclick', (e) => { e.preventDefault(); goFirst(); });
    }

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault(); goNext();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault(); goPrev();
        }
    });

    // Mouse Wheel
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) goNext();
        else if (e.deltaY < 0) goPrev();
    }, { passive: true });

    // Initial Load
    updateUI();
});
