export class Poster {
    _id: string;
    dateAdded: string;
    validation: boolean;
    location: string;
    pictures: string;
    content: string;
    author: object; // 需要改，可以换用一个class来定义


    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.dateAdded = obj && obj.dateAdded || null;
        this.content = obj && obj.content || null;
        this.location = obj && obj.location || null;
        this.pictures = obj && obj.pictures || null;
        this.validation = obj && obj.validation || null;
        this.author = obj  && obj.author || undefined;
    }


}
// class Author {
//     userName: string;
//     _id: string;

//     constructor(obj?: any) {
//         this._id = obj && obj._id || null;
//         this.userName = obj && obj.userName || null;
//     }
// }
