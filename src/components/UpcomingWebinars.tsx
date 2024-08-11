'use client'
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinars()
  {
    const featuredWebinars = [
        {
            "title": "Shape of You",
            "description": "A catchy pop song by Ed Sheeran, featuring a blend of dancehall and tropical house influences.",
            "slug": "shape-of-you",
            "isFeatured": true
        },
        {
            "title": "Blinding Lights",
            "description": "A synthwave track by The Weeknd that became a global hit, known for its nostalgic 80s sound.",
            "slug": "blinding-lights",
            "isFeatured": true
        },
        {
            "title": "Bohemian Rhapsody",
            "description": "A classic rock anthem by Queen, featuring an operatic section and diverse musical styles.",
            "slug": "bohemian-rhapsody",
            "isFeatured": false
        },
        {
            "title": "Rolling in the Deep",
            "description": "A soulful song by Adele, blending blues, gospel, and pop, which became one of her biggest hits.",
            "slug": "rolling-in-the-deep",
            "isFeatured": false
        },
        {
            "title": "Stairway to Heaven",
            "description": "A legendary rock song by Led Zeppelin, often regarded as one of the greatest rock songs of all time.",
            "slug": "stairway-to-heaven",
            "isFeatured": true
        }
    ]











  
  return(
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className= "text-center">
          <h2  className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">Enhance Your  Musical Journey</p>
        </div>
        <div className="mt-10">
        <HoverEffect items={featuredWebinars.map(webinar => (
          {

            title:webinar.title,
            description:webinar.description,
            link:'/'
          }
        )) } />
        
        </div>
        <div className="mt-10 text-center">
        
        <Link href={"/courses"} 
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        
          View All Webinar</Link>
       
          
        </div>
      </div>
      
    </div>
  )
}
export default UpcomingWebinars;