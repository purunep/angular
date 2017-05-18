import { Injectable, EventEmitter } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineReducers } from 'redux';
import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { property } from './../../utility/property';

@Injectable()
export class StateService {

  get value() { return this.rx.getState(); }
  onSelect = new EventEmitter<{ path: string, observable: any }>(false);
  private subjects: { [name: string]: BehaviorSubject<any> } = {};

  constructor(private rx: NgRedux<any>, private devTools: DevToolsExtension) {  }

  /** Initialize redux store.
   * @param reducers Reducer object { root}
   * @param initial {any} Initial value of the state.
   * @param useDevTools {boolean} Start with redux dev tools enabled.
  */
  init(
    reducers: {
       [reducerRootPath: string]: (state: any, action?: any) => void },
    initial: any,
    middleware: any[],
    useDevTools: boolean) {

    let enhancers = [];
    if (useDevTools && this.devTools.isEnabled()) {
      enhancers = [...enhancers, this.devTools.enhancer()];
    }

    const combined = Object.assign({}, reducers);
    this.rx.configureStore(combineReducers(combined), initial, middleware || [], enhancers);

  }

  dispatch(type: string, payload?: any) {
    this.rx.dispatch({ type: type, payload: payload });
  }



  select<T>(path: string): BehaviorSubject<T> {
    const existing = this.subjects[path];
    if (existing) { return existing; }

    let last = null;
  const bs = new BehaviorSubject<T>(property.get(this.value, path));
    this.subjects[path] = bs;

    const observable = this.rx
      .select<T>(path.split('.'))
      .subscribe(val => {
        if (JSON.stringify(val) === last) { return; }
        bs.next(val);
        last = JSON.stringify(val);
      });

    this.onSelect.emit({ path, observable });
    return bs;

  }

  subscribe<T>(path: string, fn: (state: T) => void): Subscription {
    return this.select<T>(path).subscribe((o: T) => fn(o));
  }

}
