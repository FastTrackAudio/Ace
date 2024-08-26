import React from "react"
import { Meteors } from "@/components/ui/meteors"

export function MeteorsDemo() {
  return (
    <div className="h-full w-full">
      <div className=" w-full relative h-full">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80]  rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Elevate Your Sound, <br />
            Accelerate Your Success
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Utilize our custom tools to eliminate miscommunication and ensure we
            deliver exactly what you need. Focus on what matters—pay only for
            the work, not unnecessary back-and-forth
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore Our Tools
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  )
}
