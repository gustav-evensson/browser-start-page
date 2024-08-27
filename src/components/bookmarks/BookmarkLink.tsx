import Link from "next/link";
import Image from "next/image";

type BookmarkLinkProps = {
  title: string;
  url: string;
};

export default function BookmarkLink({ title, url }: BookmarkLinkProps) {
  return (
    <Link href={url} className="p-4 rounded-md flex items-center justify-start gap-4 bg-secondary h-16">
      <div className="size-8 rounded-full bg-foreground"></div>
      <span>{title}</span>
    </Link>
  );
}
