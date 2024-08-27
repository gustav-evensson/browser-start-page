import { PlusCircleIcon, PlusIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import BookmarkLink from "./BookmarkLink"
import { AddBookmarkButton } from "./AddBookmarkButton"

const bookmarks = [
  {
    id: 1, 
    title: 'Bookmark 1',
    url: 'https://bookmark1.com',
  },
  {
    id: 2, 
    title: 'Bookmark 2',
    url: 'https://bookmark2.com',
  },
  {
    id: 3, 
    title: 'Bookmark 3',
    url: 'https://bookmark3.com',
  },
]

export default function BookmarkGrid() {
  return (
    <div className="w-full max-w-lg mx-auto grid grid-cols-2 gap-2">
      {bookmarks.map((bookmark) => (
        <BookmarkLink key={bookmark.id} title={bookmark.title} url={bookmark.url} />
      ))}
      <AddBookmarkButton fullSpan={bookmarks.length % 2 === 0} />
    </div>
  )
}