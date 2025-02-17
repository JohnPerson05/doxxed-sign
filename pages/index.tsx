"use client"

import { useState } from "react"
import { Courier_Prime } from "next/font/google"
import { RedactedText } from "./redacted-text"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

const courier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
})

export default function ClassifiedDocument() {
  const [currentPage, setCurrentPage] = useState(1)

  const togglePage = () => {
    setCurrentPage(currentPage === 1 ? 2 : 1)
  }

  return (
    <div className="min-h-screen bg-neutral-900 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-[#C4A484] p-6 md:p-12 rounded-lg shadow-2xl relative">
        {/* Folder texture overlay */}
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classs.jpg-Pwqy7OYjAE9IKm3ukHAuQL7b4zf8PK.jpeg')] opacity-30 rounded-lg" />

        <div className="relative">
          {currentPage === 1 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Photo */}
              <div className="space-y-4">
              <div className="bg-white p-4 rotate-[-2deg] shadow-lg bottom-4" >
              <div className="bg-neutral-900 bg-[url('/megan.jpg')] aspect-[3/4] relative flex items-end justify-center">
              <div className={courier.className}>
                <div className="text-center font-bold text-neutral-800 mb-8">
                    MEGAN WANG 
                    <br />
                    &quot;AKA&quot;
                    <br />
                    SIGN INTERN
                </div>
              </div>
              </div>
            </div>
                <div className="h-6 w-32 mx-auto bg-neutral-800/20 backdrop-blur-sm" />
              </div>

              {/* Right side - Document */}
              <div className="bg-[#f4e4bc] p-6 shadow-lg relative">
                <div className="absolute top-4 right-4 rotate-[-20deg] text-red-600 border-4 border-red-600 px-4 py-2 text-2xl font-bold opacity-80">
                  TOP SECRET
                </div>

                <div className={courier.className}>
                  <div className="space-y-4 text-neutral-800">
                    <div className="text-center font-bold mb-8">
                      CLASSIFIED
                      <br />
                      DEPARTMENT OF JUSTICE
                    </div>

                    <p>Memorandum for: Megan Wang</p>
                    <p>
                      Subject: <RedactedText>CLASSIFIED</RedactedText>
                    </p>
                    <p>Date: 02/17/2025</p>

                    <div className="space-y-2">
                      <p>
                        Details: On 2024, <RedactedText>subject</RedactedText> participated in the mission.
                      </p>

                      <p>
                        Through internal agency channels, <RedactedText>subject</RedactedText> was given the name of{" "}
                        <RedactedText>CLASSIFIED</RedactedText> an individual of interest.
                      </p>

                      <p>
                        <RedactedText>Subject</RedactedText> is reported to have done confidential work in secret
                        service and to have an unusual and interesting general background.
                      </p>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <div>
                        <p>J.P. Sign</p>
                        <p>Acting Director of Secret Service</p>
                        <div className="italic mt-2">J. Sign</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#f4e4bc] p-6 shadow-lg relative">
              <div className="absolute top-4 right-4 rotate-[-20deg] text-red-600 border-4 border-red-600 px-4 py-2 text-2xl font-bold opacity-80">
                TOP SECRET
              </div>

              <div className={courier.className}>
                <h2 className="text-2xl font-bold mb-4 text-center">Compiled Evidence</h2>
                <Image
                  src="/collage.jpg"
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
          )}

          {/* Navigation arrow */}
          <button
            onClick={togglePage}
            className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-neutral-800 text-white p-2 rounded-full shadow-lg hover:bg-neutral-700 transition-colors"
            aria-label={currentPage === 1 ? "Next page" : "Previous page"}
          >
            {currentPage === 1 ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>
      </div>
    </div>
  )
}

