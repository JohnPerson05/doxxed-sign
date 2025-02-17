"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Courier_Prime } from "next/font/google"

const courier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
})

export default function CollagePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-neutral-900 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-[#C4A484] p-6 md:p-12 rounded-lg shadow-2xl relative">
        {/* Folder texture overlay */}
        <div className="absolute inset-0 bg-[url('/megan.jpg)] opacity-30 rounded-lg" />

        <div className="relative space-y-8">
          <div className="bg-[#f4e4bc] p-6 shadow-lg relative">
            <div className="absolute top-4 right-4 rotate-[-20deg] text-red-600 border-4 border-red-600 px-4 py-2 text-2xl font-bold opacity-80">
              TOP SECRET
            </div>

            <div className={courier.className}>
              <h2 className="text-2xl font-bold mb-4 text-center">Evidence Collage</h2>
              <Image
                src="/placeholder.svg"
                alt="Classified Evidence Collage"
                width={600}
                height={400}
                className="w-full h-auto object-cover mb-4"
              />
              <p className="text-sm text-neutral-800">
                This collage contains various pieces of evidence related to the classified operation. The images have
                been carefully selected and arranged to provide a comprehensive overview of the mission&apos;s key elements
                and findings. Further details are available in the accompanying report.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => router.push("/")}
              className="bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition-colors"
            >
              Back to Main Document
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

