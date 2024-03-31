"use client";

import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50"></div>
        <Overlay />
      </div>
      <Footer
        isFavorite={isFavorite}
        title={title}
        authorLabel={authorLabel}
        createdAtLabel={createdAtLabel}
        onClick={() => {}}
        disabled={false}
      />
    </Link>
  );
};

BoardCard.Skelton = function BoardCardSkelton() {
  return (
    <div className="group aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
