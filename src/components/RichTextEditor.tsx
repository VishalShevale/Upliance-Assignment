"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("richText");
    if (savedContent) setContent(savedContent);
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem("richText", value);
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h5">Rich Text Editor</Typography>
      <ReactQuill value={content} onChange={handleChange} />
    </Box>
  );
};

export default RichTextEditor;
