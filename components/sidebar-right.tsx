import * as React from "react";
import { Plus, Search } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { Calendars } from "./calendars"; // Fixed typo in import
import { DatePicker } from "./date-picker";
// import { NavUser } from "./nav-user";
import { Label } from "./ui/label";
import { SidebarInput } from "./ui/sidebar";

// Add the missing data object
const data = {
  // user: {
  //   name: "User",
  //   email: "user@example.com",
  //   avatar: "/avatars/user.jpg",
  // },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Other",
      items: ["Reminders", "Tasks"],
    },
  ],
};

// Add the SidebarSeparator component
function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      className={`my-4 ${className}`}
      {...props}
    />
  );
}


// Add the SearchForm component
function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput 
          id="search" 
          placeholder="Type to search..." 
          className="h-8 pl-7" 
        />
        <Search 
          className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" 
        />
      </div>
    </form>
  );
}

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border border-b">
        <div className="flex flex-col gap-2 p-4">
          <SearchForm />
          {/* <NavUser user={data.user} /> */}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
 );
}