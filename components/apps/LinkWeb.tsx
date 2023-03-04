interface Props {
  src: string
  title: string
}

export default function LinkWeb({ src, title }: Props) {
  return (
    <iframe
      className="w-full h-full "
      src={src}
      title={title}
    />
  )
}
