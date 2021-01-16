function howMany(sentence) {
    // Write your code here
    
    let c = 0;
    let sentenceArr = sentence.split(' ');
    for (let i = 0; i < sentenceArr.length; i++) {
        let word = sentenceArr[i].trim();
        if (valid(word) === true) {
            c++;
            // console.log(c, sentenceArr[i]);
          };
        //   console.log(c);
    }
    
    return c;

}

function valid(word) {
    if (isNumber(word) || !word.length) return false;
    
    const lastChar = word[word.length - 1];
    let hyphenated = false;
    let word1;
    let word2;
    let newWord = word;
    
    if (lastChar === '.' || lastChar === ',' || lastChar === '?' || lastChar === '!') {
        
        newWord = word.slice(0, word.length - 1);
        
        if (isHyphenated(newWord) === true) {
            hyphenated = true;
            
            let words = newWord.split('-');
            
            word1 = words[0];
            word2 = words[1];
        }
    }
    
    if (hyphenated === true) {
        // console.log(newWord);
        newWord = word1.concat(word2);
        for (let i = 0; i < newWord.length; i++) {
            const char = newWord[i];
            if (isLetter(char) === false) return false;
        }
    } else {
        // console.log(newWord);
        for (let i = 0; i < newWord.length; i++) {
            const char = newWord[i];
            if (isLetter(char) === false) return false;
        }
    }
    
    return true;
    
}

function isNumber(str) {
    if (!!Number(str)) return true;
    return false;
}

function isHyphenated(word) {
    return (word.split('-').length === 2);
}

function isLetter(char) {
    const alphaSmall = 'abcdefghijklmnopqrstuvwxyz'; // ['a','b','c',...]
    const alphaCap = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(); // ['A','B','C',...]
    const validAlpha = alphaSmall.concat(alphaCap).split('');
    
    const validLetters = new Set(validAlpha);
    
    // console.log(validLetters.has(char), char);
    return validLetters.has(char);
}

console.log(howMany(
  "jds dsaf lkdf kdsa fkl-dsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj."
));