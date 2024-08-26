import { AmbientColor } from "@/components/ambient-color"
import { AnimatedSvg } from "@/components/animated-svg"
import { AppleCardsCarouselDemo } from "@/components/apple-card-demo"
import { CardDemo } from "@/components/background-overlay-card"
import { Container } from "@/components/container"
import { CTA } from "@/components/cta"
import { ExpandableCardOnClick } from "@/components/expandable-card"
import { FAQs } from "@/components/faqs"
import { Features } from "@/components/features"
import { FeatureIconContainer } from "@/components/features/feature-icon-container"
import { Heading } from "@/components/heading"
import { Hero } from "@/components/hero"
import { MusicCards } from "@/components/music-cards"
import Portfolio from "@/components/portfolio"
import { PricingGrid } from "@/components/pricing-grid"
import { Subheading } from "@/components/subheading"
import { Testimonials } from "@/components/testimonials"
import { TestimonialsSlider } from "@/components/testimonials/slider"
import { Tools } from "@/components/tools"

import { IconReceiptFilled } from "@tabler/icons-react"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />

      <Features />

      <Portfolio />
      {/* <Tools /> */}
      <Testimonials />
      <div className="py-20 sm:py-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconReceiptFilled className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Simple pricing</Heading>
        <Subheading>
          Simple pricing for startups, small businesses, medium scale businesses
          and enterprises.
        </Subheading>
        <PricingGrid />
        <FAQs />
      </div>
      <CTA />
    </div>
  )
}
