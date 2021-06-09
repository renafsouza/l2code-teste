let input = require('fs').readFileSync('/dev/stdin', 'utf8');

let tests = input.split('\n');

for(let i=2; i<tests.length; i+=2){
    let test = tests[i].split(" ").map(e=>parseInt(e)).sort((a,b)=>b-a);

    let optimalParkingCost = 0;

    for(let j=0; j<test.length; j++){
        optimalParkingCost += Math.abs(test[j] - test[(j+1)%test.length]);
    }
    console.log(optimalParkingCost);
}