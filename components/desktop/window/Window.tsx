'use client'
import React, { useEffect, useState } from 'react'
import { Rnd } from 'react-rnd'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useDockStore } from '@/store'
import type { AppsData } from '@/types/app'

const minMarginY = 32
const minMarginX = 100

interface WindowProps {
  app: AppsData
  children: React.ReactNode
}

interface WindowState {
  width: number
  height: number
  x: number
  y: number
}

const Window = ({ app, children }: WindowProps) => {
  const dockSize = useDockStore(s => s.dockSize)
  const { winWidth, winHeight } = useWindowSize()

  const initWidth = Math.min(winWidth, app.width ? app.width : 640)
  const initHeight = Math.min(winHeight, app.height ? app.height : 400)

  const [state, setState] = useState<WindowState>({
    width: initWidth,
    height: initHeight,
    x: Math.random() * (winWidth - initWidth),
    y: Math.random() * (winHeight - initHeight),
  })

  useEffect(() => {
    setState({
      ...state,
      width: Math.min(winWidth, state.width),
      height: Math.min(winHeight, state.height),
    })
  }, [winWidth, winHeight])
  const max = false
  const min = false

  const round = max ? 'rounded-none' : 'rounded-lg'
  const minimized = min
    ? 'opacity-0 invisible transition-opacity duration-300'
    : ''
  const border = max ? '' : 'border border-gray-500/30'
  const width = max ? winWidth : state.width
  const height = max ? winHeight : state.height

  return (
    <Rnd
      bounds="parent"
      size={{
        width,
        height,
      }}
      position={{
        x: max
          ? winWidth
          : Math.min(
            // "winWidth * 2" because of the boundary for windows
            winWidth * 2 - minMarginX,
            Math.max(
              // "+ winWidth" because we add a boundary for windows
              winWidth - state.width + minMarginX,
              state.x,
            ),
          ),
        y: max
          ? -minMarginY
          : Math.min(
            // "- minMarginY" because of the boundary for windows
            winHeight - minMarginY - (dockSize + 15 + minMarginY),
            Math.max(0, state.y),
          ),
      }}
      onDragStop={(e, d) => {
        setState({ ...state, x: d.x, y: d.y })
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setState({
          ...state,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position,
        })
      }}
      minWidth={app.minWidth ? app.minWidth : 200}
      minHeight={app.minHeight ? app.minHeight : 150}
      dragHandleClassName="window-bar"
      disableDragging={max}
      enableResizing={!max}
      style={{ zIndex: 50 }}
      // onMouseDown={() => app.focus(app.id)}
      className={`absolute ${round} overflow-hidden rounded-md bg-transparent w-full h-full ${border} shadow-lg shadow-black/30 ${minimized}`}
      id={`window-${app.id}`}
    >
      <div
        className="relative h-8 text-center select-none window-bar bg-stone-700 "
      // onDoubleClick={() => app.setMax(app.id)}
      >
        {/* <TrafficLight
          id={app.id}
          close={app.close}
          max={max}
          setMax={app.setMax}
          setMin={app.setMin}
        /> */}
        <span className="font-semibold c-text-700">{app.title}</span>
      </div>
      <div className="w-full overflow-y-hidden innner-window">{children}</div>
    </Rnd>
  )
}

export default Window
