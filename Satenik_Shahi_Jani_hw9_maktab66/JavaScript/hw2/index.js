function StackCalc(input) {
  if (input.length == 0) {
    return "0";
  }
  let stack = input.split(" ");
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === /[a-zA-Z]/) {
      return "Invalid instruction:" + stack[i];
    }
    switch (stack[i]) {
      case "+":
        stack.splice(i - 2, 3, +stack[i - 1] + +stack[i - 2]);
        break;
      case "-":
        stack.splice(i - 2, 3, Math.abs(stack[i - 1] - stack[i - 2]));
        break;
      case "*":
        stack.splice(i - 2, 3, stack[i - 1] * stack[i - 2]);
        break;
      case "/":
        let result = 0;
        Math.abs(stack[i - 1]) > Math.abs(stack[i - 2])
          ? (result = stack[i - 1] / stack[i - 2])
          : (result = stack[i - 2] / stack[i - 1]);
        stack.splice(i - 2, 3, result);
        break;
      case "DUP":
        stack.splice(i, 1, stack[i - 1]);
        break;
      case "POP":
        stack.splice(i, 1);
        break;
      default:
        break;
    }
  }
  return stack.join("");
}
console.log(StackCalc("5 6 -"));
console.log(StackCalc(""));
console.log(StackCalc("3 DUP +"));
console.log(StackCalc("6 5 5 7 * - /"));
console.log(StackCalc("x y +"));
