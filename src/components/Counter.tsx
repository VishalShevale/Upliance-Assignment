"use client";

import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    const intensity = Math.min(count * 10, 255);
    setBgColor(`rgb(${intensity}, ${255 - intensity}, 200)`);
  }, [count]);

  return (
    <Box sx={{ backgroundColor: bgColor, padding: "20px", borderRadius: "10px", textAlign: "center" }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button onClick={() => setCount(count + 1)} variant="contained" sx={{ margin: 1 }}>
        Increment
      </Button>
      <Button onClick={() => setCount(count - 1)} variant="contained" sx={{ margin: 1 }}>
        Decrement
      </Button>
      <Button onClick={() => setCount(0)} variant="contained" sx={{ margin: 1, backgroundColor: "red" }}>
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
