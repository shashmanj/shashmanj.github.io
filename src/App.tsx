import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Work } from '@/components/Work'
import { Product } from '@/components/Product'
import { Proof } from '@/components/Proof'
import { Background } from '@/components/Background'
import { HireMe } from '@/components/HireMe'
import { SkillPacks } from '@/components/SkillPacks'
import { WebsiteDesign } from '@/components/WebsiteDesign'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background font-body text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Work />
        <Product />
        <Proof />
        <Background />
        <HireMe />
        <SkillPacks />
        <WebsiteDesign />
        <Footer />
      </main>
    </div>
  )
}

export default App
