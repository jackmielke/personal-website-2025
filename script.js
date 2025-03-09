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
    setInterval(updateWord, 2000);
});