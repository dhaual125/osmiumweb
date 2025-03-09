"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarRight } from "@/components/sidebar-right"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ArrowLeft, PlayCircle } from 'lucide-react'

function SubTopic({
  title,
  description,
  list,
  onItemClick
}: {
  title: string,
  description: string,
  list?: { title: string, content: string, path?: string }[],
  onItemClick?: (path: string) => void
}) {
  return (
    <div className="p-4 shadow-lg transition-all duration-300">
      <h1 className="text-xl font-semibold  text-White-900">{title}</h1>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {list && (
        <ul className="list-disc text-sm  text-white-600 mt-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex flex-col p-3 mt-2 hover:bg-[#18181b] hover:text-[#fff] transition-colors duration-200 rounded-lg cursor-pointer"
              onClick={() => item.path && onItemClick?.(item.path)}
            >
              <strong>{item.title}:</strong> {item.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function VideoSection() {
  const router = useRouter()
  const videos = [
    { title: "Introduction", duration: "08:40", path: "/video" },
    { title: "Join Our Online Classroom!", duration: "04:01", path: "/video" },
    { title: "Introduction To Sketching", duration: "03:27", path: "/video" },
    { title: "How to Make Wireframe in Figma", duration: "34:54", path: "/video" },
    { title: "Figma Basic Introduction", duration: "12:40", path: "/video" },
    { title: "Where to use Figma", duration: "02:40", path: "/video" },
    { title: "Designing in Figma : Dashboard", duration: "54:40", path: "/video" },
    { title: "Designing in Figma : Mobile", duration: "32:54", path: "/video" },
    { title: "Auto Layout Properties", duration: "12:40", path: "/video" },
    { title: "How to Make Components", duration: "12:34", path: "/video" },
    { title: "How to Make Auto Layout", duration: "12:11", path: "/video" },
    { title: "How to Use Component", duration: "12:32", path: "/video" }
  ]

  const handleVideoClick = (path?: string) => {
    if (path) {
      router.push(path)
    }
  }

  return (
    <div className="p-4 shadow-lg mb-4">
      <h2 className="text-xl font-semibold text-White-900 mb-4">Sub Topic</h2>
      <div className="space-y-2">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => handleVideoClick(video.path)}
            className="flex items-center justify-between p-3  hover:bg-[#18181b] hover:text-[#fff] transition-colors duration-200  rounded-lg cursor-pointer transition-colors-"
          >
            <div className="flex items-center gap-3">
              <PlayCircle className="h-5 w-5 text-white-600" />
              <span className="text-white-800">{video.title}</span>
            </div>
            <span className="text-gray-600 text-sm">{video.duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Course() {
  const router = useRouter()

  const handleCareerClick = (path: string) => {
    router.push(path)
  }

  return (
    <div className="[--header-height:calc(theme(spacing.14))] relative">
      <SidebarProvider
        defaultOpen={true}
        style={{
          "--sidebar-width": "260px",
        } as React.CSSProperties}
        className="flex flex-col"
      >
        <div className="flex flex-1">
          <AppSidebar />

          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4 relative">

              {/* Back Button at Top Right */}
              <div className="relative">
                <button
                  className="absolute top-4 left-4 bg-black-500  text-white px-4 py-2 rounded-lg"
                  onClick={() => router.push('/home')
                  }
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="pt-16">
                  <SubTopic title="Web Development" description="" />
                </div>
              </div>

              <SubTopic
                title="Overview"
                description="Web development involves building and maintaining websites, covering front-end, back-end, and full-stack development."

              />

              <VideoSection />

              <SubTopic
                title="Career Path in Web Development"
                description="A career in web development offers multiple opportunities across different roles."
                list={[
                  { title: "Front-end Developer", content: "Specializes in creating user interfaces and experiences.", path: "/career" },
                  { title: "Back-end Developer", content: "Works on server-side logic and databases.", path: "/career" },
                  { title: "Full-stack Developer", content: "Develops complete web applications.", path: "/career" },
                  { title: "Web Designer", content: "Focuses on aesthetics and user experience.", path: "/career" },
                  { title: "DevOps Engineer", content: "Manages deployment and server infrastructure.", path: "/career" }
                ]}
                onItemClick={handleCareerClick}
              />
            </div>
          </SidebarInset>

          <SidebarRight />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Course
