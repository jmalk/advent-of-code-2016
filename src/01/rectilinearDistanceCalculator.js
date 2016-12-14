module.exports = function (instructions) {
  var orientation = 0
  var x = 0
  var y = 0

  instructions.split(', ').map((str) => {
    return [str.substring(0, 1), Number(str.substring(1))]
  }).forEach(changeDirectionThenWalk)

  function changeDirectionThenWalk (arr) {
    changeDirection(arr[0])
    walk(arr[1])
  }

  function changeDirection (letter) {
    if (letter === 'R') {
      orientation = (orientation + 1) % 4
    } else if (letter === 'L') {
      orientation = (orientation + 3) % 4
    }
  }

  function walk (number) {
    if (orientation === 0) {
      y = y + number
    } else if (orientation === 1) {
      x = x + number
    } else if (orientation === 2) {
      y = y - number
    } else if (orientation === 3) {
      x = x - number
    } else {
      console.log('Invalid orientation')
    }
  }

  return Math.abs(x) + Math.abs(y)
}
