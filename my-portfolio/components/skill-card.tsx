import { cn } from "@/lib/utils"

interface SkillCardProps {
  title: string
  skills: string[]
  className?: string
  iconColor?: string
}

export function SkillCard({ title, skills, className, iconColor = "text-green-400" }: SkillCardProps) {
  return (
    <div className={cn("pixel-border p-4 bg-gray-900", className)}>
      <h4 className="text-lg mb-3 text-yellow-400">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className={iconColor}>•</span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
