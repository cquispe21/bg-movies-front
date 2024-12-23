export interface ResponseApi<T> {
  data: T;
  code: number;
  error: string;
  msgRetorno: string;
}
