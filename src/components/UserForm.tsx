"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";

const UserForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const values = watch();
    setIsDirty(Object.values(values).some((val) => val !== ""));
  }, [watch]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    localStorage.setItem("userData", JSON.stringify({ id: Date.now(), ...data }));
    alert("User data saved!");
    reset();
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const warnUser = (e: any) => {
      if (isDirty) e.returnValue = "You have unsaved changes!";
    };
    window.addEventListener("beforeunload", warnUser);
    return () => window.removeEventListener("beforeunload", warnUser);
  }, [isDirty]);

  return (
    <Box sx={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <Typography variant="h5">User Form</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register("name")} label="Name" fullWidth margin="normal" />
        <TextField {...register("email")} label="Email" fullWidth margin="normal" />
        <TextField {...register("address")} label="Address" fullWidth margin="normal" />
        <TextField {...register("phone")} label="Phone" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;


