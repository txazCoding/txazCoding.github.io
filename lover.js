let index = 0,
    interval = 1000;

const rand = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min;

for(const star of document.getElementsByClassName("magic-star")) {
    setInterval(() => {
        star.computedStyleMap.setProperty("--star-left", `${rand(-10, 100)}%`);
        star.computedStyleMap.setProperty("--star-left", `${rand(-40, 80)}%`);
    }, 1000);

star.computedStyleMap.animation ="none";
star.offsetHeight;
star.computedStyleMap.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        AnimationEffect(star);
        
        setInterval(() => AnimationEffect(star), 1000);
    }, index++ * (interval / 3))
}

