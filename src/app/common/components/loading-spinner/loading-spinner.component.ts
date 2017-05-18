import { LoadingSpinnerService } from './../../services/loading-spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.less']
})
export class LoadingSpinnerComponent implements OnInit {
isVisible= true;
loadingStatusSubscription: any;
  constructor(private loadingSpinnerService: LoadingSpinnerService) {
    this.loadingStatusSubscription = this.loadingSpinnerService.loadingChanged.subscribe((value) => {
      this.isVisible = value;
    });
  }

  ngOnInit() {
    setTimeout(() => {
         this.isVisible = false;
        }, 2000);
  }

   ngOnDestroy() {
    if (this.loadingStatusSubscription) {
      this.loadingStatusSubscription.unsubscribe();
    }
  }

}
