'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {useSession, signOut} from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">HKM App</div>
          <div className="space-x-4">
            {session ? (
  <Button variant="outline" onClick={() => signOut()}>
    Sign Out
  </Button>
) : (
  <>
    <Link href="/auth/signin">
      <Button variant="outline">Sign In</Button>
    </Link>
    <Link href="/auth/signup">
      <Button>Sign Up</Button>
    </Link>
  </>
)}
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Connect. Share. Discover.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community. Follow friends, share updates, and track analytics in real-time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8">
                Get Started Free
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Social Feed',
              description: 'Real-time updates from your community',
              icon: '💬',
            },
            {
              title: 'Analytics',
              description: 'Track engagement with detailed insights',
              icon: '📊',
            },
            {
              title: 'Notifications',
              description: 'Never miss important updates',
              icon: '🔔',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border/40 bg-card hover:border-primary/40 transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2024 HKM App. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
