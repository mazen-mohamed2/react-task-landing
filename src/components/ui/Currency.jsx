import { formatter } from "../../lib/util"

const Currency = ({value,className}) => {
  return (
    <span className={className}>
    {formatter.format(Number(value))}
    </span>
  )
}

export default Currency