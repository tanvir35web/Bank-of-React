import { Container, Grid } from "@mui/material";
import Navbar from "./Navbar";
import SliderSelect from "./SliderSelect";
import Tenure from "./Tenure";
import Result from "./Result";

function App() {
  return (
    <div>
      <Navbar />

      <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item md={6}>
          <SliderSelect />
          <Tenure />
        </Grid>
        <Grid item md={6}>
          <Result />
        </Grid>
      </Grid>
      </Container>

    </div>
  );
}

export default App;
