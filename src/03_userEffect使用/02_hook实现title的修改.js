import React, { useEffect, useState } from 'react'

export default function HookCounterTitleChange() {
  const[counter, setCounter] = useState(0)

  useEffect(() => {// 当前组件第一次渲染和更新都会出发此函数
    document.title = counter

  })

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
