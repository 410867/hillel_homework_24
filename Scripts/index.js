const img = document.querySelector('img');

const renderImage  = () => {
    img.src = `Images/${randomizer(1, 9)}.png`
}

const randomizer = (from, to) => {
    return Math.floor(from + Math.random() * (to + 1 - from));
};

setInterval(renderImage, 1500);