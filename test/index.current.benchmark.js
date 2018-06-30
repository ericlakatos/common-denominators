const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const testCaseFew = require('./cases/few');
const testCaseMany = require('./cases/many');
const commonDenominators = require('../src/index.min');

suite
    .add('Working Release: Few', function() {
        commonDenominators(...testCaseFew);
    })
    .add('Working Release: Many', function() {
        commonDenominators(...testCaseMany);
    })
    .on('cycle', function(event) {
        console.info('\x1b[33m%s\x1b[0m', String(event.target));
    })
    .run({ async: true });