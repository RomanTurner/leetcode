const maxValue = 3;

class Variables {
    manipulateValue() {
        let j = 0;
    for (var i = 0; i < maxValue; i++) {
         j = i * i;
      console.log(j);
    }
    console.log(j);
  }
}

let x = new Variables();
x.manipulateValue(maxValue)