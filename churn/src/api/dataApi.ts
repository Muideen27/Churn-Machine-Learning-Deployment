import axios from 'axios';

type AxiosError<T = any> = {
    isAxiosError: boolean;
    response?: {
        data: T;
        status: number;
        statusText: string;
    };
    message: string;
};

const API_BASE_URL = 'https://churn-machine-learning-deployment.onrender.com/api';

// Define response types based on the API responses
interface UnivariateResponse {
    data: any[]; // Adjust type if you know the specific structure
}

interface BivariateResponse {
    feature1: any[];
    feature2: any[];
}

interface MultivariateResponse {
    [key: string]: any; // Each key corresponds to a feature name, and the value is the data for that feature
}

// Helper function to check if an error is an AxiosError
const isAxiosError = (error: unknown): error is AxiosError => {
    return (error as AxiosError).isAxiosError === true;
};

// Type-safe function to extract error message
const getErrorMessage = (error: unknown): string => {
    if (isAxiosError(error)) {
        return error.response?.data?.message || 'An error occurred while making the request.';
    }
    return (error as Error).message || 'An unknown error occurred.';
};

// Fetch univariate data
export const fetchUnivariateData = async (featureName: string): Promise<UnivariateResponse | null> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/univariate`, { feature_name: featureName });
        return response.data as UnivariateResponse;
    } catch (error) {
        console.error('Error fetching univariate data:', getErrorMessage(error));
        return null;
    }
};

// Fetch bivariate data
export const fetchBivariateData = async (feature1: string, feature2: string): Promise<BivariateResponse | null> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bivariate`, { feature1, feature2 });
        return response.data as BivariateResponse;
    } catch (error) {
        console.error('Error fetching bivariate data:', getErrorMessage(error));
        return null;
    }
};

// Fetch multivariate data
export const fetchMultivariateData = async (features: string[]): Promise<MultivariateResponse[] | null> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/multivariate`, { feature_names: features });
        return response.data as MultivariateResponse[];
    } catch (error) {
        console.error('Error fetching multivariate data:', getErrorMessage(error));
        return null;
    }
};

// Export all API functions together
export default {
    fetchUnivariateData,
    fetchBivariateData,
    fetchMultivariateData,
};
