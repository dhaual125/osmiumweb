"use client"

import { useRouter } from 'next/navigation'
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarRight } from "@/components/sidebar-right"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ArrowLeft } from 'lucide-react'

interface SubTopicProps {
  title: string;
  description: string;
}

function SubTopic({ title, description }: SubTopicProps) {
  return (
    <div className="p-4 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      <h1 className="text-xl font-semibold text-white-900">{title}</h1>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  )
}

function VideoPlayer() {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
      <video 
        controls 
        className="w-full h-full rounded-lg"
        onError={(e) => console.error("Video loading error:", e)}
      >
        <source src="/videos/sample-video.mp4" type="video/mp4" />
        <p className="text-white p-4">
          Your browser does not support the video tag. Please try a different browser.
        </p>
      </video>
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
            <div className="flex flex-1 flex-col gap-6 p-8 relative">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h- w-5 mb-"
                onClick={() => router.push('/course')}
                aria-label="Go back"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              
              <div>
                <h1 className="text-3xl font-bold text-white-900">Career Path</h1>
                <p className="text-gray-600 mt-2">Explore your journey in technology and development</p>
              </div>

              <VideoPlayer />

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
