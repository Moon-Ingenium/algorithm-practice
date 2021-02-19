// past round may affect future round scores
// start empty
// string ops
// ops[i] is ith operation applied to score
// can be x - new score of x
// + new score which is sum of previous two scores, there will always be two previous
// "D" new score double the previous, guaranteed
// "C" invalidates and removes previous
// return sum of all scores

var calPoints = (ops) => {
    var sum = 0;
    var record = [];
    var mostRecent;

    if (!ops || !Array.isArray(ops)) return 0;
    // go through ops (forEach)
    ops.forEach((op) => {
        mostRecent = record[record.length - 1];
        if (Number(op)) {
            // if Number(ops[i]), add new num to record
            record.push(Number(op));
        } else if (op.toLowerCase() === 'd') {
            // if "D" double mostRecent d*2
            record.push(mostRecent * 2)
        } else if (op.toLowerCase() === 'c') {
            record.pop();
        } else if (op === '+') {
            // if "+" take two most recent and add result to record
            var sum = mostRecent + record[record.length - 2];
            record.push(sum)
        }
    });
    // reduce record to sum (a + b)
    sum = record.reduce((a,b) => {
        return a + b
    }, 0);
    return sum;
}
// 5 , 10, 15

var ops = calPoints(["5","2","C","D","+"]);
console.log(ops);