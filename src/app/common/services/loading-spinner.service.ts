import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoadingSpinnerService {

  private get isLoading() {
    return this.showCount > 0;
  }

  private showCount = 0;

  @Output() loadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public show() {
    this.showCount++;
    if (this.showCount <= 1) {
      this.loadingChanged.emit(this.isLoading);
    }
  };

  public hide() {
    this.showCount--;

    if (this.showCount < 0) {
      console.error('Loading Spinner ShowCount < 0', this.showCount);
    }

    if (this.showCount <= 0) {
      this.showCount = 0;
      this.loadingChanged.emit(this.isLoading);
    }
  }

  public hideAll() {
    if (this.showCount > 0) {
      this.showCount = 0;
      this.loadingChanged.emit(this.isLoading);
    }
  }

}
