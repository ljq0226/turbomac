'use client'
import { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { saveAs } from 'file-saver'
const videoConstraints = {
  facingMode: 'user',
}

const FaceTime = () => {
  const [click, setClick] = useState(false)
  const [img, setImg] = useState('')
  const webcamRef = useRef<Webcam>(null)

  const capture = () => {
    if (!webcamRef.current)
      return
    const imageSrc = webcamRef.current.getScreenshot() as string
    setImg(imageSrc)
    const blob = base64ToBlob(imageSrc)
    saveAs(blob, 'HandsomeBoy.jpg')
  }
  function base64ToBlob(base64: string) {
    const parts = base64.split(';base64,')
    const contentType = parts[0].split(':')[1]
    const raw = window.atob(parts[1])
    const rawLength = raw.length
    const uInt8Array = new Uint8Array(rawLength)
    for (let i = 0; i < rawLength; ++i)
      uInt8Array[i] = raw.charCodeAt(i)

    return new Blob([uInt8Array], { type: contentType })
  }

  if (click) {
    return (
      <div
        id="container"
        className="relative flex-col h-full space-y-6 bg-gray-800 flex-center"
      >
        {img && (
          <img
            className="border-8 border-white max-h-60 md:max-h-96"
            src={img}
            alt="yourimage"
          />
        )}
        <div className='absolute text-2xl text-red-400'> Caught you!!</div>
        <button
          className="w-20 h-6 mx-auto text-black bg-white border rounded-full border-black/50 no-outline"
          onClick={() => setClick(false)}
        >
          <b>Retake</b>
        </button>
      </div>
    )
  }
  else {
    return (
      <div
        id="container"
        className="flex-col h-full space-y-6 bg-gray-800 flex-center"
      >
        <Webcam
          className="border-8 border-white max-h-60 md:max-h-96"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button
          className="w-16 h-16 mx-auto text-red-900 bg-purple-300 border rounded-full no-outline border-black/50"
          onClick={() => {
            setClick(true)
            capture()
          }}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default FaceTime
