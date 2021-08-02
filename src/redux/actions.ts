const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const addAction = (n: number) => {
  return {
    type: ADD,
    num: n
  }
}
const subtractAction = (n: number) => {
  return {
    type: SUBTRACT,
    num: n
  }
}
const multiplyAction = (n: number) => {
  return {
    type: MULTIPLY,
    num: 1
  }
}
export {
  addAction, subtractAction, multiplyAction
}