export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface RequestConfig extends RequestInit {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface ApiMethodParams {
  endpoint: string;
  data?: unknown;
  config?: RequestConfig;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const defaultConfig: RequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const handleResponse = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    const error: ApiError = await response.json().catch(() => ({
      message: "An unknown error occurred",
      status: response.status,
    }));

    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  const data = response.status === 204 ? [] : await response?.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
};

const createRequest = async <T>(
  endpoint: string,
  options: RequestConfig = {}
): Promise<ApiResponse<T>> => {
  try {
    const { params, ...restOptions } = options;

    // Handle query parameters
    const url = new URL(`${BASE_URL}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const config: RequestConfig = {
      ...defaultConfig,
      ...restOptions,
      headers: {
        ...defaultConfig.headers,
        ...restOptions.headers,
      },
    };

    const response = await fetch(url.toString(), config);
    return handleResponse<T>(response);
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};

const apiClient = {
  get: <T>(apiMethodParams: ApiMethodParams) =>
    createRequest<T>(apiMethodParams.endpoint, {
      ...apiMethodParams.config,
      method: "GET",
    }),

  post: <T>(apiMethodParams: ApiMethodParams) =>
    createRequest<T>(apiMethodParams.endpoint, {
      ...apiMethodParams.config,
      method: "POST",
      body: apiMethodParams.data
        ? JSON.stringify(apiMethodParams.data)
        : undefined,
    }),

  put: <T>(apiMethodParams: ApiMethodParams) =>
    createRequest<T>(apiMethodParams.endpoint, {
      ...apiMethodParams.config,
      method: "PUT",
      body: apiMethodParams.data
        ? JSON.stringify(apiMethodParams.data)
        : undefined,
    }),

  patch: <T>(apiMethodParams: ApiMethodParams) =>
    createRequest<T>(apiMethodParams.endpoint, {
      ...apiMethodParams.config,
      method: "PATCH",
      body: apiMethodParams.data
        ? JSON.stringify(apiMethodParams.data)
        : undefined,
    }),

  delete: <T>(apiMethodParams: ApiMethodParams) =>
    createRequest<T>(apiMethodParams.endpoint, {
      ...apiMethodParams.config,
      method: "DELETE",
    }),
};

export default apiClient;
