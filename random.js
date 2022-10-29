function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i <= 10; i++) {
    console.log(getRandomIntInclusive(1, 9))
}