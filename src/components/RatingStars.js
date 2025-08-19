import "./RatingStars.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

export default function RatingStars() {
  const [value, setValue] = useState(1);

  return (
    <div className="stars-btn">
      <Box className="stars-box" sx={{ "& > legend": { mt: 0 } }}>
        <Rating
          name="simple-controlled"
          max={10}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">{value}</Typography>
      </Box>
      <button className="add-btn">+ Add to watch list</button>
    </div>
  );
}
