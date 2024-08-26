"use client"
import { FeatureIconContainer } from "./features/feature-icon-container"
import { Heading } from "./heading"
import SamplyDemo from "./samply-demo"
import { Subheading } from "./subheading"
import { IconTool } from "@tabler/icons-react"
import React from "react"

const Portfolio = () => {
  return (
    <div className="px-6">
      <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
        <IconTool className="h-6 w-6 text-cyan-500" />
      </FeatureIconContainer>
      <Heading className="mt-4">Listen To Our Work</Heading>
      <Subheading>
        Let the Music Speak For Itself, Here Are Some Projects We&apos;ve Been
        Apart Of
      </Subheading>
      <div className="flex justify-center items-center gap-4 max-w-7xl mx-auto relative py-8 md:py-32">
        <SamplyDemo />
      </div>
    </div>
  )
}

export default Portfolio
