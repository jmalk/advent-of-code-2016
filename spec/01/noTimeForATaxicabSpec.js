var rectilinearDistanceFromOrigin = require('../../src/01/noTimeForATaxicab')

describe('Rectilinear distance calculator', function () {
  it('Takes a set of instructions and tells you how far they will take you from your location', function () {
    var instructions = 'R2, L3'
    var distance = rectilinearDistanceFromOrigin(instructions)
    expect(distance).toBe(5)
  })
})
