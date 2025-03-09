document.addEventListener('DOMContentLoaded', () => {
    // List of words to cycle through
    const words = [
        'humans',
        'software',
        '🏝️⚽️🥊',
        'knowledge about knowledge',
        'evolution',
        '💆🏼‍♂️💻⛷️',
        'making AI the new UI',
        '🏈🌅🪩💎',
        'incubating crazy ideas',
        'love'
    ];

    const wordFilterElement = document.getElementById('word-filter');
    let currentIndex = 0;
    let isAnimating = true; // Flag to track if animation is running

    // Function to update the displayed word with animation
    function updateWord() {
        // Remove the current word with a fade out
        wordFilterElement.style.opacity = '0';
        wordFilterElement.style.transform = 'translateY(10px)';
        
        // After the fade out, update the word and fade in
        setTimeout(() => {
            wordFilterElement.textContent = words[currentIndex];
            wordFilterElement.style.opacity = '1';
            wordFilterElement.style.transform = 'translateY(0)';
            
            // Move to the next word, loop back to the beginning if at the end
            currentIndex = (currentIndex + 1) % words.length;
        }, 500);
    }

    // Set initial word
    wordFilterElement.textContent = words[0];
    
    // Change word every 2 seconds (including animation time)
    let wordInterval = setInterval(updateWord, 2000);

    // Interactive element functionality
    const interactiveElement = document.querySelector('.interactive-element');
    
    interactiveElement.addEventListener('click', () => {
        // Toggle animation state
        isAnimating = !isAnimating;
        
        if (isAnimating) {
            // Resume animation
            wordInterval = setInterval(updateWord, 2000);
            interactiveElement.querySelector('p').textContent = 'Pause interests';
        } else {
            // Pause animation
            clearInterval(wordInterval);
            interactiveElement.querySelector('p').textContent = 'Resume interests';
        }
    });

    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image-container');
    
    profileImage.addEventListener('mouseenter', () => {
        // Add a subtle animation when hovering over the image
        document.querySelector('.name').style.color = '#0066cc';
    });
    
    profileImage.addEventListener('mouseleave', () => {
        // Reset the animation when mouse leaves
        document.querySelector('.name').style.color = '#222';
    });

    // Simple theme toggle functionality
    let isDarkMode = false;
    
    // Double click on container to toggle theme
    document.querySelector('.container').addEventListener('dblclick', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #1a1a2e 100%)';
            document.querySelector('.container').style.backgroundColor = '#2d3436';
            document.querySelector('.container').style.color = '#f1f1f1';
            document.querySelector('.name').style.color = '#f1f1f1';
        } else {
            document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
            document.querySelector('.container').style.backgroundColor = 'white';
            document.querySelector('.container').style.color = '#333';
            document.querySelector('.name').style.color = '#222';
        }
    });
});