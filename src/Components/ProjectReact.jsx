import {useState} from "react";

const ProjectReact = () => {
    const [text, setText] = useState("")

    const inputHandler = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
        <input
         value={text} 
         onChange={inputHandler}
         className="border-2 border-yellow-700"
        />

        <p>
            <strong>{text}</strong>
        </p>
      
    </div>
  )
}

export default ProjectReact
