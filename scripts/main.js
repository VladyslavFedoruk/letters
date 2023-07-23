function generateKey(length, character) {
    const lengthOFcharacters = character.length;
    const keyArr = Array.from({
        length
    }, () => character.charAt(Math.floor(Math.random() * lengthOFcharacters)));
    return keyArr.join('');
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);