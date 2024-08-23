"use client"
import React, { useId } from "react"
import { cn } from "@/lib/utils"
import { GlobeDemo } from "@/components/globe-demo"

export const SkeletonFour = () => {
  return (
    <div className="p-0 w-full h-full relative flex flex-col group">
      <GlobeDemo />
    </div>
  )
}
