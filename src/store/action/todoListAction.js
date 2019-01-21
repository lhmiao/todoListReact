import {
  ADD_TODO,
  CHECK_TODO,
  CLOSE_TODO,
  REPEAL_TODO
} from '../actionType'

export function addTodo (newTodo) {
  return {
    type: ADD_TODO,
    newTodo
  }
}

export function checkTodo (index) {
  return {
    type: CHECK_TODO,
    index
  }
}

export function closeTodo (payload) {
  return {
    type: CLOSE_TODO,
    payload
  }
}

export function repealTodo (index) {
  return {
    type: REPEAL_TODO,
    index
  }
}
