import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getUserData } from "../utils/storage";
import Counter from "../components/Counter";
import Dashboard from "../components/Dashboard";
import RichTextEditor from "../components/RichTextEditor";
import UserForm from "../components/UserForm";

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setUserData(getUserData());
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <h2>User Information</h2>
        <p>Name: {userData?.name || "N/A"}</p>
      </div>

      <div 
        style={{
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "40px",
          marginTop: "20px"
        }}
      >
        <div style={{ border: "2px solid black", padding: "10px", borderRadius: "8px" }}>
          <Counter />
        </div>
        <div style={{ border: "2px solid black", padding: "10px", borderRadius: "8px" }}>
          <RichTextEditor />
        </div>
        <div style={{ border: "2px solid black", padding: "10px", borderRadius: "8px" }}>
          <Dashboard />
        </div>
        <div style={{ border: "2px solid black", padding: "10px", borderRadius: "8px" }}>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
