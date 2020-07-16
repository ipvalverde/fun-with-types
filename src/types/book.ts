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

export { Book, printBook };