import React from 'react'
import { Input, Button } from 'antd'
import style from './index.module.scss'

export default function Header (props) {
  const { 
    update,
    addTodo,
    value,
    handerInputEnter
  } = props
  return (
    <div className={style.header}>
      <h1>TodoList</h1>
      <div className={style.operateArea}>
        <Input
          value={value}
          placeholder="请输入待办事项"
          onInput={update}
          onKeyUp={handerInputEnter}
        />
        <Button type="primary" onClick={addTodo}>添加</Button>
      </div>
    </div>
  )
}
