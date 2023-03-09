![ReApptor](https://raw.githubusercontent.com/ReApptor/ReApptor.TypeScript.PagedList/main/ReApptor.png)
# ReApptor TypeScript PagedList

It is a complete, fully tested pagination library for splitting the array into pages and selecting a specific page by an index.
It includes an `IPagedList` interface, a `PagedList` container, and an array `toPagedList` extension written in [TypeScript](https://www.typescriptlang.org/).

## Installation

Install from the command line:

```npm
npm install @reapptor/ts-paged-list
```

Install via package.json:

```npm
"@reapptor/ts-paged-list": "^1.*"
```

## Usage

Add `import "@reapptor/ts-paged-list";` into the main project file (i.e. index.ts) to register extensions.

Use array extension `toPagedList` to select the page a specific page by page index and size, for example: `[1,2,3,4,5].toPagedList(1, 2)`.

See more:
- [`IPagedList` interface description](#IPagedList).
- [`ToPagedList` extension description](#ToPagedList).
- [Some examples](#Examples)

## License

The ReApptor TypeScript PagedList package is licensed under the terms of the [MIT license](https://raw.githubusercontent.com/ReApptor/ReApptor.TypeScript.PagedList/main/LICENSE.md) and is available for free.

## Links
- [Overview](https://reapptor.github.io/ReApptor.TypeScript.PagedList/)
- [Source code](https://github.com/ReApptor/ReApptor.TypeScript.PagedList)
- [Package (GitHub)](https://github.com/ReApptor/ReApptor.TypeScript.PagedList/pkgs/npm/ts-paged-list)
- [Package (NPM)](https://www.npmjs.com/package/@reapptor/ts-paged-list)
- [Discussions](https://github.com/ReApptor/ReApptor.TypeScript.PagedList/discussions)
- [About ReApptor](https://www.reapptor.com)
- [ReApptor on GitHub](https://github.com/ReApptor)
- [ReApptor in LinkedIn](https://www.linkedin.com/company/reapptor/)

## Other projects
- [ReApptor.TypeScript.Linq](https://reapptor.github.io/ReApptor.TypeScript.Linq/)
[<small>@reapptor/ts-linq</small>](https://github.com/ReApptor/ReApptor.TypeScript.Linq/pkgs/npm/ts-linq)\
<small>It is a complete, fully tested analog of C# Language-Integrated Query (LINQ) written in TypeScript.</small>

## IPagedList
Represents a subset of input items that can be individually accessed by index and\
contains metadata about the superset collection of objects this subset was created from.
```typescript
export default interface IPagedList<out T = {}> {

    /**
     * The page items.
     */
    readonly items: readonly T[];

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
```

## Array extension functions

### ToPagedList
Splits the input superset collection into pages (subsets) and returns the specific page (subset) by an index.
```typescript
/**
 * Splits the input superset collection into pages (subsets) and returns the specific page (subset) by an index.
 * @param pageNumber - The page index is in the superset starting from 1.
 * @param pageSize - The maximum size of any page.
 * @returns IPagedList<T> - An IPagedList<T> object object that contains the specified subset and metadata about the input superset collection of objects this subset was created from.
 */
toPagedList(pageNumber: number, pageSize: number): IPagedList<T>;
```
#### Examples

###### Example #1
Selecting the second page from an array of numbers with page size 2.
```typescript
const input: number[] = [1, 2, 3, 4, 5];

const page: IPagedList<number> = input.toPagedList(2, 2);

console.log(`page #${page.pageNumber} from ${page.pageCount}`);
console.log(`page items [${page.items}] from [${input}]`);
console.log("");
console.log("pageSize = ", page.pageSize);
console.log("totalItemCount = ", page.totalItemCount);
console.log("hasPreviousPage = ", page.hasPreviousPage);
console.log("hasNextPage = ", page.hasNextPage);
console.log("isFirstPage = ", page.isFirstPage);
console.log("isLastPage = ", page.isLastPage);
console.log("firstItemIndex = ", page.firstItemIndex);
console.log("lastItemIndex = ", page.lastItemIndex);
```
#### Code produces the following output:
```
 page 2/3
 page items = [ 3, 4 ] from [ 1, 2, 3, 4, 5 ]
 
 pageSize = 2
 totalItemCount = 5
 hasPreviousPage = true
 hasNextPage = true
 isFirstPage = false
 isLastPage = false
 firstItemIndex = 2
 lastItemIndex = 3
```

###### Example #2
The initializing of the empty page.
```typescript
const page: IPagedList = [].toPagedList(1, 100);

console.log(`page #${page.pageNumber} from ${page.pageCount}`);
console.log(`page items [${page.items}] from []`);
console.log("");
console.log("pageSize = ", page.pageSize);
console.log("totalItemCount = ", page.totalItemCount);
console.log("hasPreviousPage = ", page.hasPreviousPage);
console.log("hasNextPage = ", page.hasNextPage);
console.log("isFirstPage = ", page.isFirstPage);
console.log("isLastPage = ", page.isLastPage);
console.log("firstItemIndex = ", page.firstItemIndex);
console.log("lastItemIndex = ", page.lastItemIndex);
```
#### Code produces the following output:
```
 page 1/1
 page items = [] from []
 
 pageSize = 100
 totalItemCount = 0
 hasPreviousPage = false
 hasNextPage = false
 isFirstPage = true
 isLastPage = true
 firstItemIndex = 0
 lastItemIndex = 0
```