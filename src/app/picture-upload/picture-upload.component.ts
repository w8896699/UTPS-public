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
  public files: any = [];
  constructor() { }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
