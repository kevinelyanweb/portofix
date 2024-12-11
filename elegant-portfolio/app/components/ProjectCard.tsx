import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    technologies: string[]
    category: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 shadow-lg">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
        <p className="text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className={`text-sm py-1 px-3 ${
              tech === 'Next.js' || tech === 'React' ? 'bg-[#EB5E28] text-white' : ''
            }`}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

