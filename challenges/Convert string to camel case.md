# Convert string to camel case

### Kata 🥋

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

    "the-stealth-warrior" gets converted to "theStealthWarrior"

    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

    "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


Answer

    function toCamelCase(str){
        return str
        .replace(/-/g, "_")
        .split("_")
        .map((word,i) => i > 0 ? word.toUpperCase()[0] + word.substr(1) : word)
        .join("");
    }
