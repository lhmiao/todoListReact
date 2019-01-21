import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from './index.module.scss'
import Header from './Header'
import DoingList from './DoingList'
import DoneList from './DoneList'
import { message } from 'antd'
import {
  addTodo as addTodoAction,
  checkTodo as checkTodoAction,
  closeTodo as closeTodoAction,
  repealTodo as repealTodoAction
} from '@/store/action/todoListAction'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoText: ''
    }
  }

  componentDidMount () {
  }

  updateTodoText = e => {
    this.setState({
      todoText: e.target.value
    })
  }

  addTodo = e => {
    if (this.state.todoText.trim() === '') {
      message.warning('请输入有效内容后再添加')
      return
    }
    const { addTodo } = this.props
    addTodo(this.state.todoText)
    this.setState({
      todoText: ''
    })
  }

  handerInputEnter = e => {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  checkTodo = (e, index) => {
    const { checkTodo } = this.props
    checkTodo(index)
  }

  closeTodo = (e, payload) => {
    const { closeTodo } = this.props
    closeTodo(payload)
  }

  repealTodo = (e, index) => {
    const { repealTodo } = this.props
    repealTodo(index)
  }

  render () {
    const { doingList, doneList } = this.props
    return (
      <div className={style.todoList}>
        <Header
          value={this.state.todoText}
          update={this.updateTodoText}
          addTodo={this.addTodo}
          handerInputEnter={this.handerInputEnter}
        />
        <DoingList
          doingList={doingList}
          checkTodo={this.checkTodo}
          closeTodo={this.closeTodo}
        />
        <DoneList
          doneList={doneList}
          repealTodo={this.repealTodo}
          closeTodo={this.closeTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    doingList: state.todoList.doingList,
    doneList: state.todoList.doneList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: bindActionCreators(addTodoAction, dispatch),
    checkTodo: bindActionCreators(checkTodoAction, dispatch),
    closeTodo: bindActionCreators(closeTodoAction, dispatch),
    repealTodo: bindActionCreators(repealTodoAction, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))
