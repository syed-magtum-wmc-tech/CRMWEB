import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /*
  getNotificationSummary():Observable<any> {
    if(!this.notification$) {
      this.notification$ =  Observable
        .timer(0, 1*30*1000) // recheck the weather every 5 minutes
        .takeUntil(this.unsubscribe_notification$)
        .flatMap(() => this.api.get(this.apiConstant.API.NOTIFICATION_SUMMARY).catch(err => []))
        .map((resp: any) => UserTranslator.toUserNotificationSummaryModel(resp))
        .publishReplay()
        .refCount();

    }
    return this.notification$
  }

  subscribeNotification() {

    this.notification_subsription = this.getNotificationSummary().subscribe(
        resp => {
          this.notification = resp;
          this.events.publish('update_notification', this.notification);
          console.log('resp ',resp);
        }
      );
  }

  destoryNotification() {
    this.unsubscribe_notification$ && this.unsubscribe_notification$.complete();
    this.notification_subsription && this.notification_subsription.unsubscribe();

    this.unsubscribe_notification$ = new Subject();
  }

  getUserSetting() {
    this.api.get(this.apiConstant.API.SETTINGS).subscribe( resp => {
         this.settings = UserTranslator.convertSettingReponseToSettingModel(resp.json().list as SettingResponse[]);
    });
  }
    */
}
