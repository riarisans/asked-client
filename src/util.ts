const STRING_SOURCE = "1234567890qwertyuiopasdfghjklzxcvbnm";

export function getRandomString(len: number) {
    let result = "";

    for (let i = 0; i < len; i++) {
        result += STRING_SOURCE[random(0, STRING_SOURCE.length)];
    }
    return result;
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
