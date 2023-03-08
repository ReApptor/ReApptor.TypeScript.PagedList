
/**
 * Represents a subset of input items that can be individually accessed by index and contains metadata about the superset collection of objects this subset was created from.
 */
export default interface IPagedList<out T = {}> {

    /**
     * The page items.
     */
    readonly items: T[];

    /**
     * The one-based page index is in the superset.
     */
    readonly pageNumber: number;

    /**
     * The maximum size of any page.
     */
    readonly pageSize: number;

    /**
     * The total number of pages within the superset
     */
    readonly pageCount: number;

    /**
     * The total number of elements contained within the superset.
     */
    readonly totalItemCount: number;

    /**
     * Returns true if the page number is higher than 1, showing that the subset is not the first within the superset.
     */
    readonly hasPreviousPage: boolean;

    /**
     * Returns true if the page number is less than the page count, showing that the subset is not the latest within the superset.
     */
    readonly hasNextPage: boolean;

    /**
     * Returns true if the page number is 1, showing that the subset is the first within the superset.
     */
    readonly isFirstPage: boolean;

    /**
     * Returns true if the page number equals the page count, showing that the subset is the last within the superset.
     */
    readonly isLastPage: boolean;

    /**
     * The zero-based index of the first item in the paged subset within the superset.
     */
    readonly firstItemIndex: number;

    /**
     * The zero-based index of the last item in the paged subset within the superset.
     */
    readonly lastItemIndex: number;
}
