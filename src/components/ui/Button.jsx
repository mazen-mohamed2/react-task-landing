import { cn } from "../../lib/util"

const Button = ({children,className}) => {
  return (
    <button className= {cn(
        `bg-main-green text-white rounded px-5 py-2 text-center`,className)
        } 
        >
    {children}
    </button>
  )
}

export default Button