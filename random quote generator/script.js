let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = [
   '"Its not a bug its an undocumented feature." ― Anonymous',
   '"Programming is the art of algorithm design and the craft of debugging errant code." – Ellen Ullman',
   '"Confusion is part of programming." ― Felienne Hermans',
   '"Everybody should learn to program a computer because it teaches you how to think." – Steve Jobs',
   '"Programmer: A machine that turns coffee into code." – Anonymous',
   '"When I wrote this code, only God and I understood what I did. Now only God knows."  – Anonymous',
   '"Talk is cheap. Show me the code." ― Linus Torvalds',
   '"Computers are fast; developers keep them slow". – Anonymous',
   "'There is always one more bug to fix.'  – Ellen Ullman",
   '"I’m not a great programmer; I’m just a good programmer with great habits." ― Kent Beck'
]
btn.addEventListener('click',function(){
    var randomQuote = quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML = randomQuote;
})