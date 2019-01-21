import React from 'react'
import style from './index.module.scss'
import { Icon } from 'antd'

export default function DoneList (props) {
  const {
    repealTodo,
    closeTodo
  } = props
  const target = 'done'
  return (
    <ul className={style.doneList}>
      {props.doneList.map((item, index) => {
        return (
          <li key={item}>
            {item}
            <span className={style.itemOperate}>
              <Icon
                className={style.repeal}
                type="rollback"
                onClick={e => repealTodo(e, index)}
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
