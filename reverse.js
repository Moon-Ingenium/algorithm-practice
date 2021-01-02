const message = [ 'q', 'u', 'e', 's','t','i','o','n',' ',
'n', 'a', 'i', 'l', 'e','d', ' ',
'y', 'o', 'u' ];

// function reverseWords(message){
// const wordOne= message.splice(0,8);
// const wordTwo = message.splice(9,15);
// const wordThree = message.splice(16,18);
// const partMessage = wordThree.join(wordTwo);
// const endMessage = wordOne.join(partMessage);
// console.log(endMessage, "END message");
// }
// reverseWords(message);

function reverseWords(message) {

    // First we reverse all the characters in the entire message
    reverseCharacters(message, 0, message.length - 1);
    // This gives us the right word order
    // but with each word backward

    // Now we'll make the words forward again
    // by reversing each word's characters

    // We hold the index of the *start* of the current word
    // as we look for the *end* of the current word
    let currentWordStartIndex = 0;
    for (let i = 0; i <= message.length; i++) {

        // Found the end of the current word!
        if (i === message.length || message[i] === ' ') {

        // If we haven't exhausted the string our
        // next word's start is one character ahead
        reverseCharacters(message, currentWordStartIndex, i - 1);
        currentWordStartIndex = i + 1;
        }
    }
}

    function reverseCharacters(message, leftIndex, rightIndex) {

    // Walk towards the middle, from both sides
    while (leftIndex < rightIndex) {

        // Swap the left char and right char
        const temp = message[leftIndex];
        message[leftIndex] = message[rightIndex];
        message[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
    }

    reverseWords(message);
// console.log(endMessage, "message");