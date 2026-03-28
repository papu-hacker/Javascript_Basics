// Immediately Invoked Function Expressions (IIFE)

// Q: run 2 iife in one file
// A: allwaz end iife with semi-colen `;`

(function chai() {
    // yur code    
}) (); // semi-colen is complesorry; bcz next func will not exec 

((name) => {
    console.log(name);
}) ("papu");

// samapan