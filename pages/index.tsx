import { Courier_Prime } from "next/font/google"
import { RedactedText } from "./redacted-text"

const courier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
})

export default function ClassifiedDocument() {
  return (
    <div className="min-h-screen bg-neutral-900 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-[#C4A484] p-6 md:p-12 rounded-lg shadow-2xl relative">
        {/* Folder texture overlay */}
        <div className="absolute inset-0 bg-[url('/megan.jpg')] opacity-30 rounded-lg" />

        <div className="relative grid md:grid-cols-2 gap-8">
          {/* Left side - Photo */}
          <div className="space-y-4">
            <div className="bg-white p-4 rotate-[-2deg] shadow-lg bottom-4" >
              <div className="bg-neutral-900 bg-[url('/megan.jpg')] aspect-[3/4] relative flex items-end justify-center">
              <div className={courier.className}>
                <div className="text-center font-bold text-neutral-800 mb-8">
                    MEGAN WANG 
                    <br />
                    "AKA"
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
                    Details: On 2023, <RedactedText>subject</RedactedText> participated in the mission.
                  </p>

                  <p>
                    Through internal agency channels, <RedactedText>subject</RedactedText> was given the name of{" "}
                    <RedactedText>CLASSIFIED</RedactedText> an individual of interest.
                  </p>

                  <p>
                    <RedactedText>Subject</RedactedText> is reported to have done confidential work in secret service
                    and to have an unusual and interesting general background.
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
      </div>
    </div>
  )
}

