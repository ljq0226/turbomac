import GlobalBackGround from './GlobalBackGround'
import Topbar from '@/components/topbar/Topbar'
import '@/styles/index.css'
import Dock from '@/components/desktop/Dock'
import Launchpad from '@/components/desktop/Launchpad'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
