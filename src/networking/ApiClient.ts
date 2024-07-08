import {AxiosInstance} from './../../node_modules/axios/index.d';

import axios from 'axios';

export class ApiClient {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 10000,
    });
  }
}
