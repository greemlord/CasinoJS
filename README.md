# CasinoJS - The Big Picture
----------------------------

The first approach to code development is to **draw the simplest possible schema** of the problem that we are about to solve.

> The focus is on the big picture, not on details!

You can use whatever schema language you want, I personally use an hybrid schema language that just borrow concepts here and there.

Here is a schematic representation of the CasinoJS game from the highest possible point of view:

[The Big Picture](./001-the-big-picture.jpg)

There are any UI details, there are no rules, we don't even talk on what games we need into the casino... 

## We don't need such details now!

What we really care to represent and understand **before to code** is the story that our code needs to tell:

> a user enter the CasinoJS and `create a wallet` so the user 
> can `start to play`.
> 
> the user `chooses which game` to play `untill there are money` 
> in the wallet.
>
> the user can leave the casino instead of choosing a game.

In order to code this story into a fully functional program we don't need to deal with implementation details.

## We use functions to shift responsibilities!

Say that we want to create the wallet, this part of the application requires user interaction and data validation... it's way too complicated so far!

But **what we really need it's just the outcome** of such operation: a damn wallet!

So then we can give a name to the problem and hard-code a shortcut solution to it:

    function createWallet() {
      return 50; // just an hard coded wallet!
    }
    
In future this function will change to contain way more code, fulfilling the user interaction and so on... **but today we just enjoy it as a fake!**