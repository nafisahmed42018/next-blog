'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
interface PaginationProps {
  page: number
  hasPrev: boolean
  hasNext: boolean
}

const Pagination: React.FC<PaginationProps> = ({ page, hasPrev, hasNext }) => {
  const router = useRouter()

  return (
    <div
      className={`py-12 md:px-4 flex items-center ${
        hasPrev ? 'justify-between' : 'justify-end'
      }`}
    >
      {hasPrev && (
        <Button
          onClick={() => router.push(`?page=${Number(page) - 1}`)}
        >
          {' '}
          Previous
        </Button>
      )}
      {hasNext && (
        <Button
          className="w-[90px]"
          onClick={() => router.push(`?page=${Number(page) + 1}`)}
        >
          {' '}
          Next
        </Button>
      )}
    </div>
  )
}

export default Pagination
