# CasinoJS - Modules
--------------------

> Big files with hundreds of lines of code ad just annoyng to work with.  
> You seriously want to avoid such situation!

A web page can link to many Javascript files and all those files will share the same scope, the `window` scope.

That's basically mean that if you define a function into `a.js` then you can use that function from `b.js`. The same with variables.

**You can exploit this behavior to simplify your application code base**.

The simplest approach ever is just to move some functions which share the same objective into a file named after the objective itself.

In our application we have 2 functions that deal with the user's wallet:

- `createTheWallet()`
- `userCanPlay(wallet)`

Then we move those two functions into a dedicated Javascript file named `modules/casino-wallet.js`.

## Yes, it's that easy!

A classi web application is made by many many modules, sometimes there are hundreds of modules involved to make an application to work!

It is a global agreement to divide modules in two big families:

- application related modules
- framework or utilities modules

The first family is made of stuff that are strictly related within the current application.

The _framework_ family is more about files that you just copy and paste into many many projects without apply any change.

Those files are normally stored into a `libs/` folder.

The most famous library file around the web is `jquery.js` which is used by a huge number of websites and applications.