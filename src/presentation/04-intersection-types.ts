import { Book, printBook } from "../types/book";
import { RentableItem } from "../types/rentableItem";

function makeRentable<TItem>(instance: TItem): TItem & RentableItem {
    return {
        ...instance,
        ...RentableItem.prototype
    } as RentableItem & TItem;
}

const book = new Book(1, "Having fun with TypeScript", new Date(2020, 6, 14));
printBook(book);
// book.printStatus();

const rentableBook = makeRentable(book);
printBook(rentableBook);
console.log(`is same instance? ${book === rentableBook}`);

rentableBook.printStatus();

rentableBook.rent(new Date(2020, 6, 14), "John");
rentableBook.printStatus();

rentableBook.return();
rentableBook.printStatus();