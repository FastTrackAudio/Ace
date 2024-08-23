import React from "react"
import { GradientContainer } from "../gradient-container"
import { Container } from "../container"
import { Heading } from "../heading"
import { Subheading } from "../subheading"
import { FeatureIconContainer } from "./feature-icon-container"
import { FaBolt, FaChartLine } from "react-icons/fa"
import { Card, CardDescription, CardSkeletonContainer, CardTitle } from "./card"
import { SkeletonOne } from "./skeletons/first"
import { SkeletonTwo } from "./skeletons/second"
import { SkeletonThree } from "./skeletons/third"
import { SkeletonFour } from "./skeletons/fourth"
import { SkeletonFive } from "./skeletons/fifth"
import SamplyDemo from "../samply-demo"
import { ExpandableCardOnClick } from "../expandable-card"
import { FlipWords } from "../ui/flip-words"
import { AnimatedModalDemo } from "../animated-modal-demo"
import { FileUpload } from "../ui/file-upload"
import { MeteorsDemo } from "../meteor-card"
import { Meteors } from "../ui/meteors"

export const Features = () => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-7xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Every Aspect of Your Project</Heading>
        <Subheading>Whatever Your Project needs, we have it</Subheading>

        <ExpandableCardOnClick />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
          <Card className="lg:col-span-2 flex justify-center items-center">
            <CardSkeletonContainer className="">
              <SkeletonOne />

              {/* <SamplyDemo /> */}
            </CardSkeletonContainer>
          </Card>
          <Card>
            <CardSkeletonContainer className="max-w-[16rem] mx-auto">
              <FileUpload />
            </CardSkeletonContainer>
            <CardTitle>Upload Your Audio!</CardTitle>
            <CardDescription>
              Drag and Drop Your Files Here or Click to Upload
            </CardDescription>
          </Card>
          <Card className="p-0 w-full h-full overflow-visible">
            <CardSkeletonContainer className="h-full w-full">
              {/* <SkeletonThree /> */}
              <MeteorsDemo />
            </CardSkeletonContainer>
          </Card>
          <Card>
            <CardSkeletonContainer
              showGradient={false}
              className="max-w-[16rem] mx-auto"
            >
              <SkeletonFour />
            </CardSkeletonContainer>
            <CardTitle>Collaborate From Anywhere</CardTitle>
            <CardDescription>working with</CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonFive />
            </CardSkeletonContainer>
            <CardTitle>Know your audience</CardTitle>
            <CardDescription>
              Based on your audience, create funnels and drive more traffic.
            </CardDescription>
          </Card>
        </div>
      </Container>
    </GradientContainer>
  )
}
