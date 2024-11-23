import axios, { type AxiosInstance, type AxiosResponse } from "axios";

class ApiService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(endpoint: string, params: Record<string, unknown> = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.get(endpoint, { params });
      return response.data;
    } catch (error: unknown) {
      console.error(`GET ${endpoint} failed`, error);
      throw new Error(error as string  || "Erro ao carregar dados");
    }
  }
}

const apiService = new ApiService("https://fakestoreapi.com");

export default apiService;
