import axios from 'axios';

// Base URL for the backend
const API_BASE_URL = 'http://127.0.0.1:5000';

// Fetch univariate data
export const fetchUnivariateData = async (featureName) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/univariate`, { feature_name: featureName });
        return response.data;
    } catch (error) {
        console.error('Error fetching univariate data:', error);
        return null;
    }
};

// Fetch bivariate data
export const fetchBivariateData = async (feature1, feature2) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bivariate`, { feature1, feature2 });
        return response.data;
    } catch (error) {
        console.error('Error fetching bivariate data:', error);
        return null;
    }
};

// Fetch multivariate data
export const fetchMultivariateData = async (features) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/multivariate`, { feature_names: features });
        return response.data;
    } catch (error) {
        console.error('Error fetching multivariate data:', error);
        return null;
    }
};
