import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import MainHeader from './MainHeader';

const currencies = ['USD', 'EUR', 'NGN'];
const schemeTypes = ['CAA', 'LAA', 'ODA', 'SBA', 'TDA'];
const riskRating = ['LOW', 'MEDIUM', 'HIGH'];

const PredictionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    YEARS_WITH_BANK: '',
    RISK_RATING: '',
    CURRENCY: '',
    AVE_BAL: '',
    SCHEME_TYPE: '',
    MOBILE_APP_ADOPTION: false,
    INTERNET_BANKING_ADOPTION: false,
    USSD_BANKING_ADOPTION: false,
    DIGITAL_LOAN: false,
    UNSECURED_LOAN: false,
    TERMLOAN_STATUS: false,
    CREDIT_CARD: false,
    SUBSEGMENT: '',
    LAST_12_MONTHS_CREDIT_VOLUME: '',
    LAST_12_MONTHS_DEBIT_VOLUME: '',
    LAST_12_MONTHS_CREDIT_VALUE: '',
    LAST_12_MONTHS_DEBIT_VALUE: '',
  });

  // Handler for TextField and Checkbox
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handler for Select
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log('Submitting Prediction Request:', formData);
  
    // Encode categorical values
    const encodedData = {
      ...formData,
      RISK_RATING:
        formData.RISK_RATING === 'LOW'
          ? 1
          : formData.RISK_RATING === 'MEDIUM'
          ? 2
          : 3, // HIGH
      SCHEME_TYPE:
        formData.SCHEME_TYPE === 'CAA'
          ? 1
          : formData.SCHEME_TYPE === 'LAA'
          ? 2
          : formData.SCHEME_TYPE === 'ODA'
          ? 3
          : formData.SCHEME_TYPE === 'SBA'
          ? 4
          : 5, // TDA
      CURRENCY:
        formData.CURRENCY === 'USD'
          ? 1
          : formData.CURRENCY === 'EUR'
          ? 2
          : 3, // NGN
    };
  
    const apiURL = 'http://127.0.0.1:5000/api/predict';
  
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(encodedData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch prediction');
      }
  
      const data = await response.json();
      console.log('Prediction Response:', data);
  
      const resultMessage = data.prediction === 1 ? 'Churn' : 'No Churn';
      alert(`Churn Prediction: ${resultMessage}`);
    } catch (error) {
      console.error('Error submitting prediction:', error);
      alert('An error occurred while predicting churn. Please try again.');
    }
  };
  

  return (
    <Container maxWidth="lg" className="tw-h-full tw-flex tw-flex-col tw-py-8 tw-bg-white">
      <MainHeader />

      {/* Page Title */}
      <Box className="tw-mb-8 tw-text-center">
        <Typography variant="h3" className="tw-font-bold tw-text-primary">
          Churn Prediction
        </Typography>
        <Typography variant="body1" className="tw-text-gray-600">
          Enter customer details to predict churn likelihood.
        </Typography>
      </Box>
      <br />
      {/* Form */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Years with Bank"
            name="YEARS_WITH_BANK"
            type="number"
            value={formData.YEARS_WITH_BANK}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Updated Risk Rating Field */}
        <Grid item xs={12} sm={6}>
          <Select
            name="RISK_RATING"
            value={formData.RISK_RATING}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Risk Rating
            </MenuItem>
            {riskRating.map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        {/* Updated Scheme Type Field */}
        <Grid item xs={12} sm={6}>
          <Select
            name="SCHEME_TYPE"
            value={formData.SCHEME_TYPE}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Scheme Type
            </MenuItem>
            {schemeTypes.map((scheme) => (
              <MenuItem key={scheme} value={scheme}>
                {scheme}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Select
            name="CURRENCY"
            value={formData.CURRENCY}
            onChange={handleSelectChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Currency
            </MenuItem>
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Average Balance"
            name="AVE_BAL"
            type="number"
            value={formData.AVE_BAL}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Boolean Features */}
        <Grid item xs={12}>
        {[
          'MOBILE_APP_ADOPTION',
          'INTERNET_BANKING_ADOPTION',
          'USSD_BANKING_ADOPTION',
          'DIGITAL_LOAN',
          'UNSECURED_LOAN',
          'TERMLOAN_STATUS',
          'CREDIT_CARD',
        ].map((feature) => (
          <FormControlLabel
            key={feature}
            control={
              <Checkbox
                name={feature}
                checked={(formData as any)[feature]}
                onChange={handleInputChange}
              />
            }
            label={feature.replace(/_/g, ' ')}
          />
        ))}
      </Grid>


        {/* Numeric Inputs */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Credit Volume"
            name="LAST_12_MONTHS_CREDIT_VOLUME"
            type="number"
            value={formData.LAST_12_MONTHS_CREDIT_VOLUME}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Debit Volume"
            name="LAST_12_MONTHS_DEBIT_VOLUME"
            type="number"
            value={formData.LAST_12_MONTHS_DEBIT_VOLUME}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Credit Value"
            name="LAST_12_MONTHS_CREDIT_VALUE"
            type="number"
            value={formData.LAST_12_MONTHS_CREDIT_VALUE}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Debit Value"
            name="LAST_12_MONTHS_DEBIT_VALUE"
            type="number"
            value={formData.LAST_12_MONTHS_DEBIT_VALUE}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
            Predict Churn
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PredictionPage;
