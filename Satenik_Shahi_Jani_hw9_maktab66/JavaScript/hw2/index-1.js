function StackCalc(input) {
    if (input.length == 0) {
      return "0";
    }
    let stackNum = input.split(" ").filter(Number);
    let stack = input.split(" ");
    let reg = /^[a-z]+$/;
    for (let i = 0; i < stack.length; i++) {
        if (reg.test(stack[i])) {
            return "Invalid instruction:" + stack[i];
          }
        }
        for (let i = 0; i < stack.length; i++) {
        switch (stack[i]) {
            case "+":
            stackNum.push(+stackNum.pop()+ +stackNum.pop());
              break;
            case "-":
                stackNum.push(Math.abs(stackNum.pop()-stackNum.pop()));
              break;
            case "*":
                stackNum.push(stackNum.pop()*stackNum.pop());
              break;
            case "/":
                if(Math.abs(stackNum[stackNum.length-1])>Math.abs(stackNum[stackNum.length-2])){
                    stackNum.push(stackNum.pop()/stackNum.pop());
                }else{
                    stackNum.push(stackNum.pop(stackNum.length-2)/stackNum.pop()); 
                }
              break;
            case "DUP":
                stackNum.push(stackNum[stackNum.length-1]);
              break;
            case "POP":
                stackNum.pop();
              break;
            default:
              break;
          }
        }
        return stackNum.join("");

}
console.log(StackCalc("5 6 -"));
console.log(StackCalc(""));
console.log(StackCalc("3 DUP +"));
console.log(StackCalc("6 5 5 7 * - /"));
console.log(StackCalc("x y +"));