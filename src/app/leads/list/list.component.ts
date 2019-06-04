import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public components;
  public defaultColDef;
  public rowSelection;
  public paginationPageSize;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;
  public maxBlocksInCache;
  public getRowNodeId;
  public rowData: any = [];
  public detailCellRendererParams;
  public isRowMaster;
  public isFullWidthCell;

  constructor(public http: HttpClient) {
    this.columnDefs = [
      {
        headerName: "Lead",
        field: "name",
        width: 150,
        filter: "agTextColumnFilter",
        cellRenderer: "agGroupCellRenderer",
        suppressMenu: false
      },
      {
        headerName: "Lead Description",
        field: "description",
        width: 150,
        filter: "agTextColumnFilter",
        suppressMenu: false
      },
      {
        headerName: "Customers",
        field: "customer_name",
        width: 120,
        filter: "agTextColumnFilter",
        suppressMenu: false
      },
      {
        headerName: "Address",
        field: "address",
        width: 150,
        filter: "agTextColumnFilter",
        suppressMenu: false
      },
      {
        headerName: "Sales Person",
        field: "user_name",
        width: 90,
        filter: "agTextColumnFilter",
        suppressMenu: false
      },
      {
        headerName: "Status",
        field: "status",
        width: 90,
        filter: "agSetColumnFilter",
        filterParams: {
          values: ["active", "Quoted", "In progress", "Canceled"],
          newRowsAction: "keep"
        },
        suppressMenu: false
      },
      {
        headerName: "Estimated YD",
        field: "est_revenue",
        width: 90,
        filter: "agNumberColumnFilter",
        suppressMenu: false
      },
      {
        headerName: "Due Date",
        field: "due_date",
        width: 145,
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
          browserDatePicker: true
        },
        suppressMenu: false
      },
      {
        headerName: "Created Date",
        field: "created_at",
        width: 145,
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
          browserDatePicker: true
        },
        suppressMenu: false
      },
      {
        headerName: "Updated Date",
        field: "updated_at",
        width: 145,
        filter: "agDateColumnFilter",
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
              return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            }
          },
          browserDatePicker: true
        },
        suppressMenu: false
      }
    ];
    this.detailCellRendererParams = {
      detailGridOptions: {
        defaultColDef: {
          filter: true,
          sortable: true
        },
        columnDefs: [
          { headerName: "Quote No", field: "quote_num" },
          { headerName: "Quote Name", field: "quote_name" },
          { headerName: "description", field: "description" },
          { headerName: "Customer", field: "customer" },
          { headerName: "Status", field: "status" },
          { headerName: "Date", field: "bid_date" },
          { headerName: "Sales Person", field: "user_name" },
          { headerName: "PDF URL", field: "pdf_url" }
        ],
        onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        }
      },
      getDetailRowData: function (params) {
        params.successCallback(params.data.quoteList);
      }
    };
    this.isRowMaster = function (dataItem) {
      return dataItem ? dataItem.quoteList && dataItem.quoteList.length > 0 : false;
    };
    this.isFullWidthCell = function () {
      return false;
    };
    this.components = {
      loadingRenderer: function (params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="../images/loading.gif">';
        }
      }
    };
    this.defaultColDef = {
      sortable: true,
      resizable: true
    };
    this.rowSelection = "multiple";
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 2;
    this.getRowNodeId = function (item) {
      return item.id;
    };
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    let detailData: any = [
      { quote_num: "124", quote_name: "Testing Quote 1", description: "Quote desc", customer: "customer name", status: "submitted", bid_date: "01/05/2019", user_name: "njaffer", pdf_url: "pdf_url" },
      { quote_num: "125", quote_name: "Testing Quote 2", description: "Quote desc", customer: "customer name", status: "submitted", bid_date: "01/05/2019", user_name: "njaffer", pdf_url: "pdf_url" },
      { quote_num: "126", quote_name: "Testing Quote 3", description: "Quote desc", customer: "customer name", status: "submitted", bid_date: "01/05/2019", user_name: "njaffer", pdf_url: "pdf_url" },
      { quote_num: "127", quote_name: "Testing Quote 4", description: "Quote desc", customer: "customer name", status: "submitted", bid_date: "01/05/2019", user_name: "njaffer", pdf_url: "pdf_url" },
      { quote_num: "128", quote_name: "Testing Quote 5", description: "Quote desc", customer: "customer name", status: "submitted", bid_date: "01/05/2019", user_name: "njaffer", pdf_url: "pdf_url" },
      { quote_num: "129", quote_name: "Testing Quote 6", description: "Quote desc", customer: "customer name", status: "submitted", bid_date: "01/05/2019", user_name: "njaffer", pdf_url: "pdf_url" }
    ];
    this.rowData = [
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019", quoteList: detailData },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" },
      { name: "Testing lead name", description: "lead desc", customer_name: "cust 1", address: "Texas,USA", user_name: "njaffer", status: "active", est_revenue: "1200", due_date: "24/05/2019", created_at: "01/05/2019", updated_at: "02/05/2019" }
    ];
    let rowData = this.rowData;
    var dataSource = {
      rowCount: null,
      getRows: function (params) {
        console.log("asking for " + params.startRow + " to " + params.endRow);
        setTimeout(function () {
          var dataAfterSortingAndFiltering = sortAndFilter(rowData, params.sortModel, params.filterModel);
          var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
          var lastRow = -1;
          if (dataAfterSortingAndFiltering.length <= params.endRow) {
            lastRow = dataAfterSortingAndFiltering.length;
          }
          params.successCallback(rowsThisPage, lastRow);
        }, 500);
      }
    };
    params.api.setDatasource(dataSource);
  }
}

function sortAndFilter(allOfTheData, sortModel, filterModel) {
  return sortData(sortModel, filterData(filterModel, allOfTheData));
}
function sortData(sortModel, data) {
  var sortPresent = sortModel && sortModel.length > 0;
  if (!sortPresent) {
    return data;
  }
  var resultOfSort = data.slice();
  resultOfSort.sort(function (a, b) {
    for (var k = 0; k < sortModel.length; k++) {
      var sortColModel = sortModel[k];
      var valueA = a[sortColModel.colId];
      var valueB = b[sortColModel.colId];
      if (valueA == valueB) {
        continue;
      }
      var sortDirection = sortColModel.sort === "asc" ? 1 : -1;
      if (valueA > valueB) {
        return sortDirection;
      } else {
        return sortDirection * -1;
      }
    }
    return 0;
  });
  return resultOfSort;
}
function filterData(filterModel, data) {
  var filterPresent = filterModel && Object.keys(filterModel).length > 0;
  if (!filterPresent) {
    return data;
  }
  var resultOfFilter = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (filterModel.age) {
      var age = item.age;
      var allowedAge = parseInt(filterModel.age.filter);
      if (filterModel.age.type == "equals") {
        if (age !== allowedAge) {
          continue;
        }
      } else if (filterModel.age.type == "lessThan") {
        if (age >= allowedAge) {
          continue;
        }
      } else {
        if (age <= allowedAge) {
          continue;
        }
      }
    }
    if (filterModel.year) {
      if (filterModel.year.values.indexOf(item.year.toString()) < 0) {
        continue;
      }
    }
    if (filterModel.country) {
      if (filterModel.country.values.indexOf(item.country) < 0) {
        continue;
      }
    }
    resultOfFilter.push(item);
  }
  return resultOfFilter;
}
