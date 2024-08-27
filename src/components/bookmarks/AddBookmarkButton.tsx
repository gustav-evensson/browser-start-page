
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BookmarkPlusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export function AddBookmarkButton({ fullSpan }: { fullSpan?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn("w-full flex items-center justify-center bg-secondary rounded-md h-16", {
            "col-span-2": fullSpan,
          })}
        >
          <PlusIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add bookmark</DialogTitle>
          <DialogDescription>Provide information about the bookmark</DialogDescription>
        </DialogHeader>
        <div>
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" placeholder="Example website" className="mt-1 mb-2" />
          <Label htmlFor="url" className="text-right">
            URL
          </Label>
          <Input id="url" placeholder="https://exmaple.com" className="mt-1" />
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full gap-2">
            Add bookmark
            <BookmarkPlusIcon className="size-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
