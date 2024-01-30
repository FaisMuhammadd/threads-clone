"use client"

import { deleteThread } from "@/lib/actions/thread.actions"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

interface Props {
  threadId: string
  currentUserId: string
  authorId: string
  parentId: string | null
  isComment?: boolean
}

const DeleteThread = ({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  if (currentUserId !== authorId || pathname === "/") return null

  return (
    <Image
      src="/assets/delete.svg"
      alt="delete"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
      onClick={async () => {
        await deleteThread(JSON.parse(threadId), pathname)
        if (!parentId || !isComment) {
          router.push("/")
        }
      }}
    />
  )
}

export default DeleteThread
