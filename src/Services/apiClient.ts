import { ApiResponse } from "../models/apiResponse";
import { Movie } from "../models/movie";

export class ApiClient {
  static async getData(url: string): Promise<ApiResponse> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE1ZDY1YjQ0NzJhOWIyZDMxZmE5ZTJlYWExZmE5NyIsIm5iZiI6MTcyODQwMDYxMy42MTg2NDIsInN1YiI6IjY2OTQyMTA4NzNmZjZkNmVkZGY0ODExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xx9jdRogeGMC2LjPhTlijNjcFdyayTBIzOPdCJClmh8",
      },
    };
    const response = await fetch(url, options);
    const data: ApiResponse = await response.json();
    return data;
  }
}
