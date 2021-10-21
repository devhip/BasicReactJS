// เขียนปกติ
// function App(){
//   return <h1>Hello</h1>
// }

// เชียนด้วย Arrow Function
// const App = () => <h1>React</h1>
// export default App
import About from './About'

const App = () => {
  return (
    <div>
      <h1>Page App</h1>
      <About />
      <About />
    </div>
  )
}

export default App

