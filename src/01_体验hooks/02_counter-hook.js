import React, { useState } from 'react'

export default function CounterHook() {
  // Hook: useState 其本身是一个函数，来自于react包

  const arr = useState(0) // useState函数会返回一个数组，数组的第一个元素是state，数组的第二个元素是setState方法，其可以对state进行更改值
  const state = arr[0]
  const setState = arr[1]

  console.log(state)

  return (
    <div>
      <h2>当前计数：{state}</h2>
      <button onClick={e => setState(state + 1)}>+1</button>
      <button onClick={e => setState(state - 1)}>-1</button>
    </div>
  )
}
