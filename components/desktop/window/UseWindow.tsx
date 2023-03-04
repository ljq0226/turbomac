'use client'

import Window from './Window'
import { useAppsStore } from '@/store'
import apps from '@/lib/apps'

export default function Desktop() {
  const store: any = useAppsStore.getState()
  const openApps = useAppsStore(s => s.openApps)
  const renderAppWindows = () => {
    return openApps.map((id) => {
      const appInfo = apps.filter(app => app.id === id)[0]
      return (
        <Window key={appInfo.id} app={appInfo} closeApp={store.closeApp} >
          {appInfo.content}
        </Window>
      )
    })
  }

  return (
    <>
      {renderAppWindows()}
    </>

  )
}
