"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarRight } from "@/components/sidebar-right";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

function Page() {
  const router = useRouter();

  return (
    <SidebarProvider
      defaultOpen={true}
      style={{ "--sidebar-width": "260px" } as React.CSSProperties}
      className="flex flex-col"
    >
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
          <div className="flex flex-col items-center p-6 bg-black-100 min-h-screen">
            {/* Back Button container with explicit left alignment */}
            <div className="w-full max-w-4xl flex justify-start mb-4">
              <Button
                className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg"
                onClick={() => router.push('/course')}
                size="sm"
              >
                Back
              </Button>
            </div>
            
            <div className="w-full max-w-4xl">
              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black rounded-lg shadow-lg">
                <video controls className="w-full h-full rounded-lg">
                  <source src="/videos/sample-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Details (Overview) */}
              <div className="mt-4 p-4 bg-black-800 rounded-lg shadow-md relative">
                <h1 className="text-xl font-semibold text-white">Introduction to Web Development</h1>
                <p className="text-gray-400 mt-2">
                  This video covers the basics of web development, including front-end and back-end technologies.
                </p>

                {/* Quiz Button - Positioned at the top-right corner */}
                <div className="absolute top-4 right-4">
                  <Button
                    className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                    onClick={() => router.push('/quiz')}
                  >
                    Take Quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
        <SidebarRight />
      </div>
    </SidebarProvider>
  );
}

export default Page;