import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState(['wangwu', 'zhaoliu'])

  const [students, setStudents] = useState([
    {id: 110, name: 'zhang', age: 13},
    {id: 111, name: 'wang', age: 16},
    {id: 112, name: 'zhao', age: 19}
  ])

  function incrementAgeWithIndex(index) {
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)

  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setFriends([...friends, 'tianqi'])}>添加朋友</button>

      <h2>学生表</h2>
      <ul>
        {
          students.map((item, index) => {
            return <li key={item.id}>
              <span>姓名：{item.name} 年龄：{item.age}</span>
              <button onClick={e => incrementAgeWithIndex(index)}>年龄+1</button>
            </li>
          })
        }
      </ul>
    </div>
  )
}
