const generatedSentence = document.getElementById('generated_sentence');
const generateBtn = document.getElementById('generate_btn');

const nouns = ['heart', 'rainbow', 'ocean', 'flower', 'sun'];
const adjectives = ['beautiful', 'bold', 'graceful', 'shining', 'excited'];
const verbs = ['see', 'discover', 'notice', 'admire', 'observe'];

function generateRandomSentence() {
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];

    const sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`;
    return sentence;
}

generateBtn.addEventListener('click', () => {
    generatedSentence.textContent = generateRandomSentence();
});

generatedSentence.textContent = generateRandomSentence();

