# CasinoJS - Unit Testing
-------------------------

> Unit Testing is the action of **excute a little portion of 
> the application** with a well known input and 
> **expecting a well known output**.

[Read more about Unit Testing on Wikipedia](http://en.wikipedia.org/wiki/Unit_testing)

Let's say that you write the function `sum(a, b)` which should return `a + b`.

Then it's easy to say that **every time you call** that function given the input `1, 2` **you always expect** the result `3`.

> The very moment that the result change then it means 
> that the implementation of the function is broken!

## Write your tests


So then you can formalise what said above in a piece of code like this:

    expect(
      sum(1,2) === 3,                  // test - true/false
      "sum of 1 and 2 should give 3"   // meaningful message
    );
    
**If the test passes you don't need to see anything** because it is just the expected way for it to work, but **if the test fails then it's time to display the error message** in a red fashion way so you can take action on it.

## Execute your tests

The best moment to execute your tests is: **every time you load the page and before you run your application**.

With this approach as soon you introduce a bug in a piece of code which is under unit test you will see a red error message the next time you'll try to execute your project.

Even better is to establish a mechanism which with **to prevent the execution of the main project if any unit test fails**!