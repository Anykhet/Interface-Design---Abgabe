//TS anders, weil nur Änderungen bei JS gemacht wurden. 


document.addEventListener('DOMContentLoaded', () => {
    const sounds = {
        'Space': '/sounds/sound-space.mp3',
        'ArrowUp': '/sounds/sound-up.mp3',
        'ArrowRight': '/sounds/sound-right.mp3',
        'ArrowLeft': '/sounds/sound-left.mp3'
    };

    const visualizer = document.getElementById('visualizer')!;
    let audio: HTMLAudioElement | null = null;
    let isPlaying = false;

    const playSound = (soundKey: string) => {
        if (!isPlaying) {
            audio = new Audio(sounds[soundKey]);
            audio.play();
            isPlaying = true;
            visualizer.classList.add('playing');
        }
    };

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