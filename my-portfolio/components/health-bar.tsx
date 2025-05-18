interface HealthBarProps {
  value: number
  maxValue: number
}

export function HealthBar({ value, maxValue }: HealthBarProps) {
  const percentage = (value / maxValue) * 100

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs">HP</span>
      <div className="w-32 h-4 bg-gray-800 pixel-border overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-600 pixel-progress"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
