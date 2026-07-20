const roll = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

const choose = (min, max) =>
    Math.floor(Math.random() * max) + min;

const hat = (min, max) =>
    Math.floor(Math.random() * max) + min;

export const d10 = () => roll(1, 10);
export const d6 = () => roll(1, 6);
export const d5 = () => roll(1, 5);
export const d4 = () => roll(1, 4);
export const d3 = () => roll(1, 3);
export const mapSelect = () => choose(1, 3);
export const haT = () => hat(1, 2);
