import React from 'react'
import Button from './Button/Button'
import DateDay from './DateDay/DateDay'

function TodoList() {
  return (
    <div className="box shadow bg-body rounded">
      <DateDay />
      <Button />
    </div>
  )
}

export default TodoList