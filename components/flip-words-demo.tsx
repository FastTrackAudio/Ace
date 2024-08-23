import React from "react"
import { FlipWords } from "./ui/flip-words"

export function FlipWordsDemo() {
  const words = ["Better", "More", "Creative", "Inpsiring"]

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Make
        <FlipWords words={words} /> <br />
        Music with FastTrackAudio
      </div>
    </div>
  )
}
