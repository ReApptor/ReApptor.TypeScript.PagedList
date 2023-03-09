import "@reapptor/ts-paged-list";
import {IPagedList} from "@reapptor/ts-paged-list";

describe("toPagedList", () => {
    
    const getInput = (length: number): number[] => {
        const input: number[] = [];
        input.length = length;
        for (let i: number = 0; i < length; i++) {
            input[i] = i;
        }
        return input;
    }
    
    test("empty", () => {
        const input: number[] = getInput(0);

        const result: IPagedList<number> = input.toPagedList(1, 100);
        
        expect(result.items.length).toEqual(0);
        expect(result.totalItemCount).toEqual(0);
        expect(result.pageNumber).toEqual(1);
        expect(result.pageCount).toEqual(1);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(false);
        expect(result.hasNextPage).toEqual(false);
        expect(result.isFirstPage).toEqual(true);
        expect(result.isLastPage).toEqual(true);
        expect(result.firstItemIndex).toEqual(0);
        expect(result.lastItemIndex).toEqual(0);
    });
    
    test("single-page", () => {
        const input: number[] = getInput(100);
        
        const result: IPagedList<number> = input.toPagedList(1, 100);
        
        expect(result.items.length).toEqual(100);
        expect(result.items[0]).toEqual(0);
        expect(result.items[99]).toEqual(99);
        expect(result.totalItemCount).toEqual(100);
        expect(result.pageNumber).toEqual(1);
        expect(result.pageCount).toEqual(1);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(false);
        expect(result.hasNextPage).toEqual(false);
        expect(result.isFirstPage).toEqual(true);
        expect(result.isLastPage).toEqual(true);
        expect(result.firstItemIndex).toEqual(0);
        expect(result.lastItemIndex).toEqual(99);
    });
    
    test("first-page", () => {
        const input: number[] = getInput(200);
        
        const result: IPagedList<number> = input.toPagedList(1, 100);
        
        expect(result.items.length).toEqual(100);
        expect(result.items[0]).toEqual(0);
        expect(result.items[99]).toEqual(99);
        expect(result.totalItemCount).toEqual(200);
        expect(result.pageNumber).toEqual(1);
        expect(result.pageCount).toEqual(2);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(false);
        expect(result.hasNextPage).toEqual(true);
        expect(result.isFirstPage).toEqual(true);
        expect(result.isLastPage).toEqual(false);
        expect(result.firstItemIndex).toEqual(0);
        expect(result.lastItemIndex).toEqual(99);
    });
    
    test("last-page", () => {
        const input: number[] = getInput(200);
        
        const result: IPagedList<number> = input.toPagedList(2, 100);

        expect(result.items.length).toEqual(100);
        expect(result.items[0]).toEqual(100);
        expect(result.items[99]).toEqual(199);
        expect(result.totalItemCount).toEqual(200);
        expect(result.pageNumber).toEqual(2);
        expect(result.pageCount).toEqual(2);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(true);
        expect(result.hasNextPage).toEqual(false);
        expect(result.isFirstPage).toEqual(false);
        expect(result.isLastPage).toEqual(true);
        expect(result.firstItemIndex).toEqual(100);
        expect(result.lastItemIndex).toEqual(199);
    });
    
    test("middle-page", () => {
        const input: number[] = getInput(300);
        
        const result: IPagedList<number> = input.toPagedList(2, 100);

        expect(result.items.length).toEqual(100);
        expect(result.items[0]).toEqual(100);
        expect(result.items[99]).toEqual(199);
        expect(result.totalItemCount).toEqual(300);
        expect(result.pageNumber).toEqual(2);
        expect(result.pageCount).toEqual(3);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(true);
        expect(result.hasNextPage).toEqual(true);
        expect(result.isFirstPage).toEqual(false);
        expect(result.isLastPage).toEqual(false);
        expect(result.firstItemIndex).toEqual(100);
        expect(result.lastItemIndex).toEqual(199);
    });
    
    test("extended-page", () => {
        const input: number[] = getInput(50);
        
        const result: IPagedList<number> = input.toPagedList(1, 100);

        expect(result.items.length).toEqual(50);
        expect(result.items[0]).toEqual(0);
        expect(result.items[49]).toEqual(49);
        expect(result.totalItemCount).toEqual(50);
        expect(result.pageNumber).toEqual(1);
        expect(result.pageCount).toEqual(1);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(false);
        expect(result.hasNextPage).toEqual(false);
        expect(result.isFirstPage).toEqual(true);
        expect(result.isLastPage).toEqual(true);
        expect(result.firstItemIndex).toEqual(0);
        expect(result.lastItemIndex).toEqual(49);
    });
    
    test("external-page-number", () => {
        const input: number[] = getInput(200);
        
        const result: IPagedList<number> = input.toPagedList(3, 100);
        
        expect(result.items.length).toEqual(100);
        expect(result.items[0]).toEqual(0);
        expect(result.items[99]).toEqual(99);
        expect(result.totalItemCount).toEqual(200);
        expect(result.pageNumber).toEqual(1);
        expect(result.pageCount).toEqual(2);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(false);
        expect(result.hasNextPage).toEqual(true);
        expect(result.isFirstPage).toEqual(true);
        expect(result.isLastPage).toEqual(false);
        expect(result.firstItemIndex).toEqual(0);
        expect(result.lastItemIndex).toEqual(99);
    });
    
    test("any-type", () => {
        const input: any[] = getInput(100);
        
        const result: IPagedList = input.toPagedList(1, 100);
        
        expect(result.items.length).toEqual(100);
        expect(result.items[0]).toEqual(0);
        expect(result.items[99]).toEqual(99);
        expect(result.totalItemCount).toEqual(100);
        expect(result.pageNumber).toEqual(1);
        expect(result.pageCount).toEqual(1);
        expect(result.pageSize).toEqual(100);
        expect(result.hasPreviousPage).toEqual(false);
        expect(result.hasNextPage).toEqual(false);
        expect(result.isFirstPage).toEqual(true);
        expect(result.isLastPage).toEqual(true);
        expect(result.firstItemIndex).toEqual(0);
        expect(result.lastItemIndex).toEqual(99);
    });
    
    test("anonymous-type", () => {
        const input: { value: string, index: number}[] = [
            { value: "1", index: 0 },
            { value: "2", index: 1 },
            { value: "3", index: 2 },
            { value: "4", index: 3 },
            { value: "5", index: 4 },
        ];
        
        const result: IPagedList<{ value: string, index: number}> = input.toPagedList(2, 2);
        
        expect(result.items.length).toEqual(2);
        expect(result.items[0].index).toEqual(2);
        expect(result.items[0].value).toEqual("3");
        expect(result.items[1].index).toEqual(3);
        expect(result.items[1].value).toEqual("4");
        expect(result.totalItemCount).toEqual(5);
        expect(result.pageNumber).toEqual(2);
        expect(result.pageCount).toEqual(3);
        expect(result.pageSize).toEqual(2);
        expect(result.hasPreviousPage).toEqual(true);
        expect(result.hasNextPage).toEqual(true);
        expect(result.isFirstPage).toEqual(false);
        expect(result.isLastPage).toEqual(false);
        expect(result.firstItemIndex).toEqual(2);
        expect(result.lastItemIndex).toEqual(3);
    });
    
    test("readme-example-1", () => {
        const input: number[] = [1, 2, 3, 4, 5];

        const page: IPagedList<number> = input.toPagedList(2, 2);

        console.log(`page ${page.pageNumber}/${page.pageCount}`);
        console.log(`page items [${page.items}] from [${input}]`);
        console.log("");
        console.log("totalItemCount = ", page.totalItemCount);
        console.log("pageCount = ", page.pageCount);
        console.log("pageSize = ", page.pageSize);
        console.log("hasPreviousPage = ", page.hasPreviousPage);
        console.log("hasNextPage = ", page.hasNextPage);
        console.log("isFirstPage = ", page.isFirstPage);
        console.log("isLastPage = ", page.isLastPage);
        console.log("firstItemIndex = ", page.firstItemIndex);
        console.log("lastItemIndex = ", page.lastItemIndex);
    });
    
    test("readme-example-2", () => {
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
    });
    
});
