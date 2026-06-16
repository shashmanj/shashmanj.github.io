import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Product } from '@/components/Product'
import { Proof } from '@/components/Proof'
import { Background } from '@/components/Background'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background font-body text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Product />
        <Proof />
        <Background />
        <Footer />
      </main>
    </div>
  )
}

export default App
