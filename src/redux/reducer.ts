const defaultState = {
  count: 0,
  list: [1,2]
}
// 注意：reducer 中也不能直接修改 state 的值，state 的值只能通过 dispatch 触发 action 修改！！！！
// 使用 Object.assign 进行拷贝复制 去解决
// 或者 使用ES6拓展运算符…对store进行浅拷贝
const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { count: state.count + action.num});
    case 'SUBTRACT': 
      return Object.assign({}, state, { count: state.count - action.num});
    case 'MULTIPLY': 
      return Object.assign({}, state, { count: state.count * state.count});
    default:
      return state;
  }
}
export default reducer;