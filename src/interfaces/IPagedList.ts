export default interface IPagedList<T = {}> {

    /*
     * The page items.
     */
    readonly items: readonly T[];

    /*
     * The page index is in the superset starting from 1.
     */
    readonly pageNumber: number;

    /*
     * The maximum size of any page.
     */
    readonly pageSize: number;

    /*
     * The total number of pages within the superset
     */
    readonly pageCount: number;

    /*
     * The total number of elements contained within the superset.
     */
    readonly totalItemCount: number;

    readonly hasPreviousPage: boolean;

    readonly hasNextPage: boolean;

    readonly isFirstPage: boolean;

    readonly isLastPage: boolean;
}
