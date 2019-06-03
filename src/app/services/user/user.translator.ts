import _ from 'lodash';

import { LoginResponse, LoginModel, SettingResponse, SettingModel } from '../../models/models';

export abstract class UserTranslator {

  public static toLoginModel(resp: LoginResponse, rememberMe: boolean) {
    return new LoginModel({
      dispatch_number: resp.dispatch_number,
      dispatch_base_url: resp.dispatch_base_url,
      dispatch_auth_token: resp.dispatch_auth_token,
      dispatch_x_id: resp.dispatch_x_id,
      userId: resp.user_id,
      internal: resp.internal,
      receiveEmails: resp.order_emails,
      email: resp.email,
      auth_token: resp.auth_token,
      username: resp.username,
      logo: resp.logo,
      url: resp.url,
      unit: resp.unit,
      time_zone: resp.time_zone,
      time_zone_name: resp.time_zone_name,
      currency: resp.currency,
      fullName: resp.full_name,
      rememberMe: rememberMe,
      wmc_customer_id: resp.wmc_customer_id,
      wmc_customer_display_name: resp.wmc_customer_display_name,
      linked_accounts: _(resp.linked_accounts).map(linked_account => new LoginModel({
        dispatch_base_url: '',
        dispatch_auth_token: '',
        dispatch_x_id: '',
        dispatch_number: linked_account.dispatch_number,
        userId: linked_account.user_id,
        internal: linked_account.internal,
        auth_token: linked_account.auth_token,
        url: linked_account.url,
        unit: linked_account.unit,
        username: linked_account.username,
        logo: linked_account.logo,
        fullName: linked_account.full_name,
        email: linked_account.email,
        receiveEmails: linked_account.order_emails,
        time_zone: linked_account.time_zone,
        time_zone_name: linked_account.time_zone_name,
        currency: linked_account.currency,
      })).value()
    });
  }


  public static toPasswordResetRequest(password: string, password_confirmation: string) {
    const body = new FormData();

    body.append('user[password]', password);
    body.append('user[password_confirmation]', password_confirmation);

    return body;
  }

  public static toUserNotificationSummaryModel(res: any) {

    return res.json().data;
  }


  public static convertSettingReponseToSettingModel(resp: SettingResponse[]) {
    return _(resp)
      .map(setting => {
        return new SettingModel({
          name: setting.name,
          value: setting.value,
          linkable_id: setting.linkable_id,
          linkable_type: setting.linkable_type
        });
      }).value();
  }


}
