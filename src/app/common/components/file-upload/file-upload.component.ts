import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})
export class FileUploadComponent implements OnInit {
 @Input() documentUploadConfiguration;
  modalRef: any;
  @Output() uploadedFile: EventEmitter<any> = new EventEmitter();

  public uploader: FileUploader;
  constructor() { }
  private endpoint = 'http://localhost:52474/api/command/postfile';
   ngOnInit() {

    this.uploader = new FileUploader({ url: "" + this.endpoint });

    this.uploader.onBeforeUploadItem = (item: FileItem) => {
      item.withCredentials = false;
 this.uploader.authToken = 'Bearer ' + "TQlR2edu-OHpGVZuMv5o67LP4EceWVIPHaTClXy1QAGXlNZS4jGKxZFyee7iOUwpJBG6640DjrrTadMg_mQct7q_n2Hl3HuxOBtUarStfpWUMuPLwFEPNUqa6zvY0PYGV55tiQ09rzA43oiIoFq1kU0Nn4WGFvlMfpK9H3tdmJZE-4jcZypem1H5JPuLTGtk_PvQ6TQJN6DVnH5roLpv5Av3NEHUL79e2mK5qfVFWTT42BfFPs7-ipXi_sfRZ5Xjtz0bGAHHW9BpM4DOuM_0rgkxqJvtC-AxRdQ7mTqYh5OL6R9lbua8yuft3UVm-jHPzV4o08h1SBBslqfPW4R_dGE9z1ApNcYpM32v6ow5ejbo4LGiuDD-5Xq4YvqIhbcHxl7VshX1RgDxqQu48ejovojC7xDcIp1EJtISdxr5iN1hfJK1MD7yif2jr6jBQ1jWEWNgxbtZ6S_Abc3YIWjtvLFnOBI";
      if(this.uploader.getIndexOfItem(item) === this.uploader.queue.length - 1)
      {
        this.documentUploadConfiguration.isFinalDocument = true;
      }
      this.uploader.options.additionalParameter = this.documentUploadConfiguration;

    };

    this.uploader.onCompleteItem = (item, response, status, header) => {
      if (status === 200) {
        this.sendUploadNotification(JSON.parse(response));
      }

      this.modalRef.hide();
    }
  }
  public hasBaseDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  sendUploadNotification(response:any) {
      this.uploadedFile.emit(response);
  }

  loadModal(modal: any) {
    this.modalRef = modal;
    this.modalRef.show();
  }


}
