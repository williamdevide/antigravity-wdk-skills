document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('slides-container');
    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const counterDisplay = document.getElementById('slide-counter');
    const progressBar = document.getElementById('progress-bar');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let isAnimating = false;

    // Initialization
    if (slides.length > 0) {
        updateUI();
    }

    function updateUI() {
        // Move the container
        slidesContainer.style.transform = `translateY(-${currentSlide * 100}vh)`;
        
        // Update active class for animations
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update counter
        if (counterDisplay) {
            counterDisplay.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }

        // Update progress bar
        if (progressBar) {
            const progress = ((currentSlide) / (totalSlides - 1)) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // Update button states
        if (btnPrev && btnNext) {
            btnPrev.disabled = currentSlide === 0;
            
            if (currentSlide === totalSlides - 1) {
                btnNext.innerHTML = '&#10003;'; // checkmark
                btnNext.classList.remove('btn-pulse');
            } else {
                btnNext.innerHTML = '&#8594;'; // arrow right
                if(currentSlide === 0) {
                    btnNext.classList.add('btn-pulse');
                } else {
                    btnNext.classList.remove('btn-pulse');
                }
            }
        }
        
        // Unlock animation lock
        setTimeout(() => {
            isAnimating = false;
        }, 600); // matches CSS transition duration
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

    // Event Listeners for Buttons
    if (btnNext) {
        btnNext.addEventListener('click', goNext);
        btnNext.addEventListener('dblclick', (e) => {
            e.preventDefault();
            goLast();
        });
    }
    if (btnPrev) {
        btnPrev.addEventListener('click', goPrev);
        btnPrev.addEventListener('dblclick', (e) => {
            e.preventDefault();
            goFirst();
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            goNext();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            goPrev();
        }
    });

    // Mouse Wheel Navigation (with debounce/lock)
    document.addEventListener('wheel', (e) => {
        if (isAnimating) return;
        
        if (e.deltaY > 50) {
            goNext();
        } else if (e.deltaY < -50) {
            goPrev();
        }
    }, { passive: true });
});
