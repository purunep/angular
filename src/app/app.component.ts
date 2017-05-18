import { dreamAppActions } from 'app/common/appState/dreamApp/dreamApp.action';
import { StateService } from './common/state/service/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  documentUploadConfiguration: any;
  title = 'app works!';

 constructor( private state: StateService) { }

  ngOnInit(): void {
   this.documentUploadConfiguration = {
            UploadTitle: 'Upload a doument',
            WorkflowPendingTaskId:123,
            entityTypeId: 123,
            entityId: 12,
            multiDocumentUploadBatchId: '345345345343',
            customId1: 0,
            customId2: 0,
            customMethodata: null,
            description: '',
            documentTypeId: 123
          };
    this.getValues();

  }

  getValues() {
   this.state.dispatch(dreamAppActions.appSessions.load, ['firstdata', 'seconddata']);
   return this.state.select<Array<string>>(`dreamApp.appSessions`);
  }



   getUploadCompleteNotification(docResponse: any) {
     console.log('Upload completed');
   }

}
