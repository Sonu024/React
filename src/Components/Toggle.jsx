import {useState} from 'react'

const Toggle = () => {
    const [darkmode, setDarkmode] = useState(false)

    const changemode = () => {
       setDarkmode(!darkmode)
    }

  return (
    <div className={`${darkmode ? "bg-black` : "bg-green-500}`}>
      <button onClick={changemode}>
        Dark/Light
      </button>
    </div>
  )
}

export default Toggle
