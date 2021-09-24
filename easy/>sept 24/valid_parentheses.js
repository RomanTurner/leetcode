/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. 
*/

const isValid = (s) => {
  let legend = new Map();
  legend.set('{', '}');
  legend.set('(', ')');
  legend.set('[', ']');
  let b = [];
    for (let i = 0; i < s.length; i++) {
    if (legend.has(s.charAt(i))) {
      b.push(s.charAt(i));
    } else {
      let pop = b.pop();
      if (legend.get(pop) !== s.charAt(i)) {
        return false;
      }
    }
  }
  return b.length === 0;
};

const test = '{[()]}';
console.log(isValid(test));
