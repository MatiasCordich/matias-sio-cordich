"use client"
import Navbarskills from "@/components/navbarskills/Navbarskills"

export default function SkillsLayout({ children }) {
  return (
    <>
    <main>
      <Navbarskills/>
        {children}
    </main>
    </>
  )
}
