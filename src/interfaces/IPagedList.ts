export default interface IPagedList<T = {}> {

    /*
     * The page items.
     */
    items: T[];

    /*
     * The page index is in the superset starting from 1.
     */
    pageNumber: number;

    /*
     * The maximum size of any page.
     */
    pageSize: number;

    /*
     * The total number of pages within the superset
     */
    pageCount: number;

    /*
     * The total number of elements contained within the superset.
     */
    totalItemCount: number;
}