// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return '';
//   let prefix = strs[0];
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) != 0) {
//         prefix = prefix.substring(0, prefix.length - 1);
//         console.log(prefix);
//         console.log(strs[i].indexOf(prefix));
//       if (!prefix) return '';
//     }
//   }
//   return prefix;
// };

var longestCommonPrefix = function (strs) {
  return recurse(strs, 0, '');
};

const recurse = (strs, charIdx, res) => {
  let char = null;
  for (let wordIdx = 0; wordIdx < strs.length; wordIdx++) {
    if (charIdx > strs[wordIdx].length - 1) return res;
    if (wordIdx === 0) char = strs[wordIdx][charIdx];
    if (strs[wordIdx][charIdx] !== char) return res;
  }
  return recurse(strs, charIdx + 1, res + char);
};

let test = ['flower', 'flower', 'flight', 'flooooo', 'flow'];

console.log(longestCommonPrefix(test)); 




