import React from 'react'

interface TopbarItemProps {
  Icon?: React.ReactNode
  children?: JSX.Element
  clickHandler?: (value: boolean) => void
  value?: boolean
}

const TopbarItem = ({
  Icon,
  clickHandler = () => {},
  value = false,
}: TopbarItemProps) => {
  return (
    <div
      className="px-1 rounded hover:bg-gray-400"
      onClick={() => clickHandler(!value)}
    >
      {Icon}
    </div>
  )
}

export default TopbarItem
