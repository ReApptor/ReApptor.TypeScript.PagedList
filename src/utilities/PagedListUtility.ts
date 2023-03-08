import IPagedList from "../interfaces/IPagedList";

export default class PagedListUtility {

    public static toPagedList<T>(items: readonly T[] | null | undefined, pageNumber: number, pageSize: number): IPagedList<T> {

        items = items ?? [];

        if (pageNumber <= 0) {
            pageNumber = 1;
        }

        if (pageSize <= 0) {
            pageSize = Number.MAX_SAFE_INTEGER;
        }

        const totalItemCount: number = items.length;

        let pageCount: number = Math.trunc(totalItemCount / pageSize);

        if (pageCount === 0) {
            pageCount = 1;
        } else if (totalItemCount > pageCount * pageSize) {
            pageCount++;
        }

        if (pageNumber > pageCount) {
            pageNumber = 1; //pageCount
        }

        const firstIndex: number = (pageNumber - 1) * pageSize;

        const pageItems: T[] = items.slice(firstIndex, firstIndex + pageSize);

        const lastIndex: number = (pageItems.length > 1)
            ? firstIndex + pageItems.length - 1
            : firstIndex;

        return {
            items: pageItems,
            pageSize: pageSize,
            totalItemCount: totalItemCount,
            pageNumber: pageNumber,
            pageCount: pageCount,
            hasPreviousPage: (pageNumber > 1),
            hasNextPage: (pageNumber < pageCount),
            isFirstPage: (pageNumber == 1),
            isLastPage: (pageNumber >= pageCount),
            firstItemIndex: firstIndex,
            lastItemIndex: lastIndex
        } as IPagedList<T>;
    }
}