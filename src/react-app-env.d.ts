// eslint-disable-next-line
/// <reference types="react-scripts" />

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  clicks?: number;
  views?: number;
}

interface Statistic {
  user_id: number;
  date: string;
}
