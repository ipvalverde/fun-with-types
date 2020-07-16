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


export { RentableItem };