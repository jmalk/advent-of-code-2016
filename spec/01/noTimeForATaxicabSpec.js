var rectilinearDistanceFromOrigin = require('../../src/01/rectilinearDistanceCalculator')
var distanceToFirstCrossedPath = require('../../src/01/distanceToFirstCrossedPath')

describe('Rectilinear distance calculator', function () {
  it('Takes a set of instructions and tells you how far they will take you from your location', function () {
    var instructions = 'R2, L3'
    var distance = rectilinearDistanceFromOrigin(instructions)
    expect(distance).toBe(5)

    instructions = 'R2, R2, R2'
    distance = rectilinearDistanceFromOrigin(instructions)
    expect(distance).toBe(2)

    instructions = 'L2'
    distance = rectilinearDistanceFromOrigin(instructions)
    expect(distance).toBe(2)
  })
})

describe('Path cross detector', function () {
  it('Finds the first point at which you cross your path', function () {
    var instructions = 'R8, R4, R4, R8'
    var distance = distanceToFirstCrossedPath(instructions)
    expect(distance).toBe(4)
  })
})
