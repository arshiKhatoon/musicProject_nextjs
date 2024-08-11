'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote: "This music school has completely transformed my approach to the piano. The instructors are patient, knowledgeable, and truly invested in my progress. I used to struggle with certain pieces, but with their guidance, I’ve been able to master challenging compositions and play with greater expression. The community here is supportive, and I’ve made lasting friendships with fellow students.",
    name: "Jessica Lee",
    title: "Piano Student"
  },
  {
    quote: "I never thought I could learn to play the guitar, but this school made it possible! The lessons are engaging, and I’ve gained so much confidence. The instructors break down complex techniques into manageable steps, making it easy for me to follow along. I can now play songs I’ve always loved, and I’m even starting to write my own music. The environment is welcoming and encourages creativity.",
    name: "Michael Harris",
    title: "Guitar Student"
  },
  {
    quote: "The vocal training I received here has been phenomenal. My voice has improved beyond what I imagined, and I’m now performing with confidence. The teachers provided personalized feedback that helped me refine my technique and expand my vocal range. I’ve also had opportunities to perform in front of live audiences, which has been an incredible experience. I highly recommend this school to anyone serious about improving their singing.",
    name: "Samantha Richards",
    title: "Vocal Student"
  },
  {
    quote: "As a beginner, I was nervous about learning the violin, but the teachers here made me feel at ease. I’m now playing pieces I never thought I could. The instructors are incredibly supportive and provide clear, step-by-step instructions that make learning enjoyable. I’ve noticed significant progress in my playing, and I’m excited to continue my musical journey. The school offers a great balance of technical training and musicality.",
    name: "Daniel Thompson",
    title: "Violin Student"
  },
  {
    quote: "The drumming classes are fantastic! The energy and passion of the instructors have made learning drums a fun and rewarding experience. I’ve learned various drumming techniques and styles, and I’m now comfortable playing in a band setting. The school also emphasizes the importance of rhythm and timing, which has improved my overall musicality. I look forward to each lesson and the progress I make every week.",
    name: "Emily Carter",
    title: "Drumming Student"
  },
  {
    quote: "My experience learning the saxophone here has been amazing. The instructors are incredibly knowledgeable and know how to keep the lessons both fun and challenging. I’ve gone from being a complete beginner to playing complex jazz pieces. The school’s focus on both technique and improvisation has really helped me find my own style. I never imagined I’d be able to perform in a jazz ensemble, but now I do it with confidence!",
    name: "John Davis",
    title: "Saxophone Student"
  },
  {
    quote: "The flute lessons at this school are exceptional. The teacher's approach is detailed and meticulous, which has greatly improved my tone and breath control. I’ve also appreciated the emphasis on musical expression and interpretation, which has brought new life to the pieces I play. The school provides a nurturing environment that inspires growth and a deep love for music.",
    name: "Sophia Martinez",
    title: "Flute Student"
  },
  {
    quote: "Learning the cello here has been a life-changing experience. The instructors are masters of their craft and have a unique ability to connect with students of all levels. I’ve made rapid progress in both technical skills and musicality. The school also offers opportunities to perform in orchestras and smaller ensembles, which has greatly enriched my learning experience.",
    name: "Alexander Wilson",
    title: "Cello Student"
  },
  {
    quote: "Taking trumpet lessons at this school has been a fantastic journey. The instructors are not only great musicians but also excellent educators who tailor their teaching to each student's needs. I’ve improved my range, tone, and overall playing technique. The school also encourages participation in performances, which has given me the confidence to play in front of an audience. It’s been an incredibly rewarding experience.",
    name: "Lucas Bennett",
    title: "Trumpet Student"
  },
  {
    quote: "The music theory classes offered at this school are outstanding. They have provided me with a strong foundation in understanding the structure and language of music. The instructors break down complex concepts into digestible lessons that are easy to follow. I now feel much more confident in my ability to analyze and compose music, which has been invaluable to my growth as a musician.",
    name: "Olivia Johnson",
    title: "Music Theory Student"
  }
];




function MusicSchoolTestimonials(){
return(
  <div className="h-[40rem] w-full dark:bg-black 
  dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">Testimonal
  <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony:Voices of success</h2>
  <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-6xl">
    <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      /></div></div></div>
)
}
export default MusicSchoolTestimonials;