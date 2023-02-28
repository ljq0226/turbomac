'use client'
import React, { useState } from 'react'
import './dock.css'
const Dock = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setIsLoading(true)
  }
  const resetScale = () => {
    document.querySelectorAll('.dock li').forEach((li: any) => {
      li.style.setProperty('--scale', '1')
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const item = e.currentTarget
    const itemRect = item.getBoundingClientRect()
    const offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
    const scale = 0.6

    resetScale()

    const prev: any = item.previousElementSibling || null
    const next: any = item.nextElementSibling || null

    if (prev)
      prev.style.setProperty('--scale', `${1 + scale * Math.abs(offset - 1)}`)

    item.style.setProperty('--scale', `${1 + scale}`)

    if (next)
      next.style.setProperty('--scale', `${1 + scale * offset}`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
    resetScale()
  }

  const dockItems = ['😃', '😊', '😜', '😍', '🤩', '🥳', '🥶']

  return (
    <div className="absolute bottom-0 flex justify-center w-full h-20 ">
      <div className="flex-1"></div>
      <ul
        className="flex items-center justify-start p-0 m-0 rounded-[1.4rem] dock glass"
        onMouseLeave={handleMouseLeave}
      >
        {dockItems.map((item, index) => (
          <li
            key={index}
            className={`${isLoading ? 'loading' : ''}`}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex-1"></div>
    </div>
  )
}

export default Dock
