 let display = document.getElementById("display");
 
 function appendValue(val) {
 display.value += val;
 }
 
 function clearDisplay() {
 display.value = "";
 }
 
 function backspace() {
 display.value = display.value.slice(0, -1);
 }
 
 function calculate() {
 try {
 display.value = eval(display.value);
 } catch {
 display.value = "Error";
 }
 }
 
 // Bonus: Keyboard support
 document.addEventListener("keydown", function (e) {
 const key = e.key;
 
 if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
 appendValue(key);
 } else if (key === 'Enter') {
 e.preventDefault();
 calculate();
 } else if (key === 'Backspace') {
 backspace();
 } else if (key === 'Escape') {
 clearDisplay();
 }
 });
 