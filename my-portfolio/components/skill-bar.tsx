interface SkillBarProps {
  name: string
  value: number
}

export function SkillBar({ name, value }: SkillBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <span>{name}</span>
        <span>{value}/100</span>
      </div>
      <div className="h-4 bg-gray-800 pixel-border overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 pixel-progress"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
