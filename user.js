document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const popup = document.getElementById('result-popup');
    const resultTitle = document.getElementById('result-title');
    const resultImage = document.getElementById('result-image');
    const resultDescription = document.getElementById('result-description');
    const closePopup = document.getElementById('close-popup');

    const characters = {
        'Iron Man': {
            image: 'Images/Ironman/ironman2.png',
            description: 'You are a genius inventor with a big heart. Technology is your greatest weapon!',
        },
        'Thor': {
            image: 'Images/Thor/thor2.jpeg',
            description: 'You are a god of thunder, brave and honorable. You wield unmatched power!',
        },
        'Captain America': {
            image: 'Images/Captain America/captain-america-1.jpg',
            description: 'You stand for justice and freedom, always ready to protect the world!',
        },
        'Black Widow': {
            image: 'Images/news/bw.jpg',
            description: 'You are skilled, resourceful, and fiercely loyal to your allies.',
        },
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect answers
        const answers = {};
        new FormData(form).forEach((value, key) => {
            answers[key] = value;
        });

        // Tally results
        const scores = {};
        for (let key in answers) {
            const character = answers[key];
            scores[character] = (scores[character] || 0) + 1;
        }

        // Find the character with the highest score
        const result = Object.keys(scores).reduce((a, b) =>
            scores[a] > scores[b] ? a : b
        );

        // Display the result
        const character = characters[result];
        resultTitle.textContent = `You Are ${result}!`;
        resultImage.src = character.image;
        resultImage.alt = result;
        resultDescription.textContent = character.description;

        // Show the popup
        popup.classList.remove('hidden');
    });

    // Close the popup
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});