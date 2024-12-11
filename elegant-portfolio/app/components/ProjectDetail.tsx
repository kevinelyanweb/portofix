'use client'

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useEffect } from 'react'

interface ProjectDetailProps {
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
  onClose: () => void
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault()
      onClose()
    }
    window.history.pushState(null, '', window.location.href)
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-zinc-900 overflow-y-auto"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Explanation */}
        <div className="w-full lg:w-1/2 p-8 overflow-y-auto">
          <Button
            variant="outline"
            className="mb-4 text-zinc-100 hover:text-white font-roboto-slab bg-zinc-800 hover:bg-zinc-700"
            onClick={onClose}
          >
            Back
          </Button>
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">{project.title}</h2>
          <p className="text-zinc-300 mb-6">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className={`text-sm py-1 px-3 ${
                tech === 'Next.js' || tech === 'React' ? 'bg-[#EB5E28] text-white' : ''
              }`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right side - Project picture with details */}
        <div className="w-full lg:w-1/2 bg-zinc-800 p-8">
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">Project Details</h3>
          <p className="text-zinc-400 mb-2">Category: {project.category}</p>
          <Button 
            as="a" 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mb-4" 
            variant="outline"
            style={{ color: 'black' }}
          >
            Visit Project
          </Button>
          <p className="text-zinc-400 mb-4">{project.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

