const isPalindrome = (s) => {
    let filteredString = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    let left = 0;
    let right = filteredString.length - 1;
    while (left < right) {
        if (filteredString[left] !== filteredString[right]) return false;
        left++;
        right--;
    }
    return true;
}
let test = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(test));