"use client";

import { usePagination } from "@/hooks";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui";

type DynamicPaginationProps = { totalPages: number };

export const DynamicPagination = ({ totalPages }: DynamicPaginationProps) => {
  const { displayedPages, handleNext, handlePageChange, handlePrevious, currentPageIntoNumber, onlyTenPages } = usePagination(totalPages);

  return (
    <Pagination className="flex justify-end">
      <PaginationContent>
        {currentPageIntoNumber > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} className="cursor-pointer" />
          </PaginationItem>
        )}

        {displayedPages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink onClick={handlePageChange(pageNumber)} isActive={pageNumber === currentPageIntoNumber} className="cursor-pointer">
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {displayedPages[displayedPages.length - 1] < onlyTenPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPageIntoNumber < onlyTenPages && (
          <PaginationItem>
            <PaginationNext onClick={handleNext} className="cursor-pointer" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
