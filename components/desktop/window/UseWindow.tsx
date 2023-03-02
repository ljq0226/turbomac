'use client'

import Window from './Window'
import { useAppsStore } from '@/store'
import apps from '@/lib/apps'

const minMarginY = 32
export default function Desktop() {
  const renderAppWindows = () => {
    const store: any = useAppsStore.getState()

    return Object.keys(store).map((id) => {
      if (store[id] === true) {
        const appInfo = apps.filter(app => app.id === id)[0]
        return (
          <Window app={appInfo} >
            {appInfo.content }
          </Window>
        )
      }
      else {
        return <div key={`desktop-app-${id}`} />
      }
    })
  }

  return (
    <div className="absolute z-10 window-bound " style={{ top: minMarginY }} >
      {renderAppWindows()}
    </ div>

  )
}
