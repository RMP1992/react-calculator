Created an calculator using react.
I learned how turn string to numbers with parseInt.
Got to practice more with classes and functions.
Learned how to change the states and how to refer to the states inside a function.
More practice with props
12/02/2020

When updating the states it must always be for inside the setState.

I was getting some bugs where the values assigned to the state currentNumber was coming up as not a number (NaN).

I fixed the issue by adding this.setState({currentNumber: parseInt(this.state.input)}) to functions that were assigning values to the states.