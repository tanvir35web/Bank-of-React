import { Container, Grid } from "@mui/material";
import Navbar from "./Navbar";
import SliderSelect from "./SliderSelect";
import Tenure from "./Tenure";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  return (
    <div>
      <Navbar />

      <Container maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData} />
          </Grid>
          <Grid item md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
