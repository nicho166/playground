
  const dot = document.getElementById("dot");
  const container = document.getElementById("motion");

  const step = 2; // smaller step for smoother motion
  const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  };

  let pos = {
    x: parseInt(dot.style.left) || 0,
    y: parseInt(dot.style.top) || 0
  };

  document.addEventListener("keydown", (e) => {
    if (keys.hasOwnProperty(e.key)) {
      e.preventDefault(); // stop scroll
      keys[e.key] = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (keys.hasOwnProperty(e.key)) {
      keys[e.key] = false;
    }
  });

  function updatePosition() {
    const maxX = container.clientWidth - dot.offsetWidth;
    const maxY = container.clientHeight - dot.offsetHeight;

    if (keys.ArrowUp) {
      pos.y -= step;
      if (pos.y < 0) pos.y = 0;
    }
    if (keys.ArrowDown) {
      pos.y += step;
      if (pos.y > maxY) pos.y = maxY;
    }
    if (keys.ArrowLeft) {
      pos.x -= step;
      if (pos.x < 0) pos.x = 0;
    }
    if (keys.ArrowRight) {
      pos.x += step;
      if (pos.x > maxX) pos.x = maxX;
    }

    dot.style.top = pos.y + "px";
    dot.style.left = pos.x + "px";

    requestAnimationFrame(updatePosition);
  }

  // start the animation loop
  updatePosition();


