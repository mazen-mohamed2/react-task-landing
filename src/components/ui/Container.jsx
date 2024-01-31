import React from 'react'
import { cn } from '../../lib/util'

const Container = ({children,className}) => {
  return (
    <div className={cn('px-5   md:px-32 ',className)}>
    {children}
    </div>
  )
}

export default Container