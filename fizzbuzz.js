
function fizzBuzz(n) {
  let i;
  for (i = 1; i <= n; i++) {
    if (i % 15 == 0) console.log("FizzBuzz" + " ");
    else if (i % 3 == 0) console.log("Fizz" + " ");
    else if (i % 5 == 0) console.log("Buzz" + " ");
    else console.log(i + " ");
  }
}

function main(){
    const n= parseInt(readLine().trim(),10);
    
    fizzBuzz(n)
}

// const n=15;
// const result=fizzBuzz(n);
// console.log(result);