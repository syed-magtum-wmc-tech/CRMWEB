// TODO: change these fields

interface LoginInterface {
  dispatch_base_url: string;
  dispatch_auth_token: string;
  dispatch_x_id: string;
  dispatch_number: string;
  userId: number;
  internal: boolean;
  auth_token: string;
  rememberMe?: boolean;
  wmc_customer_id?: number;
  wmc_customer_display_name?: string;
  username: string;
  fullName: string;
  logo: string;
  url: string;
  unit: string;
  time_zone: string;
  time_zone_name: string;
  currency: string;
  email: string;
  receiveEmails: boolean;
  linked_accounts?: Array<LoginModel>;
}

export class LoginModel {
  dispatch_number: string;
  dispatch_base_url: string;
  dispatch_auth_token: string;
  dispatch_x_id: string;
  userId: number;
  internal: boolean;
  auth_token: string;
  rememberMe?: boolean;
  wmc_customer_id?: number;
  wmc_customer_display_name?: string;
  username: string;
  fullName: string;
  logo: string;
  url: string;
  unit: string;
  time_zone: string;
  time_zone_name: string;
  currency: string;
  email: string;
  receiveEmails: boolean;
  linked_accounts?: Array<LoginModel>;

  constructor(obj?: LoginInterface) {
    this.dispatch_number = obj && obj.dispatch_number;
    this.dispatch_base_url = obj && obj.dispatch_base_url;
    this.dispatch_auth_token = obj && obj.dispatch_auth_token;
    this.dispatch_x_id = obj && obj.dispatch_x_id;

    this.userId          = obj && obj.userId;
    this.internal        = obj && obj.internal;
    this.auth_token      = obj && obj.auth_token;
    this.rememberMe      = obj && obj.rememberMe;
    this.wmc_customer_id = obj && obj.wmc_customer_id;
    this.wmc_customer_display_name = obj && obj.wmc_customer_display_name;
    this.username        = obj && obj.username;
    this.fullName        = obj && obj.fullName;
    this.logo            = obj && obj.logo;
    this.url             = obj && obj.url;
    this.unit            = obj && obj.unit;
    this.time_zone       = obj && obj.time_zone;
    this.time_zone_name  = obj && obj.time_zone_name;
    this.currency        = obj && obj.currency;
    this.email           = obj && obj.email;
    this.receiveEmails   = obj && obj.receiveEmails;
    this.linked_accounts = obj && obj.linked_accounts;
  }

}
