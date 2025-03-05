"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarRight } from "@/components/sidebar-right"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

function SubTopic({ title, description, isMain, list }: { title: string, description: string, isMain?: boolean, list?: { title: string, content: string }[] }) {
  return (
    <div className="p-4 border-b dark:border-gray-700 bg-gray-900 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
      <h2 className={`${isMain ? "text-xl font-semibold" : "text-lg font-medium"} text-gray-200`}>{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
      {list && (
        <ul className="list-disc pl-5 text-sm text-gray-400">
          {list.map((item, index) => (
            <li key={index}><strong>{item.title}:</strong> {item.content}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Course() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider
        defaultOpen={true}
        style={{
          "--sidebar-width": "350px",
        } as React.CSSProperties}
        className="flex flex-col"
      >
        <div className="flex flex-1">
          <AppSidebar />

          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <SubTopic 
                title="Web Development" 
                description="Web development is the process of creating, designing, and maintaining websites and web applications. It includes various aspects such as web design, front-end and back-end development, database management, and server-side scripting." 
                isMain 
              />
              <SubTopic 
                title="Overview" 
                description="Web development involves building and maintaining websites, covering front-end, back-end, and full-stack development. It includes technologies like HTML, CSS, JavaScript, frameworks, databases, and server-side scripting." 
                isMain 
                list={[
                  { title: "Front-end Development", content: "Focuses on the visual and interactive aspects of a website, ensuring a seamless user experience." },
                  { title: "Back-end Development", content: "Manages the server-side operations, databases, and application logic." },
                  { title: "Full-stack Development", content: "A combination of both front-end and back-end development." }
                ]}
              />
              <SubTopic 
                title="Front-end Development" 
                description="Uses technologies like HTML, CSS, and JavaScript to create visually appealing interfaces and responsive designs. Frameworks like React.js, Vue.js, and Angular are widely used." 
              />
              <SubTopic 
                title="Back-end Development" 
                description="Manages the server, database, and application logic using languages like Node.js, Python (Django/Flask), PHP, and Ruby on Rails. It ensures smooth communication between the database and front-end." 
              />
              <SubTopic 
                title="Full-stack Development" 
                description="Combines both front-end and back-end development skills to create complete web applications." 
              />
              <SubTopic 
                title="Database Management" 
                description="Handles the storage, retrieval, and management of data using databases like MySQL, PostgreSQL, MongoDB, and Firebase." 
              />
              <SubTopic 
                title="Version Control Systems" 
                description="Uses tools like Git and GitHub to track changes, collaborate with teams, and manage project versions effectively." 
              />
              <SubTopic 
                title="DevOps and Deployment" 
                description="Focuses on CI/CD pipelines, cloud services like AWS and Firebase, and tools like Docker and Kubernetes for scalable deployments." 
              />
              <SubTopic 
                title="Career Path in Web Development" 
                description="A career in web development offers multiple opportunities across different roles and industries. Here are some common career paths:" 
                isMain 
                list={[
                  { title: "Front-end Developer", content: "Specializes in creating user interfaces and user experiences using HTML, CSS, JavaScript, and frameworks like React and Vue.js." },
                  { title: "Back-end Developer", content: "Works on server-side logic, databases, and APIs using technologies like Node.js, Django, Ruby on Rails, and PHP." },
                  { title: "Full-stack Developer", content: "Combines both front-end and back-end skills to develop complete web applications." },
                  { title: "Web Designer", content: "Focuses on aesthetics and user experience, working with design tools and front-end technologies." },
                  { title: "DevOps Engineer", content: "Manages deployment, CI/CD pipelines, and server infrastructure to optimize performance and scalability." },
                  { title: "Freelancer or Entrepreneur", content: "Builds websites and applications independently or starts a web development business." }
                ]}
              />
            </div>
          </SidebarInset>

          <SidebarRight />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default Course;
