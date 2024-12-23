import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Subjects from './components/Subjects'
import News from './components/News'
import Events from './components/Events'
import Resources from './components/Resources'
import Testimonials from './components/Testimonials'
import Staff from './components/Staff'
import LanguageGame from './components/LanguageGame'
import ProgressTracker from './components/ProgressTracker'
import LiveChat from './components/LiveChat'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Subjects />
          <News />
          <Events />
          <Resources />
          <ProgressTracker />
          <LanguageGame />
          <Testimonials />
          <Staff />
        </main>
        <Footer />
        <BackToTop />
        <LiveChat />
      </div>
    </ThemeProvider>
  )
}

