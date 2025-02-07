import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Loren ipsum are  sagrada familia Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },

  {
    title: "How long do I ahve to return my chairs?",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  ",
  },

  {
    title: "Do you ship to countries outside EU?",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

function App() {
  return (
    <div>
      <Accordion items={faqs} />
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Paper
      elevation={4}
      sx={{
        borderTop: isOpen ? "4px solid green" : "",
        padding: "20px",
        margin: "30px",
        width: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ color: isOpen ? "green" : "gray" }}>
        {num < 9 ? `${num + 1}` : num + 1}
      </p>
      <h1>{title}</h1>
      <Button onClick={() => setIsOpen(!isOpen)} sx={{ alignSelf: "flex-end" }}>
        x
      </Button>
      {isOpen && <p>{text}</p>}
    </Paper>
  );
}

function Accordion({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          key={item.title}
          num={index}
        />
      ))}
    </div>
  );
}

export default App;
