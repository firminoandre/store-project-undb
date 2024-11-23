import axios, { type AxiosInstance, type AxiosResponse } from "axios";

class ApiService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 10000, // Tempo limite de 10 segundos
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Método GET
  async get<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.get(endpoint, { params });
      return response.data;
    } catch (error: any) {
      console.error(`GET ${endpoint} failed`, error);
      throw new Error(error.response?.data?.message || "Erro ao carregar dados");
    }
  }
}

// Exporta uma instância do ApiService com uma URL base padrão
const apiService = new ApiService("https://fakestoreapi.com");

export default apiService;
