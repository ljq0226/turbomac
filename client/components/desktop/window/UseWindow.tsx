'use client'
import { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Window from './Window'
import { useAppsStore } from '@/store'
import apps from '@/lib/apps'

export default function Desktop() {
  const showApps = useAppsStore(s => s.showApps)
  const renderAppWindows = () => {
    return showApps.map((id) => {
      const appInfo = apps.filter(app => app.id === id)[0]
      return (
        <Window key={appInfo.id} app={appInfo} >
          {appInfo.content}
        </Window>
      )
    })
  }

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <AnimatePresence>
          {renderAppWindows()}
        </AnimatePresence>
      </Suspense>
    </>

  )
}
