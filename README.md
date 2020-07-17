This is a basic calculator, made entirely in React.

It can calculate 4 basic mathematical operations, and it obeys all of the rules of these calculations (for example:
- number 0 cannot be entered multiple times without a decimal at the start of calculation;
- operators (with the exception of '-') cannot be entered at the start of calculation;
- you cannot enter a operator behind '-', but you can enter '-' behind other operators (except '--') to do calculations with negative numbers;
- when you press equal sign and you have an operator(s) (one or two) at the end of entered calculation (for example '78+15+',or '64-98x-'), it erases this operator(s), and gives you the result of previously entered calculation... etc, etc...

It has a Clear button (C), and backspace button which you can use to erase last values entered in calculation. It doesn't use eval() method for making calculations from given string, so it's done with pure Javascript functions for computing and calculating these final values.

You can use keyboard to enter values and do calculations. Clear is set on c key or Delete key, '=' is set on Enter key, backspace is set on Backspace key. :)
