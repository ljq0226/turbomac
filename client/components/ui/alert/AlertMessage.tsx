'use client'
import React, { useEffect } from 'react'
import { useAlertStore } from 'store'
import { shallow } from 'zustand/shallow'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

const AlertMessage = () => {
  const [show, type, content, setShow] = useAlertStore(s => [s.show, s.type, s.content, s.setShow], shallow)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }, [show])
  const render = () => {
    switch (type) {
      case 'success':
        return (
          <div className="shadow-lg alert alert-success">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{content}</span>
            </div>
          </div>
        )
      case 'info':
        return (
          <div className="shadow-lg alert alert-info">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="flex-shrink-0 w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{content}</span>
            </div>
          </div>
        )
      case 'error':
        return (
          <div className="shadow-lg alert alert-error">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{content}</span>
            </div>
          </div>
        )
      case 'warning':
        return (
          <div className="shadow-lg alert alert-warning">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>{content}</span>
            </div>
          </div>
        )
      default:
        return (
          <div className="shadow-lg alert">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="flex-shrink-0 w-6 h-6 stroke-info"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>{content}</span>
            </div>
          </div>
        )
    }
  }

  return (
    <AnimatePresence>
      {show
        && <motion.div
          className={clsx('fixed w-[30%] top-[8%] left-[35%] z-[100]')}
          initial={{ opacity: 0.8, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 30 }}
        >
          {render()}
        </motion.div>}

    </AnimatePresence>

  )
}

export default AlertMessage
