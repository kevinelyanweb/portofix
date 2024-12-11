'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    longDescription: string
    technologies: string[]
    images: string[]
    link: string
    category: string
  }
  index: number
  onClick: () => void
}

export function AnimatedProjectCard({ project, index, onClick }: ProjectCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.1 } }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="bg-zinc-800 border-zinc-700 shadow-lg shadow-zinc-900/20 hover:shadow-xl hover:shadow-zinc-900/30 transition-shadow">
        <CardContent className="p-6 space-y-4">
          <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
            <Image
              src={project.images[0]}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
          <p className="text-zinc-400">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className={`text-sm py-1 px-3 ${
                tech === 'Next.js' || tech === 'React' ? 'bg-[#EB5E28] text-black' : ''
              }`}>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

