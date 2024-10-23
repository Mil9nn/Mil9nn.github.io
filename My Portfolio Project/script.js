        const carousel = document.querySelector('.carousel');
        const prevButton = document.querySelector('.prev-btn');
        const nextButton = document.querySelector('.next-btn');
      
        let currentIndex = 0;
        const totalItems = document.querySelectorAll('.carousel-item').length;
      
        // Move to the next image
        nextButton.addEventListener('click', () => {
          if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarousel();
          }
        });
      
        // Move to the previous image
        prevButton.addEventListener('click', () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
          }
        });
      
        // Update carousel position
        function updateCarousel() {
          const width = document.querySelector('.carousel-item').offsetWidth;
          carousel.style.transform = `translateX(-${currentIndex * width}px)`;
        }
      
        // Adjust carousel position when the window is resized
        window.addEventListener('resize', updateCarousel);