/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MetaModel {
  code: string;
  field: string | null;
  message: string;
}

export interface DataModel {
  length: number,
  currentPage: number,
  noRecordInPage: number,
  results: object[],
  totalPage: number,
  totalRecords: number,
  countRecords: number,
}

export interface HttpClienRequest {
  page: number;
  size: number;
}

export interface HttpClientResponse {
  data: DataSearchModel | any;
  errors: object[];
  meta: MetaModel;
}

export class DataSearchModel implements DataModel {
  public constructor(
    public length: number = 0,
    public currentPage: number = 0,
    public noRecordInPage: number = 0,
    public results: object[] = [],
    public totalPage: number = 0,
    public totalRecords: number = 0,
    public countRecords: number = 0
  ) { }
}


export class Customer {
  customerId?: number;
  customerCode?: string;
  customerName?: string;
  picName?: string;
  leadTime?: string;
  routeCode?: string;
  courseCode?: string;
  phoneNumber?: string;
  faxNumber?: string;
  postCode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  description?: string;
}