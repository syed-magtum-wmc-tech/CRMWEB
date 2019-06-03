export interface LoginResponse {
  dispatch_number: string;
  dispatch_base_url: string;
  dispatch_auth_token: string;
  dispatch_x_id: string;
  user_id: number;
  internal: boolean;
  auth_token: string;
  order_emails: boolean;
  wmc_customer_id: number;
  wmc_customer_display_name: string;
  logo: string;
  url: string;
  unit: string;
  time_zone: string;
  time_zone_name: string;
  currency: string;
  username: string;
  full_name: string;
  email: string;
  linked_accounts: Array<{
    dispatch_number: string;
    user_id: number;
    internal: boolean;
    auth_token: string;
    logo: string;
    url: string;
    unit: string;
    time_zone: string;
    time_zone_name: string;
    currency: string;
    order_emails: boolean;
    wmc_customer_id: number;
    username: string;
    full_name: string;
    email: string;
  }>;
}
