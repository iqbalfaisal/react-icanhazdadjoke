export interface PagniationType {
  page: number;
  onChange: (page: number) => void;
  totalPage: number;
  nextPage: number;
  perviousPage: number;
}
