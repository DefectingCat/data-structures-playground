import MyStack from "./Stack";

const isPalindrome = (word: string) => {
    const stack = new MyStack();

    stack.push(word.split(""));

    let rword = "";
    while (stack.length > 0) {
        rword += stack.pop();
    }

    return word === rword;
};

console.log(isPalindrome("xfy"));
console.log(isPalindrome("dad"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("1001"));
