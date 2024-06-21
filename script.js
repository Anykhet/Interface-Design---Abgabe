document.addEventListener('DOMContentLoaded', () => {
    //Audio Dateien in Variablen
    const sounds = {
        'Space': '/sounds/sound-space.mp3',
        'ArrowUp': '/sounds/sound-up.mp3',
        'ArrowRight': '/sounds/sound-right.mp3',
        'ArrowLeft': '/sounds/sound-left.mp3'
    };
    //Visualizer Website 
    const visualizer = document.getElementById('visualizer');
    let audio = null;
    let isPlaying = false;
    //Variabel für Abspielen des Sounds durch die Berührung
    const playSound = (soundKey) => {
        if (!isPlaying) {
            audio = new Audio(sounds[soundKey]);
            audio.play();
            isPlaying = true;
            visualizer.classList.add('playing');
        }
    };
    //Variabel fürs Stoppen wenn nichts berührt wird
    const stopSound = () => {
        if (isPlaying && audio) {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
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
//# sourceMappingURL=script.js.map