import "./App.css";
import { Slider } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("february 05 2025");
  date.setDate(date.getDate() + count);

  return (
    <Box
      sx={{
        width: 500,
        height: 300,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        value={steps}
        min={1}
        max={5}
        onChange={(e) => setSteps(e.target.value)}
        sx={{ flexGrow: 1 }}
      ></Slider>
      days: {steps}
      <Button
        variant="outlined"
        sx={{ margin: 2 }}
        onClick={() => setCount((c) => c - steps)}
      >
        -
      </Button>
      <Button
        variant="outlined"
        sx={{ margin: 2 }}
        onClick={() => setCount((c) => c + steps)}
      >
        +
      </Button>
      <p>
        {count === 0
          ? `Today is `
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toLocaleDateString()}
      </p>
    </Box>
  );
}

export default App;
