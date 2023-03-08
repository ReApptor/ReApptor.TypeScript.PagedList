import IPagedList from "../interfaces/IPagedList";
import PagedListUtility from "../utilities/PagedListUtility";

declare global {
    
    interface Array<T> {

        /**
         * Splits the input superset collection into pages (subsets) and returns the specific page (subset) by an index.
         * @param pageNumber - The page index is in the superset starting from 1.
         * @param pageSize - The maximum size of any page.
         * @returns IPagedList<T> - An IPagedList<T> object object that contains the specified subset and metadata about the input superset collection of objects this subset was created from.
         */
        toPagedList(pageNumber: number, pageSize: number): IPagedList<T>;
    }
    
}

export const ArrayExtensions = function () {

    if (Array.prototype.toPagedList == null) {
        Array.prototype.toPagedList = function <T>(pageNumber: number, pageSize: number): IPagedList<T> {
            return PagedListUtility.toPagedList(this, pageNumber, pageSize);
        };
    }

}

ArrayExtensions();