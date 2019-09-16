export class User {
    _id: string;
    firstName: string;
    lastName: boolean;
    email: string;
    role: string;
    userName: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.firstName = obj && obj.firstName || null;
        this.lastName = obj && obj.lastName || null;
        this.email = obj && obj.email || null;
        this.role = obj && obj.role || null;
        this.userName = obj && obj.userName || null;
    }

}