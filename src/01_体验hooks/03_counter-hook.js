import React, { useState } from 'react'

export default function CounterHook2() {
  const [count, setCount] = useState(0)

  console.log('hook组件渲染')

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}
