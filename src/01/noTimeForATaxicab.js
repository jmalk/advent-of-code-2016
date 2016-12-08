module.exports = function (instructions) {
  const CARDINAL_DIRECTIONS = ['North', 'East', 'South', 'West']
  var orientation = CARDINAL_DIRECTIONS[0]
  var x = 0
  var y = 0

  instructions.split(', ').map((str) => {
    return [str.substring(0, 1), Number(str.substring(1))]
  }).forEach(changeDirectionThenWalk)

  function changeDirectionThenWalk (arr) {
    changeDirection(arr[0])
    walk(arr[1])
  }

  function changeDirection(letter) {
    if (letter === 'R') {
      orientation = CARDINAL_DIRECTIONS[(CARDINAL_DIRECTIONS.indexOf(orientation) + 1) % 4]
    } else if (letter === 'L') {
      orientation = CARDINAL_DIRECTIONS[(CARDINAL_DIRECTIONS.indexOf(orientation) - 1) % 4]
    }
  }

  function walk (number) {
    if (orientation === 'North') {
      y = y + number
    } else if (orientation === 'East') {
      x = x + number
    } else if (orientation === 'South') {
      y = y - number
    } else if (orientation === 'West') {
      x = x - number
    } else {
      console.log('Invalid orientation')
    }
  }

  return Math.abs(x) + Math.abs(y)
}
