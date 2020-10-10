window.addEventListener("keydown", playSound)

function playSound(e) {
  // console.log("Hello, world!");
  //console.log(e)
  //console.log(e.keyCode)
  //console.log(`audio[data-key="${e.keyCode}"]`)
  const audio = document.querySelector (`audio[data-key="${e.keyCode}"]`);
  //console.log(audio)
  audio.currentTime = 0;
  audio.play()

  const piano = document.querySelector(".piano");
  //console.log(piano);
  piano.classList.add("glow");
  //console.log(piano.classList);

  piano.addEventListener("transitionend",removeGlow)
}

function removeGlow(e) {
  console.log(e);
  if (e.propertyName == "transform") {
    console.log(e);
    console.log(this);
    this.classList.remove("glow");
    console.log(this);
  }
}