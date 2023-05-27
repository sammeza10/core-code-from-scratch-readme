# Encrypt this!

### Kata 🥋

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.

You need to encrypt each word in the message using the following rules:

The first letter must be converted to its ASCII code.

The second letter must be switched with the last letter

Keepin' it simple: There are no special characters in the input.

Examples:

    encryptThis("Hello") === "72olle"
    encryptThis("good") === "103doo"
    encryptThis("hello world") === "104olle 119drlo"

Answer

    function encrypt(word) {
        if (word.length === 1) return word.charCodeAt(0);
            const charBackup = word[1];
            word = word.replace(word[0], word.charCodeAt(0));
            word = word.replace(charBackup, word[word.length - 1]);
            word = word.replace(/\w$/, charBackup);
            return word;
    }

    var encryptThis = function (text) {
        const textArray = text.split(' ');
        let result = '';
        textArray.forEach((w) => {
            result = result + ' ' + encrypt(w);
        });
        return result.trim();
    };
