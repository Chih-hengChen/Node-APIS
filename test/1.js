// async function foo() { 
//     let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3)); 
//     console.log("before await");
//     console.log(await p); 
//     console.log("after await");
//    } 
// foo();

async function foo() { 
    console.log(await Promise.resolve('foo')); 
   } 
   async function bar() { 
    console.log(await 'bar'); 
   } 
   async function baz() { 
    console.log('baz'); 
   } 
   foo(); 
   bar(); 
   baz(); 