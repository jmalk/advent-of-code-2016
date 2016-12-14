var fs = require('fs')
var rectilinearDistanceCalculator = require('./rectilinearDistanceCalculator')

var answer = rectilinearDistanceCalculator(fs.readFileSync(__dirname + '/input.txt', 'utf-8'))

console.log('Day 1, part 1:', answer)
