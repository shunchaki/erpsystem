import axios from "axios";
const BASE_URL = "http://45.138.158.137:84/api";
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImRiODNhYmRiLTA5Y2EtNDcwOC1hMmVkLTdkZTI3NDg1ZjdmNyIsInJvbGUiOiJCdXNpbmVzc093bmVyIiwidW5pcXVlX25hbWUiOiJIYWJpYnVsbG9oIiwiQnVzaW5lc3NPd25lcklkIjoiZGI4M2FiZGItMDljYS00NzA4LWEyZWQtN2RlMjc0ODVmN2Y3IiwiQ29tcGFueUlkIjoiZmQ1YTM0YjQtY2Y1ZC00NGQ2LThjZTYtMzFhM2UwMWU0MDA5IiwiQ29tcGFueUVtcGxveWVlSWQiOiJhZTNjOGI2MS0yZTJjLTQ0MmUtYTM5OC1kMTgyZTE1NzE0MzkiLCJIb2xkaW5nSWQiOiJmZDVhMzRiNC1jZjVkLTQ0ZDYtOGNlNi0zMWEzZTAxZTQwMDkiLCJuYmYiOjE3NDQ1NjE3OTEsImV4cCI6MTc0NDY0ODE5MSwiaWF0IjoxNzQ0NTYxNzkxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDgxIiwiYXVkIjoiRVJQLVN5c3RlbV9TZXJ2ZXIifQ.QvYTIsDV3ePwvb2b2AepD-pmqtYuBWaSFn-9l3fZI0k";
const options = {
  BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${token}`,
    "X-User-TimeZone": timeZone,
    Accept: "application/json, text/plain, */*",
  },
};
export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
