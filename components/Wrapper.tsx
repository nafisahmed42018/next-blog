import React from 'react'

interface WrapperProps {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="max-w-[1536px] mx-auto px-20 ">{children}</div>
}

export default Wrapper
