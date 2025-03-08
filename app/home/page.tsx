"use client"

import type React from "react"
import Link from "next/link"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarRight } from "@/components/sidebar-right"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
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
            {/* Main Content Section */}
            <div className="flex flex-1 flex-col gap-4 p-4">
              {/* Recommended Courses Section */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white-800 dark:text-white">
                  Recommended Courses
                  <span className="ml-2 text-sm text-gray-500 font-normal">
                    (Find the best for you)
                  </span>
                </h2>

              </div>

              {/* Recommended Courses Grid */}
              <div className="w-full lg:max-w-[calc(100vw-22rem)] overflow-x-auto scrollbar-hide">


  <div className="flex whitespace-nowrap gap-4 p-2">
    <Link
      href="/course"
      className="group w-80 flex-shrink-0 flex flex-col rounded-2xl transition-all duration-300 
      hover:shadow-xl hover:transform hover:scale-105 overflow-hidden"
    >
      <div className="aspect-video rounded-2xl bg-muted/50 group-hover:bg-muted/40 
      transition-colors duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-medium group-hover:text-blue-600 
        dark:group-hover:text-blue-400 transition-colors duration-300">
          Course Title 1
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Course description here
        </p>
      </div>
    </Link>

    <Link
      href="/course"
      className="group w-80 flex-shrink-0 flex flex-col rounded-2xl transition-all duration-300 
      hover:shadow-xl hover:transform hover:scale-105 overflow-hidden"
    >
      <div className="aspect-video rounded-2xl bg-muted/50 group-hover:bg-muted/40 
      transition-colors duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-medium group-hover:text-blue-600 
        dark:group-hover:text-blue-400 transition-colors duration-300">
          Course Title 2
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Course description here
        </p>
      </div>
    </Link>

    <Link
      href="/course"
      className="group w-80 flex-shrink-0 flex flex-col rounded-2xl transition-all duration-300 
      hover:shadow-xl hover:transform hover:scale-105 overflow-hidden"
    >
      <div className="aspect-video rounded-2xl bg-muted/50 group-hover:bg-muted/40 
      transition-colors duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-medium group-hover:text-blue-600 
        dark:group-hover:text-blue-400 transition-colors duration-300">
          Course Title 3
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Course description here
        </p>
      </div>
    </Link>

    <Link
      href="/course"
      className="group w-80 flex-shrink-0 flex flex-col rounded-2xl transition-all duration-300 
      hover:shadow-xl hover:transform hover:scale-105 overflow-hidden"
    >
      <div className="aspect-video rounded-2xl bg-muted/50 group-hover:bg-muted/40 
      transition-colors duration-300" />
      <div className="p-4">
        <h3 className="text-lg font-medium group-hover:text-blue-600 
        dark:group-hover:text-blue-400 transition-colors duration-300">
          Course Title 4
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Course description here
        </p>
      </div>
    </Link>
  </div>
</div>


              {/* Spacing between sections */}
              <div className="mt-8" />

              {/* History Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-white-800 dark:text-white">
                    History
                    <span className="ml-2 text-sm text-gray-500 font-normal">
                      (Recently viewed)
                    </span>
                  </h2>

                </div>

                {/* History Grid */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <Link
                      key={index}
                      href="/course"
                      className="group relative aspect-video rounded-2xl bg-muted/30 
                   overflow-hidden transition-all duration-300 
                   hover:transform hover:scale-105 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 
                        transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 
                        transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 
                        bg-gradient-to-t from-black/50 to-transparent">
                        <p className="text-white text-sm">Last viewed: 2 days ago</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ... existing card content ... */}




            </div>
          </SidebarInset>

          <SidebarRight />
        </div>
      </SidebarProvider>

      {/* <LoginForm/> */}


    </div>
  )
}
