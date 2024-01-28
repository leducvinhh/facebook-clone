interface IDividerProps {
  className?: string
}

export default function IDivider({ className = 'h-[1px] w-full bg-gray-300' }: IDividerProps) {
  return <div className={className}></div>
}
