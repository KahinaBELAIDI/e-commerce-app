import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
const steps = ["Shipping Address", "Payment Detail"];
const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <div classeName={classes.toolbar} />
      <main className={classes.layout}>
        <Paper classeName={classes.paper}>
          <Typography variant="h4" aligh="center"></Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
