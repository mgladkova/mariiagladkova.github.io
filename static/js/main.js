document.querySelectorAll(".pub__thumb--video video").forEach((video) => {
  const thumb = video.closest(".pub__thumb--video");
  thumb.addEventListener("mouseenter", () => {
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch((err) => console.warn("video play() failed:", err));
    }
  });
  thumb.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
