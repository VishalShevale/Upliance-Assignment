import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={() => router.push("/form")}>Go to Form</Button>
    </div>
  );
};

export default Dashboard;
