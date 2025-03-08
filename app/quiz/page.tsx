import React from 'react'
import MCQFlashcardQuiz from "./flashcard-quize"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarRight } from "@/components/sidebar-right"

export default function page() {
  return (
    <>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "260px",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">All Quizzes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Current Quiz</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex h-[calc(100vh-65px)]">
            {/* Left side - Quiz Component */}
            <div className="flex-1 p-6 border-r">
              <MCQFlashcardQuiz />
            </div>
            
            {/* Right Sidebar */}
            <SidebarRight />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
