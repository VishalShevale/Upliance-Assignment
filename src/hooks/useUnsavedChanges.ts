import { useEffect } from "react";

export const useUnsavedChanges = (hasChanges: boolean) => {
  useEffect(() => {
    const handleUnload = (event: BeforeUnloadEvent) => {
      if (hasChanges) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [hasChanges]);
};
