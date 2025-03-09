"use client"

import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarRight } from "@/components/sidebar-right"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ArrowLeft, PlayCircle } from 'lucide-react'

function SubTopic({
  title,
  description
}: {
  title: string,
  description: string
}) {
  return (
    <div className="p-4 shadow-lg transition-all duration-300">
      <h1 className="text-xl font-semibold text-white-900">{title}</h1>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}

function VideoPlayer() {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg shadow-lg">
      <video controls autoPlay className="w-full h-full rounded-lg">
        <source src="/videos/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

function YouTubeVideoSection() {
  const router = useRouter()
  const videos = [
    { title: "Introduction to Web Development", duration: "12:30", path: "/youtube-video-1" },
    { title: "Building a Responsive Website", duration: "15:45", path: "/youtube-video-2" },
    { title: "JavaScript Basics for Web Dev", duration: "10:20", path: "/youtube-video-3" },
    { title: "CSS Flexbox and Grid", duration: "08:50", path: "/youtube-video-4" },
    { title: "React Fundamentals", duration: "20:00", path: "/youtube-video-5" },
  ]

  const handleVideoClick = (path?: string) => {
    if (path) {
      router.push(path)
    }
  }

  return (
    <div className="p-4 shadow-lg mb-4">
      <h2 className="text-xl font-semibold text-white-900 mb-4">Related Videos</h2>
      <div className="space-y-2">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => handleVideoClick(video.path)}
            className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors video-card"
          >
            <div className="flex items-center gap-3">
              <PlayCircle className="h-5 w-5 text-White-600" />
              <span className="text-White-800 video-title">{video.title}</span>
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
        style={{ "--sidebar-width": "260px" } as React.CSSProperties}
        className="flex flex-col"
      >
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-6 p-4 relative">
              <button
                className="absolute top-4 left-4 bg--500 hover:bg--600 text-white px-4 py-2 rounded-lg"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <VideoPlayer />
              <YouTubeVideoSection />

              <SubTopic
                title="Career Description"
                description="Web developers work on website functionality, performance, and user experience. They can specialize in front-end, back-end, or full-stack development."
              />

              <SubTopic
                title="Suggestions"
                description="To excel in web development, continuously update your skills, build projects, and network with industry professionals."
              />

              <SubTopic
                title="Tips"
                description="Practice coding regularly, contribute to open-source projects, and stay updated with the latest industry trends."
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


