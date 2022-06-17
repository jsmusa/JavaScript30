window.addEventListener("keydown",playAudio);

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
    window.addEventListener("transitionend",() => key.classList.remove("playing"));
}
