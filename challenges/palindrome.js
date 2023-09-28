const palindrome = (str) => {
    const isPalindrome = str.toLowerCase() == str.toLowerCase().split('').reverse().join("")
    if(isPalindrome){
        console.log(`The word, ${str}, is a palindrome`)
    }else{
        console.log(`The word, ${str}, is not a palindrome`)
    }
};


const strs = ["racecar", "eye", "eyes", "hannah"]

for (i in strs){
    palindrome(strs[i])
}