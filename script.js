document.addEventListener('DOMContentLoaded', () => {
    const sounds = {
        'Space': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-space.mp3',
        'ArrowUp': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-up.mp3',
        'ArrowRight': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-right.mp3',
        'ArrowLeft': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-left.mp3'
    };

    const visualizer = document.getElementById('visualizer');
    let currentAudio = null;

    const playSound = (soundKey) => {
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(sounds[soundKey]);
        currentAudio.play().then(() => {
            visualizer.classList.add('playing');
        }).catch(error => {
            console.log('Error playing audio:', error);
        });
    };

    const stopSound = () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            visualizer.classList.remove('playing');
        }
    };

    document.addEventListener('keydown', (event) => {
        const key = event.code;
        if (key in sounds) {
            playSound(key);
        }
    });

    document.addEventListener('keyup', (event) => {
        const key = event.code;
        if (key in sounds) {
            stopSound();
        }
    });
});