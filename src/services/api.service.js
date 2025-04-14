import axios from "axios";
const BASE_URL = "http://45.138.158.137:84/api";
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjI0YTk3MDBmLTI3ZGItNDNlYS05M2I2LTcxMDJjMzMzNjBhMCIsInJvbGUiOiJCdXNpbmVzc093bmVyIiwidW5pcXVlX25hbWUiOiJNdWhhbW1hZHFvZGlyIiwiQnVzaW5lc3NPd25lcklkIjoiMjRhOTcwMGYtMjdkYi00M2VhLTkzYjYtNzEwMmMzMzM2MGEwIiwiQ29tcGFueUlkIjoiMjM2YmRkNWMtOWQ1MS00ODljLTkwNDctNDA5YWM3YmJkYWI1IiwiQ29tcGFueUVtcGxveWVlSWQiOiI0MGUxN2ViNi01ZjY4LTRhOGQtOTc1OS03MTE1MjAyNDk2ZTAiLCJIb2xkaW5nSWQiOiIyMzZiZGQ1Yy05ZDUxLTQ4OWMtOTA0Ny00MDlhYzdiYmRhYjUiLCJuYmYiOjE3NDQ2MTA3NjgsImV4cCI6MTc0NDY5NzE2OCwiaWF0IjoxNzQ0NjEwNzY4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDgxIiwiYXVkIjoiRVJQLVN5c3RlbV9TZXJ2ZXIifQ.6bJdYrMh5vA8pU5W8p8GTTu5DePuM7_xwqRKwyExx-g"
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
    return response;
  },
};
