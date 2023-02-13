import { Input } from "./Styles"

interface TextInputProps {
  value: string
  setFunction: (value: any) => void
  placeholder?: string
  type?: string
}

export default function TextInput({ setFunction, value, placeholder, type }: TextInputProps) {
  return (
    <Input 
      value={value}
      onChange={setFunction}
      placeholder={placeholder}
      type={type || 'text'}
    />
  )
}