import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ApiConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiConstantProvider {


  constructor(public http: Http) {

  }

  // public API_PREFIX_PATH: string = 'http://localhost:3001';
  public API_PREFIX_PATH: string = 'https://crmdev.us-concrete.com';
  // public API_PREFIX_PATH: string = 'https://crmprod.us-concrete.com';

  public API: any = {
    LOGIN: '/api_login',
    CRM_CUSTOMER: '/crm/api/v1/crm_customers',
    CRM_CUSTOMER_CONTACT: '/crm/api/v1/crm_customer_contacts',
    CRM_CONTACT: '/crm/api/v1/crm_contacts',
    CUSTOMER: '/crm/api/v1/clients',
    CONTACT: '/crm/api/v1/contacts',
    WORK_TYPE: '/crm/api/v1/work_types',
    LOOKUP: '/crm/api/v1/lookups',
    LEAD: '/crm/api/v1/leads',
    LEAD_STATUS_UPDATE: '/crm/api/v1/leads_status_update',
    LEAD_SALES_PERSON_UPDATE: '/crm/api/v1/leads_sales_person_update',
    LEAD_IMPORT: '/crm/api/v1/leads/importDodge',
    LEAD_CUSTOMERS: '/crm/api/v1/lead_customers',
    PLANT_LIST: '/api/v1/plants',
    MIXES_LIST: '/api/v1/mixes',
    MIXES_PLANT_LIST: '/api/v1/mixes/{mix_id}/plants',
    PRODUCT_LIST: '/api/v1/products',
    EXTRA_PRODUCT_LIST: '/api/v1/extras',
    PROGRESS_QUOTE: '/crm/api/v1/progress_quotes',
    QUOTE: '/api/v1/quotes',
    QUOTE_LEAD_LIST: '/api/v1/quotes_leads',
    QUOTE_LEAD_SUMMARY: '/api/v1/quotes_lead_summary',
    QUOTE_WON: '/api/v1/quotes_won',
    QUOTE_DUPLICATE: '/api/v1/quote_duplicate',
    QUOTE_LOST: '/api/v1/quotes_lost',
    QUOTE_PATCH_LOST: '/api/v1/quotes_patch_lost',
    QUOTE_SUBMIT: '/api/v1/quote_submit',
    QUOTE_PDF_GENERATE: '/api/v1/quotes_generate_pdf',

    DOCUMENT: '/crm/api/v1/crm_documents',
    SALES_EXECUTIES_LIST: '/crm/api/v1/crm_sales_forces',
    AUTO_SUGGEST_SALES_EXECUTIES_LIST: '/api/v1/assignment_settings/sales_forces',

    APPROVAL: '/api/v1/approvals',
    AWAITING_APPROVAL_LIST: '/api/v1/pending_approvals',
    PENDING_APPROVAL_LIST: '/api/v1/my_approvals',
    APPROVAL_STATUS_UPDATE: '/api/v1/approval_status_update',

    JOB: '/api/v1/jobs',
    JOB_SYNC: '/api/v1/job_sync',
    JOB_PRICE_ESCALATOR_SYNC: '/api/v1/job_escalator_sync',
    // CANCEL_JOB_MIX: '/api/v1/job_cancel_mix',
    CANCEL_JOB_MIX: '/api/v1/approval_change_headers',

    NOTIFICATION_SUMMARY: '/api/v1/users_notification_summary',
    SETTINGS: '/api/v1/settings',

    ZONE_AREA_FIND: '/api/v1/return_area',
    ZONES: '/api/v1/zones',
    AREAS: '/api/v1/areas',

    BACKLOG: '/api/v1/backlogs',
    BACKLOG_UPDATE: '/api/v1/backlogs_update',
    BACKLOG_AUTO_PROJECTION: '/api/v1/backlogs_auto_projection',

    DASHBOARD_LEAD_SUMMARY: '/api/v1/dashboards/lead_summary',
    DASHBOARD_QUOTE_SUMMARY: '/api/v1/dashboards/quote_summary',
    DASHBOARD_SALE_PIPELINE_SUMMARY: '/api/v1/dashboards/sales_pipeline',
    DASHBOARD_BACKLOG_SUMMARY: '/api/v1/dashboards/backlogs_summary',
    SALES_FORCE_TERRITORY_SETTINGS: '/api/v1/territory_assignment',
    COUNTRY_LIST: '/api/v1/countries',
    STATE_LIST: '/api/v1/states',
    COUNTY_LIST: '/api/v1/counties',
    CITY_LIST: '/api/v1/cities',
    ZIPCODE_LIST: '/api/v1/zip_codes',
    SAVE_SALES_FORCE_TERRITORY_SETTINGS: '/api/v1/territory_assignment',
    ASSIGNED_CUSTOMER: '/api/v1/assigned_customer',
    UPDATE_CRM_SALES_FORCE: '/crm/api/v1/crm_sales_forces',
    PRICE_CATEGORY: '/api/v1/price_categories',
    PRICE_CHANGE: '/api/v1/approval_change_headers',
    APPROVAL_CHANGE_HEADER_SUMMARY: '/api/v1/approval_change_header_summary',
    APPROVAL_CHANGE_HEADER_BY_CHANGEABLE: '/api/v1/approval_change_headers_by_changeable',
    QUOTE_EMAIL_PDF: '/api/v1/quote_email_pdf',
    RESUBMIT_JOB_APPROVAL: '/api/v1/job_credit_approver_submit',
    PLANT_CUSTOMER_METRICS_LIST: '/api/v1/metrics',
    QUOTE_MIX_SUMMARY: '/api/v1/mix_summary',
    JOB_METRIC_SUMMARY: '/api/v1/job_metric_summary',
    BUNDLE_ITEMS: '/api/v1/price_list_bundle_items',
    PRICE_ESCALATOR_REPORT: '/api/v1/job_escalator_report',
    JOB_STATUS: '/api/v1/job_status',
    EVENTS: '/events',
    AUDITS: '/audits.json',
    QUOTE_AUDITS_REPORT: '/api/v1/quote_audit_report',
    JOB_AUDITS_REPORT: '/api/v1/job_audit_report',
    PRICE_ESCALATOR_CSV: '/api/v1/job_escalator_report.csv',
    RECENT_ACTIVITY: '/most_recent_activities'
  };


}
