class Book {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly publicationDate: Date,
    ) {}
}
function printBook(book: Book) {
    console.log(`id --> ${book.id}
title --> ${book.title}
publicationDate --> ${book.publicationDate.toDateString()}`);
}


class RentableItem {
    private _customerName?: string;
    private _rentEndDate?: Date;
    private _rented: boolean = false;

    rent(rentStartDate: Date, customerName: string) {
        this._customerName = customerName;
        this._rentEndDate = new Date(rentStartDate.getFullYear(), rentStartDate.getMonth(), rentStartDate.getDate() + 7);
        this._rented = true;
    }

    return() {
        this._customerName = this._rentEndDate = undefined;
        this._rented = false;
    }

    printStatus() {
        if (this._rented) {
            console.log(`Item is rented to "${this._customerName}" and it should be returned on "${this._rentEndDate?.toDateString()}"`);
        }
        else {
            console.log("Item is available to rent");
        }
    }
}

function makeRentable<TItem>(instance: TItem): TItem & RentableItem {
    return {
        ...instance,
        ...RentableItem.prototype
    } as RentableItem & TItem;
}

const book = new Book(1, "Having fun with TypeScript", new Date(2020, 6, 14));
printBook(book);
// book.printStatus();

// const rentableBook = makeRentable(book);
// printBook(rentableBook);
// console.log(`is same instance? ${book === rentableBook}`);

// rentableBook.printStatus();

// rentableBook.rent(new Date(2020, 6, 14), "John");
// rentableBook.printStatus();

// rentableBook.return();
// rentableBook.printStatus();