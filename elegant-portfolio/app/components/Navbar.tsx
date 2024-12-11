'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Blog', href: '/blog' }
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const sections = navItems
        .map(item => item.name.toLowerCase())
        .filter(item => document.getElementById(item))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/blog') {
      setActiveSection('blog')
    }
  }, [pathname])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-4 left-4 z-50 sm:left-1/2 sm:-translate-x-1/2">
      <nav className="flex items-center justify-center space-x-2 sm:space-x-4 bg-zinc-800/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium transition-all rounded-full ${
              activeSection === item.name.toLowerCase()
                ? 'text-black bg-[#EB5E28] shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-700/50'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

