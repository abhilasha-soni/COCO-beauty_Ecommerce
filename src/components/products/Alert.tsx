import React, { useState } from "react";
import Alert from "@mui/material/Alert";

export default function MyComponent() {
  const [open, setOpen] = useState(true);

  setTimeout(() => {
    setOpen(false);
  }, 4000);

  return (
    <div className="alert">
      {open && (
        <Alert severity="success" onClose={() => setOpen(false)}>
          Added to Favourite!
        </Alert>
      )}
    </div>
  );
}
