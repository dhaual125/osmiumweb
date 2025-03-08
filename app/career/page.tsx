"use client"

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
      <h1 className="text-xl font-semibold text-white-900">{title}</h1>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {list && (
        <ul className="list-disc pl-5 text-sm text-white-600 mt-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="mb-2 cursor-pointer hover:text-black-500"
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
  ]

  const handleVideoClick = (path?: string) => {
    if (path) {
      router.push(path)
    }
  }

  return (
    <div className="p-4 shadow-lg mb-4">
      <h2 className="text-xl font-semibold text-white-900 mb-4">Sub Topic</h2>
      <div className="space-y-2">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => handleVideoClick(video.path)}
            className="flex items-center justify-between p-3  rounded-lg cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <PlayCircle className="h-5 w-5 text-White-600" />
              <span className="text-White-800">{video.title}</span>
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

  return (
    <div className="[--header-height:calc(theme(spacing.14))] relative">
      <SidebarProvider
        defaultOpen={true}
        style={
          {
            "--sidebar-width": "260px",
          } as React.CSSProperties
        }
        className="flex flex-col"
      >
        <div className="flex flex-1">
          <AppSidebar />

          <SidebarInset>
            <div className="flex flex-1 flex-col gap-6 p-4 relative">
              
              {/* Back Button at Top Left */}
              <button
                className="absolute top-4 left-4 bg--500 hover:bg--600 text-white px-4 py-2 rounded-lg"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="mt-6">
                <SubTopic title="Web Development" description="" />
              </div>

              <SubTopic
                title="Overview"
                description="Web development involves building and maintaining websites, covering front-end, back-end, and full-stack development."
                list={[
                  { title: "Front-end Development", content: "Focuses on the visual and interactive aspects of a website." },
                  { title: "Back-end Development", content: "Manages the server-side operations and databases." },
                  { title: "Full-stack Development", content: "Combination of both front-end and back-end development." }
                ]}
              />

              <VideoSection />
            </div>
          </SidebarInset>

          <SidebarRight />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Course