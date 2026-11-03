import { cn } from "@/lib/utils"

interface SkillCardProps {
  title: string
  skills: string[]
  className?: string
}

export function SkillCard({ title, skills, className }: SkillCardProps) {
  return (
    <div className={cn("card p-5", className)}>
      <h4 className="font-semibold mb-3">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
