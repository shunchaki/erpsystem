import axios from "axios";
const BASE_URL = "http://45.138.158.137:84/api";
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjI0YTk3MDBmLTI3ZGItNDNlYS05M2I2LTcxMDJjMzMzNjBhMCIsInJvbGUiOiJCdXNpbmVzc093bmVyIiwidW5pcXVlX25hbWUiOiJNdWhhbW1hZHFvZGlyIiwiQnVzaW5lc3NPd25lcklkIjoiMjRhOTcwMGYtMjdkYi00M2VhLTkzYjYtNzEwMmMzMzM2MGEwIiwiQ29tcGFueUlkIjoiMjM2YmRkNWMtOWQ1MS00ODljLTkwNDctNDA5YWM3YmJkYWI1IiwiQ29tcGFueUVtcGxveWVlSWQiOiI0MGUxN2ViNi01ZjY4LTRhOGQtOTc1OS03MTE1MjAyNDk2ZTAiLCJIb2xkaW5nSWQiOiIyMzZiZGQ1Yy05ZDUxLTQ4OWMtOTA0Ny00MDlhYzdiYmRhYjUiLCJuYmYiOjE3NDQ3MDI5NjEsImV4cCI6MTc0NDc4OTM2MSwiaWF0IjoxNzQ0NzAyOTYxLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MDgxIiwiYXVkIjoiRVJQLVN5c3RlbV9TZXJ2ZXIifQ.cKROeFpI3SRoHXiQwjVzGlB5_7Po1QfgPijggpY1OYY"
const options = {
  BASE_URL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${token}`,
    "X-User-TimeZone": timeZone,
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  }
}
export const CreateMeasureType = {
    async postData(url, data) {
        const response = await axios.post(`${BASE_URL}/${url}`, data,  options );
        return response;
    }
}