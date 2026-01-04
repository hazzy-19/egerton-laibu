import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-muted/50 border-t pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight text-foreground">Contact Us</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:library@egerton.ac.ke" className="hover:text-primary transition-colors">library@egerton.ac.ke</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <a href="tel:+254757611486" className="hover:text-primary transition-colors">0757 611 486</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight text-foreground">Quick Links</h4>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/catalogue" className="hover:text-primary transition-colors">Search Catalogue</Link>
                            <Link href="#" className="hover:text-primary transition-colors">My Library Account</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Ask A Librarian</Link>
                            <Link href="#" className="hover:text-primary transition-colors">E-Resources A-Z</Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight text-foreground">Opening Hours</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
                            <p>Saturday: 8:00 AM - 10:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-tight text-foreground">Location</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1" />
                                <div>
                                    <p>Main Campus</p>
                                    <p>Egerton University</p>
                                    <p>Njoro, Kenya</p>
                                    <p className="text-xs mt-1">(Near the Admin Block)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Group Neo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
