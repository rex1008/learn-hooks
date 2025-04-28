import React, { createContext, useState } from 'react'
//import CounterClass from './01_体验hooks/01_counter-class'
//import CounterHook from './01_体验hooks/02_counter-hook'
// import CounterHook2 from './01_体验hooks/03_counter-hook'
// import ClassCounterTitleChange from './03_userEffect使用/01_class实现title的修改'
// import HookCounterTitleChange from './03_userEffect使用/02_hook实现title的修改'
// import EffectHookCancelDemo from './03_userEffect使用/03_useEffect模拟订阅和取消订阅'
// import MultiEffectHookDemo from './03_userEffect使用/04_多个useEffect一起使用'
import ContextHookDemo from './04_useContext使用/useContext使用'
// import MultiHookState from './02_useState使用/01_多个状态的使用'
// import ComplexHookState from './02_useState使用/02_复杂状态的修改'


export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {

  const [show, setShow] = useState(true)


  return (
    <div>
      {/* <CounterHook2 /> */}
      {/* <MultiHookState /> */}
      {/* <ComplexHookState /> */}

      {/* <ClassCounterTitleChange /> */}

      {/* <HookCounterTitleChange /> */}

      {/* {show && <EffectHookCancelDemo />} */}
      
      {/* <MultiEffectHookDemo /> */}

      <UserContext.Provider value={{name: 'zhang', age: 18}}>
        <ThemeContext.Provider value={{fontSize: '30px', color: 'red'}}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider>


      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}