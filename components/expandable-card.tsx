"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MixingGif from "/public/mixingcard.webp"
import ProductionGif from "/public/productioncard.webp"
import MasteringGif from "/public/masteringcard.webp"
import StemEditingGif from "/public/stemeditingcard.webp"
import MusicForMediaGif from "/public/musicformediacard.webp"
import OrchestralCompositionGif from "/public/orchestralcompositioncard.webp"
export function ExpandableCardOnClick() {
  const items = [
    {
      title: "Production",
      description:
        "Turn Your Voice Memo into a Full Track ready for the Next Step",
      src: ProductionGif,
      content: (
        <div>
          <p>Classic design with timeless appeal</p>
          <p>Elegant and sophisticated exterior</p>
          <p>Attention to detail in every aspect</p>
        </div>
      ),
    },
    {
      title: "Mixing",
      description:
        "Upload your stems and have them mixed with unlimited revisions",
      src: MixingGif,
      content: (
        <div>
          <p>High ground clearance</p>
          <p>Durable all-terrain tires</p>
          <p>Advanced suspension system</p>
        </div>
      ),
    },
    {
      title: "Mastering",
      description:
        "Take Your Mix to the Next Level meeting Loudness Standards for all streaming platforms",
      src: MasteringGif,
      content: (
        <div>
          <p>7-seater interior with ample space</p>
          <p>Comfortable seating for your family</p>
          <p>Elegant and modern interior</p>
        </div>
      ),
    },
    {
      title: "Stem Editing",
      description:
        "Tuned and Time-Aligned Vocals, Edited Multitrack Drums, Tempo Maps, and Touch Ups",
      src: StemEditingGif,
      content: (
        <div>
          <p>7-seater interior with ample space</p>
          <p>Comfortable seating for your family</p>
          <p>Elegant and modern interior</p>
        </div>
      ),
    },
    {
      title: "Music for Media",
      description:
        "Films, TV Shows, Video Games, Commercials, Podcasts, or Event Music",
      src: MusicForMediaGif,
      content: (
        <div>
          <p>7-seater interior with ample space</p>
          <p>Comfortable seating for your family</p>
          <p>Elegant and modern interior</p>
        </div>
      ),
    },
    {
      title: "Orchestral Composition",
      description:
        "Orchestral VST demos and compositions for your next project",
      src: OrchestralCompositionGif,
      content: (
        <div>
          <p>Once a year service</p>
          <p>No maintenance cost.</p>
          <p>Optional pictures clicked with manager.</p>
        </div>
      ),
    },
  ]
  const [active, setActive] = useState<null | (typeof items)[number]>(null)

  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(ref, () => {
    setActive(null)
  })

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div className="relative  w-full h-full">
      <div className="py-10 md:py-20 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"
            ></motion.div>
          )}
        </AnimatePresence>
        {active && (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}`}
              ref={ref}
              key={active.title}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md max-w-sm"
            >
              <motion.div layoutId={`image-${active.title}`}>
                <Image
                  src={active.src}
                  alt={active.title}
                  width={500}
                  height={500}
                  className="h-60 rounded-2xl object-cover"
                />
              </motion.div>
              <div className="p-6 flex flex-col items-start">
                <motion.p
                  layoutId={`title-${active.title}`}
                  className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
                >
                  {active.title}
                </motion.p>
                <motion.p
                  layoutId={`description-${active.title}`}
                  className="text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {active.description}
                </motion.p>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-600 dark:text-neutral-400"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}`}
            onClick={() => setActive(item)}
            key={item.title}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md cursor-pointer"
          >
            <motion.div layoutId={`image-${item.title}`}>
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={500}
                className="h-60 rounded-2xl object-cover"
              />
            </motion.div>
            <div className="p-6 flex flex-col items-start">
              <motion.p
                layoutId={`title-${item.title}`}
                className="text-lg font-bold text-neutral-800 dark:text-neutral-100"
              >
                {item.title}
              </motion.p>
              <motion.p
                layoutId={`description-${item.title}`}
                className="text-sm text-neutral-500 dark:text-neutral-300"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, callback])
}
