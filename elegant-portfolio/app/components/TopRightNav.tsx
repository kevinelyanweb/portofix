'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Menu, X, Instagram, Phone } from 'lucide-react'

export function TopRightNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-4 right-4 z-50">
        <div className="sm:hidden">
          <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-zinc-800/50 backdrop-blur-sm" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        <div 
          className={`${
            isOpen ? 'flex' : 'hidden'
          } sm:flex items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 bg-zinc-800/50 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg flex-col sm:flex-row fixed sm:static top-16 right-4 mt-2 sm:mt-0 z-50`}
        >
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EB5E28]/10" asChild>
            <a href="mailto:kevinelyanwork@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EB5E28]/10" asChild>
            <a href="https://github.com/kevinelyanweb" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EB5E28]/10" asChild>
            <a href="https://linkedin.com/in/kevinelyan" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EB5E28]/10" asChild>
            <a href="https://instagram.com/kevinelyan" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#EB5E28]/10" asChild>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 sm:hidden" onClick={toggleMenu}></div>
      )}
    </>
  )
}

