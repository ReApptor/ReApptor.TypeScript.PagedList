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
    });
    
    test("anonymous-type", () => {
        const input: { name: string, index: number}[] = [
            { name: "1", index: 1 },
            { name: "2", index: 2 },
            { name: "3", index: 3 },
            { name: "4", index: 4 },
            { name: "5", index: 5 },
        ];
        
        const result: IPagedList<{ name: string, index: number}> = input.toPagedList(2, 2);
        
        expect(result.items.length).toEqual(2);
        expect(result.items[0].index).toEqual(3);
        expect(result.items[0].name).toEqual("3");
        expect(result.items[1].index).toEqual(4);
        expect(result.items[1].name).toEqual("4");
        expect(result.totalItemCount).toEqual(5);
        expect(result.pageNumber).toEqual(2);
        expect(result.pageCount).toEqual(3);
        expect(result.pageSize).toEqual(2);
        expect(result.hasPreviousPage).toEqual(true);
        expect(result.hasNextPage).toEqual(true);
        expect(result.isFirstPage).toEqual(false);
        expect(result.isLastPage).toEqual(false);
    });
    
});
