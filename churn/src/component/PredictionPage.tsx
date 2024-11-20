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
} from '@mui/material';
import MainHeader from './MainHeader';

const currencies = ['USD', 'EUR', 'NGN'];
const schemeTypes = ['Basic', 'Premium', 'Enterprise'];

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { value: unknown }>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = () => {
    console.log('Submitting Prediction Request:', formData);
    // You can call the API endpoint here
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

      {/* Form */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Years with Bank"
            name="YEARS_WITH_BANK"
            type="number"
            value={formData.YEARS_WITH_BANK}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Risk Rating"
            name="RISK_RATING"
            value={formData.RISK_RATING}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            name="CURRENCY"
            value={formData.CURRENCY}
            onChange={handleChange}
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
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            name="SCHEME_TYPE"
            value={formData.SCHEME_TYPE}
            onChange={handleChange}
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
                  onChange={handleChange}
                />
              }
              label={feature.replaceAll('_', ' ')}
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
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Debit Volume"
            name="LAST_12_MONTHS_DEBIT_VOLUME"
            type="number"
            value={formData.LAST_12_MONTHS_DEBIT_VOLUME}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Credit Value"
            name="LAST_12_MONTHS_CREDIT_VALUE"
            type="number"
            value={formData.LAST_12_MONTHS_CREDIT_VALUE}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last 12 Months Debit Value"
            name="LAST_12_MONTHS_DEBIT_VALUE"
            type="number"
            value={formData.LAST_12_MONTHS_DEBIT_VALUE}
            onChange={handleChange}
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
