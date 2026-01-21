const audio = document.getElementById("audio");

// allow browser permission on first click anywhere
document.addEventListener("click", () => {
  audio.load();
}, { once: true });

const tl = new TimelineMax();

tl.to(".one", 0.8, { opacity: 1, y: 0 })
  .to(".two", 0.6, { opacity: 1, y: 0 })
  .to(".three", 0.6, { opacity: 1 })
  .to(".four", 0.6, { scale: 1 })
  .to(".idea-1", 0.6, { opacity: 1, y: 0 })
  .to(".idea-2", 0.6, { opacity: 1, y: 0 })
  .to(".idea-3", 0.6, { opacity: 1, y: 0 })
  .to(".idea-4", 0.6, { opacity: 1, y: 0 })
  .to(".idea-5", 0.6, { opacity: 1, y: 0 })

  // 🔥 MUSIC STARTS EXACTLY HERE 🔥
  .to(".idea-6 span", 0.5, {
    opacity: 1,
    y: -20,
    stagger: 0.2,
    onStart: () => {
      audio.volume = 1;
      audio.play().catch(() => {});
    }
  })

  .to(".six", 0.8, { opacity: 1, scale: 1 })
  .to(".seven", 0.8, { opacity: 1 })
  .to(".eight", 0.8, { opacity: 1 });
