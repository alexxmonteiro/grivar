const roll = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const choose = (min, max) =>
    Math.floor(Math.random() * max) + min;

const hat = (min, max) =>
    Math.floor(Math.random() * max) + min;

export const d6 = () => roll(1, 6);
export const mapSelect = choose(1, 3);
export const haT = () => hat(1, 2);