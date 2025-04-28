import React, { useEffect, useState } from 'react'

export default function MultiEffectHookDemo() {

  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    console.log('渲染') //不传递第2个参数：每次渲染都会执行（类似componentDidUpdate）
  })

  useEffect(() => {
    console.log('修改dom', count)
  }, [count]) // 非空数组 [a, b]：当 a 或 b 的值发生变化时执行

  useEffect(() => {
    console.log('订阅事件')
  }, []) // 数组 []：只在组件挂载时执行一次（类似componentDidMount）


  useEffect(() => {
    console.log('网络请求')
  }, [])



  return (
    <div>
      MultiEffectHookDemo
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <h2>{isLogin ? 'zhangrui' : 'not log in'}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}
