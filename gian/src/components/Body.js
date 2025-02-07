import React from "react";
import Paper from "@mui/material/Paper";
import events from "../data.js";

export default function Body() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: "5px",
        margin: "5px",
      }}
    >
      {events.map((event) => (
        <Paper
          elevation={3}
          sx={{
            maxWidth: "30%",
            minHeight: "30%",
            padding: 4,
            margin: 2,
          }}
          key={event.id}
        >
          <div
            style={{
              backgroundImage: `url("${event.img}")`,
              backgroundSize: "cover",
              height: "400px",
              width: "100%",
            }}
          ></div>

          <h2>{event.title}</h2>
          <p>{event.text}</p>
        </Paper>
      ))}
    </div>
  );
}
