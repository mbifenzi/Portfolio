interface ProgressBarProps {
  value: number
  maxValue: number
}

export function ProgressBar({ value, maxValue }: ProgressBarProps) {
  const percentage = (value / maxValue) * 100

  return (
    <div className="flex items-center gap-2">
      <div className="w-32 h-4 bg-gray-800 pixel-border overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-green-600 pixel-progress"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
