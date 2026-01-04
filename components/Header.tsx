'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, User } from 'lucide-react'
import AuthModal from './AuthModal'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAuthOpen, setIsAuthOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between mx-auto px-4">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                    <div className="relative w-12 h-12">
                        {/* Fallback to simple div if image missing, but we expect Logo.png or similar. 
                Using remote config for studentportal logo as in original HTML. */}
                        <Image
                            src="https://studentportal.egerton.ac.ke/assets/images/Logo.png"
                            alt="Egerton University Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="hidden md:flex flex-col">
                        <h1 className="text-xl font-bold text-primary leading-tight">Egerton University Library</h1>
                        <p className="text-xs text-muted-foreground">Transforming lives through quality Education</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/catalogue" className="text-sm font-medium hover:text-primary transition-colors">
                        Catalogue
                    </Link>
                    <Link href="/faqs" className="text-sm font-medium hover:text-primary transition-colors">
                        FAQs
                    </Link>
                    <Link href="/history" className="text-sm font-medium hover:text-primary transition-colors">
                        History
                    </Link>
                    <button
                        onClick={() => setIsAuthOpen(true)}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                        <User className="mr-2 h-4 w-4" />
                        Sign In
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-accent text-foreground"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/catalogue"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            Catalogue
                        </Link>
                        <Link
                            href="/faqs"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            FAQs
                        </Link>
                        <Link
                            href="/history"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
                        >
                            History
                        </Link>
                        <button
                            onClick={() => {
                                setIsMenuOpen(false)
                                setIsAuthOpen(true)
                            }}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        >
                            Sign In
                        </button>
                    </nav>
                </div>
            )}

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </header>
    )
}
