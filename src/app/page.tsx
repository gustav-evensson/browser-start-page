import BookmarkGrid from "@/components/bookmarks/BookmarkGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BookmarkGrid />
    </main>
  );
}
