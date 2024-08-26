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
import { BackgroundBeamsWithCollisionDemo } from "../background-beams-card"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"
import { ShootingStars } from "../ui/shooting-stars"
import { StarsBackground } from "../ui/stars-background"

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
            <CardDescription>
              Seamlessly Collaborate With Our Team and Your Creative Partners,
              No Matter Where You Are. Share Ideas, Give Feedback, and Track
              Progress
            </CardDescription>
          </Card>
          <Card className="p-0 overflow-visible">
            <CardSkeletonContainer className="w-full h-full min-h-[20rem]">
              <BackgroundBeamsWithCollision>
                <ShootingStars />
                <StarsBackground />
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight justify-center items-center">
                  Lightning Fast{" "}
                  <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      <span>Turnaround</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                      <span>Turnaround</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <CardDescription className="text-center translate-y-5 text-base">
                      Need your project done yesterday? We specialize in quick
                      turnarounds without sacrificing quality, so you can keep
                      your momentum going and meet your tight deadlines
                    </CardDescription>
                  </div>
                </h2>
              </BackgroundBeamsWithCollision>
            </CardSkeletonContainer>
          </Card>
        </div>
      </Container>
    </GradientContainer>
  )
}
