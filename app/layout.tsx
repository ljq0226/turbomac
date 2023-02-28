import GlobalBackGround from './GlobalBackGround'
import Topbar from '@/components/topbar/Topbar'
import '@/styles/index.css'
import Launchpad from '@/components/desktop/Launchpad'
import Dock from '@/components/desktop/Dock'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className='w-full h-full '>
          <GlobalBackGround>

            {/* Topbar */}
            <Topbar></Topbar>

            {children}

            {/* LaunchPad */}
            <Launchpad></Launchpad>
            {/* Dock */}
            <Dock></Dock>

          </GlobalBackGround>

        </div>

      </body>
    </html>
  )
}
