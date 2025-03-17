"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const usePagination = (totalPages: number) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const maxVisibleButtons = 3;
  const currentPage = searchParams.get("page") ?? 1;
  const currentPageIntoNumber = Number(currentPage);

  const onlyTenPages = Math.min(totalPages, 10);

  const handlePrevious = () => {
    if (currentPageIntoNumber > 1) {
      handlePageChange(currentPageIntoNumber - 1)();
    }
  };

  const handleNext = () => {
    if (currentPageIntoNumber < onlyTenPages) {
      handlePageChange(currentPageIntoNumber + 1)();
    }
  };

  const handlePageChange = (pageNumber: number) => () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    push(`${pathname}?${params.toString()}`);
  };

  const getDisplayedPages = () => {
    let start = Math.max(currentPageIntoNumber - Math.floor(maxVisibleButtons / 2), 1);
    let end = start + maxVisibleButtons - 1;

    if (end > onlyTenPages) {
      end = onlyTenPages;
      start = Math.max(end - maxVisibleButtons + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const displayedPages = getDisplayedPages();

  return { handlePrevious, handleNext, handlePageChange, displayedPages, currentPageIntoNumber, onlyTenPages };
};
