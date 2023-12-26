import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <>
      <Stack
        sx={{
          color: "grey.500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="success" />
      </Stack>
    </>
  );
};

export default Spinner;
