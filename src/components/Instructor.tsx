'use client'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";


function Instructors(){
  const instructors = [
    {
      id: 1,
      name: "Alice Wonder",
      designation: "Full Stack Developer",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3750&q=80",
    },
    {
      id: 2,
      name: "Mark Twain",
      designation: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1603415526960-f74d803ba9ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Olivia Benson",
      designation: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Lara Croft",
      designation: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1528763380143-65b3b9d4c9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Bruce Wayne",
      designation: "Cybersecurity Analyst",
      image:
        "https://images.unsplash.com/photo-1541534741688-94538b4a4d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3575&q=80",
    },
    {
      id: 6,
      name: "Natasha Romanoff",
      designation: "Network Engineer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  








  return(
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items center justify-center h-full">
        <h2  className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p  className="text-base md:text-lg text-white text-center mb-4"> Discover the talented professionals who will guide your musical journey</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full"><AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}
export default Instructors;