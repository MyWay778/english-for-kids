const playSound = (soundSrc: string, callback?: () => void): void => {
  const audio = new Audio(soundSrc);
  audio.volume = 0.2;
  if (callback) {
    audio.addEventListener('ended', callback, { once: true });
  }
  audio.play();
};

export default  playSound;