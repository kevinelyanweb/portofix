'use client'

import { useState, useEffect } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Database } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { TopRightNav } from './components/TopRightNav'
import { AnimatedProjectCard } from './components/AnimatedProjectCard'
import { ProjectDetail } from './components/ProjectDetail'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
SiJavascript, 
SiReact, 
SiNextdotjs, 
SiNodedotjs, 
SiPostgresql, 
SiFigma, 
SiFramer 
} from 'react-icons/si'

const projects = [
{
  id: 1,
  title: "Digital Agency",
  description: "A responsive navbar component for modern web applications.",
  longDescription: "This project showcases a responsive navbar that adapts seamlessly to different screen sizes. It features a mobile-friendly hamburger menu and smooth transitions for an optimal user experience.",
  technologies: ['React', 'CSS', 'Framer Motion'],
  images: ['/placeholder.svg?height=400&width=600&text=Navbar+Image+1', '/placeholder.svg?height=400&width=600&text=Navbar+Image+2'],
  link: 'https://example.com/navbar',
  category: 'UI/UX'
},
{
  id: 2,
  title: "E-commerce Website",
  description: "A full-featured e-commerce website with a modern design.",
  longDescription: "This e-commerce website provides a seamless shopping experience with features like product filtering, cart management, and secure checkout. It's built with performance and scalability in mind.",
  technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
  images: ['/placeholder.svg?height=400&width=600&text=E-commerce+Image+1', '/placeholder.svg?height=400&width=600&text=E-commerce+Image+2'],
  link: 'https://example.com/ecommerce',
  category: 'Website'
},
{
  id: 3,
  title: "AR Product Viewer",
  description: "An augmented reality product viewer for enhanced online shopping.",
  longDescription: "This AR product viewer allows customers to see products in their own space using their smartphone camera. It improves the online shopping experience by providing a more realistic view of products.",
  technologies: ['React Native', 'AR.js', 'Three.js'],
  images: ['/placeholder.svg?height=400&width=600&text=AR+Viewer+Image+1', '/placeholder.svg?height=400&width=600&text=AR+Viewer+Image+2'],
  link: 'https://example.com/ar-viewer',
  category: 'AR'
},
{
  id: 4,
  title: "Website Design",
  description: "A comprehensive user dashboard with data visualization.",
  longDescription: "This user dashboard provides an intuitive interface for users to manage their account, view analytics, and interact with key features of the application. It includes responsive charts and customizable widgets.",
  technologies: ['React', 'D3.js', 'Material-UI'],
  images: ['/placeholder.svg?height=400&width=600&text=Dashboard+Image+1', '/placeholder.svg?height=400&width=600&text=Dashboard+Image+2'],
  link: 'https://example.com/dashboard',
  category: 'UI/UX'
},
{
  id: 5,
  title: "Digital Agency Web",
  description: "A full-featured e-commerce website with a modern design.",
  longDescription: "This e-commerce website provides a seamless shopping experience with features like product filtering, cart management, and secure checkout. It's built with performance and scalability in mind.",
  technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
  images: ['/placeholder.svg?height=400&width=600&text=E-commerce+Image+1', '/placeholder.svg?height=400&width=600&text=E-commerce+Image+2'],
  link: 'https://example.com/ecommerce',
  category: 'Website'
},
{
  id: 6,
  title: "Food Website",
  description: "Food Website.",
  longDescription: "This e-commerce website provides a seamless shopping experience with features like product filtering, cart management, and secure checkout. It's built with performance and scalability in mind.",
  technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
  images: ['/placeholder.svg?height=400&width=600&text=E-commerce+Image+1', '/placeholder.svg?height=400&width=600&text=E-commerce+Image+2'],
  link: 'https://example.com/ecommerce',
  category: 'Website'
},
]

const categories = ['UI/UX', 'Website', 'AR']

const skills = [
{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
{ name: 'React', icon: SiReact, color: '#61DAFB' },
{ name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
{ name: 'Figma', icon: SiFigma, color: '#F24E1E' },
{ name: 'Framer', icon: SiFramer, color: '#0055FF' },
{ name: 'Payload CMS', icon: Database, color: '#1A1A1A' },
]

export default function Home() {
const [activeCategory, setActiveCategory] = useState('UI/UX')
const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1)
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  handleHashChange() // Handle hash on initial load
  window.addEventListener('hashchange', handleHashChange)

  return () => {
    window.removeEventListener('hashchange', handleHashChange)
  }
}, [])

return (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
    <Navbar />
    <TopRightNav />
    <main className="relative flex-grow container mx-auto px-4 py-24 max-w-5xl">
      <section id="about" className="space-y-8 mb-24">
        <h1 className="text-4xl font-bold font-roboto-slab">Kevin Elyan</h1>
        <p className="text-xl text-zinc-400">Front-End Developer | UI-UX</p>
        <p className="text-zinc-300">Passionate about creating elegant, efficient, and user-friendly web applications.</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center bg-zinc-800 rounded-full px-4 py-2">
                <skill.icon className="w-6 h-6 mr-2" style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <Button>
            View Resume <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section id="projects" className="space-y-8 mb-24">
        <h2 className="text-3xl font-bold mb-6 font-roboto-slab">Projects</h2>
        <div className="flex justify-center mb-8">
          <nav className="flex items-center justify-center space-x-2 sm:space-x-4 bg-zinc-800/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all rounded-full ${
                  activeCategory === category
                    ? 'text-white bg-[#EB5E28] shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(project => project.category === activeCategory)
            .map((project, index) => (
              <AnimatedProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))
          }
        </div>
      </section>

      <section id="blog" className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 font-roboto-slab">Blog</h2>
        <p className="text-zinc-300 mb-4">Check out my latest thoughts and insights on web development and design.</p>
        <Link href="/blog" className="inline-block">
          <Button variant="default" className="bg-[#EB5E28] hover:bg-[#D54E23] text-white">
            View All Posts <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </main>

    <footer className="py-6 text-center text-zinc-500">
      <p>&copy; 2024 Kevin Elyan. All rights reserved.</p>
    </footer>

    <AnimatePresence mode="wait">
      {selectedProject && (
        <ProjectDetail
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </AnimatePresence>
  </div>
)
}

