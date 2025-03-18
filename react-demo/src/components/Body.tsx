import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Body = ({ msg, num, arr }: { msg: string, num: number, arr: number[] }) => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <pre>msg:{msg}, num:{num}, arr:{JSON.stringify(arr)}</pre>
    </>
  )
}
export default Body