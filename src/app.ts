window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound") as NodeListOf<HTMLAudioElement>;
    const pads = document.querySelectorAll(".pad") as NodeListOf<HTMLElement>;
    const tt = document.querySelectorAll("h3") as NodeListOf<HTMLElement>;

    document.addEventListener('keydown', e => {
        const key = e.key;
        const index = parseInt(key) - 1;

        if (!isNaN(index) && index >= 0 && index < sounds.length) {
            playSound(index);
            updateStyles(index, true);
        }
    });

    document.addEventListener('keyup', e => {
        const key = e.key;
        const index = parseInt(key) - 1;

        if (!isNaN(index) && index >= 0 && index < sounds.length) {
            updateStyles(index, false);
        }
    });

    function playSound(index: number) {
        const sound = sounds[index];
        sound.volume = 0.3;
        sound.currentTime = 0;
        sound.play();
    }

    function updateStyles(index: number, keyPressed: boolean) {
        const pad = pads[index];
        const title = tt[index];

        if (keyPressed) {
            pad.style.transform = "scale(1.05)";
            pad.style.borderRadius = "50%";
            title.style.fontSize = "2rem";
            title.style.color = "hsl(0, 0%, 86%)";
        } else {
            pad.style.transform = "scale(1)";
            pad.style.borderRadius = "0";
            title.style.fontSize = "1rem";
            title.style.color = "hsl(240, 41%, 8%)";
        }
    }

    (() => {
        function showMessage() {
            const overlayDiv = document.querySelector('.overlay') as HTMLElement;
            overlayDiv.innerHTML = (window.innerWidth <= 560)
                ? '<p>This webapp isn\'t meant for mobile devices.</p>'
                : '<p>This webapp isn\'t meant for tablet devices.</p>';
        };
        showMessage();
        window.addEventListener('resize', showMessage);
    })();
});