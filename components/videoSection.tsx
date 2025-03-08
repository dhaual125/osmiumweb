import { PlayCircle } from 'lucide-react'
import Link from 'next/link'

function VideoSection() {
  const videos = [
    { id: '1', title: "Introduction", duration: "08:40" },
    // ... other videos with IDs
  ]

  return (
    <div className="p-4 bg-gray-900 rounded-2xl shadow-lg mb-4">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Video Course</h2>
      <div className="space-y-2">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`/videos/${video.id}`}
            className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <PlayCircle className="h-5 w-5 text-gray-400" />
              <span className="text-gray-300">{video.title}</span>
            </div>
            <span className="text-gray-400 text-sm">{video.duration}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}