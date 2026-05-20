import { useState } from 'react'
import { Button, TextInput } from './components/'

function ButtonSection() {
  const colors = [
    "White","Smoke","Gray","Slate",
    "Blue","Indigo","Purple","Pink",
    "Mint","Green","Brown","Crimson",
    "Red","Orange","Yellow"
  ]

  const sizes = ["S","M","L"]
  const [size, setSize] = useState("S");

  const variants = ["Fill", "Outline"]
  const [variant, setVariant] = useState("Fill");

  const states = ["Normal","Disabled"]
  const [state, setState] = useState("Normal");

    return (
    <div className="flex flex-row items-center justify-center gap-4 bg-slate-200 w-full p-4 rounded">
      <div className="flex flex-col items-start justify-start gap-2">
        <select onChange={(e) => setSize(e.target.value)}>
          {sizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <select onChange={(e) => setVariant(e.target.value)}>
          {variants.map((variant) => (
            <option key={variant} value={variant}>{variant}</option>
          ))}
        </select>

        <select onChange={(e) => setState(e.target.value)}>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>


      <div className="flex flex-col items-center justify-center min-h-screen gap-0">
        {colors.map((color) => (
          <Button
            key={color}
            label={color}
            color={color as any}
            width={88}
            size={size as any}
            variant={variant as any}
            state={state as any}
            onClick={()=>{alert("clicou no botão " + color)}}
          />
        ))}
      </div>
    </div>
  )
}
  
function TextInputSection() {

  const [width, setWidth] = useState(200);
  const [label, setLabel] = useState("Label");
  const [placeholder, setPlaceholder] = useState("Placeholder");

  const sizes = ["S","M","L"]
  const [size, setSize] = useState("M");

  const [textInput, setTextInput] = useState("");
  return (
    <div className="flex flex-row items-center justify-center gap-4 bg-slate-200 w-full p-4 rounded">
      <div className="flex flex-col items-start justify-start gap-2">

      </div>

      <div className="flex flex-col items-center justify-center min-h-screen gap-0">
        <TextInput text={textInput} placeholder="Normal" width={width} label={label ?? "Normal"} state='Normal' onChange={setTextInput} />
        <TextInput text={textInput} placeholder="Error" width={width} label={label ?? "Error"} state='Error' onChange={setTextInput} />
        <TextInput text={textInput} placeholder="Disabled" width={width} label={label ?? "Disabled"} state='Disabled' onChange={setTextInput} />
      </div>
    </div>
  )
}


function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <ButtonSection />
      <TextInputSection />

    </div>
  )
}

export default App
