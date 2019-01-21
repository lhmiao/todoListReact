import React from 'react'
import style from './index.module.scss'
import { Icon } from 'antd'

export default function DoingList (props) {
  const {
    checkTodo,
    closeTodo
  } = props
  const target = 'doing'
  return (
    <ul className={style.doingList}>
      {props.doingList.map((item, index) => {
        return (
          <li key={item}>
            {item}
            <span className={style.itemOperate}>
              <Icon
                className={style.check}
                type="check-square"
                onClick={e => checkTodo(e, index)}
              />
              <Icon
                className={style.close}
                type="close-square"
                onClick={e => closeTodo(e, {index, target})}
              />
            </span>
          </li>
        )
      })}
    </ul>
  )
}
