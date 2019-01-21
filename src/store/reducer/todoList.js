import {
  ADD_TODO,
  CHECK_TODO,
  CLOSE_TODO,
  REPEAL_TODO
} from '../actionType'

let todoListData = {}

if (localStorage.todoListData) {
  todoListData = JSON.parse(localStorage.todoListData)
}

const initState = {
  doingList: todoListData.doingList || [],
  doneList: todoListData.doneList || []
}

export default function reducer (state = initState, action) {
  let doingList = [], doneList = []
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        doingList: state.doingList.concat(action.newTodo)
      }
    case CHECK_TODO:
      doingList = [...state.doingList]
      doneList = [...state.doneList].concat(doingList.splice(action.index, 1))
      return {
        ...state,
        doingList,
        doneList
      }
    case CLOSE_TODO:
      const { index: closeIndex, target } = action.payload
      if (target === 'doing') {
        return {
          ...state,
          doingList: state.doingList.filter((item, index) => index !== closeIndex)
        }
      } else if (target === 'done') {
        return {
          ...state,
          doneList: state.doneList.filter((item, index) => index !== closeIndex)
        }
      } else {
        return state
      }
    case REPEAL_TODO:
      doneList = [...state.doneList]
      doingList = [...state.doingList].concat(doneList.splice(action.index, 1))
      return {
        ...state,
        doingList,
        doneList
      }
    default: return state
  }
}
