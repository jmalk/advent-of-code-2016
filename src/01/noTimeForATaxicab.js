var fs = require('fs')
var path = require('path')
var rectilinearDistanceCalculator = require('./rectilinearDistanceCalculator')

var answer = rectilinearDistanceCalculator(fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8'))

console.log('Day 1, part 1:', answer)
