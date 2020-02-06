//
// reference http://www.advancesharp.com/blog/1218/angular-4-upload-files-with-data-and-web-api-by-drag-drop
//
import { Component, Input, Output, EventEmitter, HostListener, ElementRef, ViewChild } from '@angular/core';
import {MatIconModule} from 'material-design-icons';

@Component({
  selector: 'app-picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.scss']
})
export class PictureUploadComponent {
  @Input()  files: Array<File>;
  // @Output() filesChange = new EventEmitter();

  constructor() { }

  uploadFile(incommingEventPicture) {
    for (let index = 0; index < incommingEventPicture.length; index++) { // TODO : drop multi pictures
      const element = incommingEventPicture[index];
      this.files.push(element);
    }
    // this.filesChange.emit(incommingEventPicture); //儿子可以改变爸爸的variable， 就不用emmiter了
  }

  deleteAttachment(index) {
    console.log('check this222', this.files);
    this.files.splice(index, 1);
    // this.filesChange.emit(this.files);
  }
}
