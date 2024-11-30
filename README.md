# Churn-Machine-Learning-Deployment

## Overview
This project is a complete **Churn Prediction Platform** designed to predict customer churn for financial institutions. It includes both frontend and backend systems to provide an intuitive user interface and robust API capabilities. The platform uses machine learning models to analyze customer data and deliver actionable insights to improve retention strategies.

## Features
- **Frontend**:
  - Built using **React**, **Vite**, and **TypeScript**.
  - Responsive UI with pre-filled test profiles and customizable forms.
  - User authentication for secured access.
  - Interactive data visualizations and prediction results.

- **Backend**:
  - Developed with **Flask** and follows a modular architecture.
  - Predictive capabilities using a **CatBoost** machine learning model.
  - API endpoints for:
    - User authentication (Sign up, Sign in, Sign out).
    - Churn prediction based on customer data.
  - CORS-enabled for secure cross-origin communication.

## Key Technologies
- **Frontend**:
  - React + Vite for fast and efficient web development.
  - Material-UI and Tailwind CSS for modern styling.
  - Axios for API integration.

- **Backend**:
  - Flask for REST API development.
  - SQLAlchemy for database management.
  - Flask-JWT-Extended for user authentication.
  - CatBoost for machine learning predictions.
  - Joblib for model serialization and loading.

- **Deployment**:
  - **Render** for both frontend and backend hosting.
  - Continuous Deployment enabled for seamless updates.

## How It Works

### 1. Frontend Workflow
- Users interact with the platform via a clean and intuitive interface.
- Features include:
  - **Prediction Form**: Users input customer data or select predefined profiles to test the model.
  - **Authentication**: Ensures only authorized users access sensitive features.
  - **Data Visualizations**: Graphical representations of churn-related trends.

### 2. Backend Workflow
- **Authentication**: User credentials are securely managed with hashed passwords and JWT tokens.
- **Prediction Endpoint**:
  - Accepts customer data in JSON format.
  - Extracts features and feeds them to the CatBoost model for prediction.
  - Returns the churn probability as a JSON response.

### 3. Machine Learning Model
- The platform uses a pre-trained **CatBoost** model stored as a `.pkl` file.
- Input features include:
  - **YEARS_WITH_BANK**: Customer tenure.
  - **RISK_RATING**: Financial risk category.
  - **CURRENCY**, **SCHEME_TYPE**, and other behavioral indicators.
  - Various usage statistics like credit and debit volumes.
- The model predicts whether a customer is likely to churn based on these features.

## API Endpoints
### Authentication
- **POST** `/auth/signup`: Register a new user.
- **POST** `/auth/signin`: Log in and retrieve a JWT token.
- **POST** `/auth/signout`: Log out and invalidate the token.

### Prediction
- **POST** `/predict`:
  - Request body: JSON object with customer feature data.
  - Response: Predicted churn status.

## Deployment Notes
### Frontend
- Hosted on Render with a publish directory set to `churn/dist`.
- Environment variables (if any) are managed via Render's settings.

### Backend
- Hosted on Render with Python environment and `gunicorn` as the WSGI server.
- Ensure the machine learning model file (`cat_boost_model.pkl`) is present in the `models` directory.

## Running Locally
### Prerequisites
- Node.js and npm for the frontend.
- Python 3.8+ and pip for the backend.
- A PostgreSQL database for production-like settings.

### Setup
#### Frontend
1. Navigate to the `churn` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

#### Backend
1. Navigate to the `churn-api` directory.
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask app:
   ```bash
   python run.py
   ```

## Testing
### Frontend
- Use browser developer tools to monitor API calls and responses.
- Test form submissions with real and pre-filled profiles.

### Backend
- Use `curl` or tools like Postman to test API endpoints:
  ```bash
  curl -X POST https://<backend-url>/auth/signin \
       -H "Content-Type: application/json" \
       -d '{"email": "example@gmail.com", "password": "12345"}'
  ```
- Ensure all endpoints return expected responses.

## Challenges and Lessons
- **CORS Issues**: Addressed by enabling appropriate headers.
- **Model Integration**: Ensured seamless interaction between Flask and the serialized CatBoost model.
- **Deployment**: Debugged Render-specific nuances, such as static file paths and environment variables.

## Future Enhancements
- **Advanced Visualizations**: Add more dynamic and detailed charts.
- **Enhanced Security**: Implement multi-factor authentication.
- **Model Upgrades**: Integrate additional ML models for comparative analysis.
- **Scaling**: Optimize the platform for high user traffic.

## Credits
- **Frontend Development**: [Your Name/Team Name]
- **Backend Development**: [Your Name/Team Name]
- **Machine Learning Model**: [Your Name/Team Name]

## License
This project is licensed under the MIT License.
