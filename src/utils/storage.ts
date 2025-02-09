// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveUserData = (data: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(data));
    }
  };
  
  export const getUserData = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("userData");
      return data ? JSON.parse(data) : null;
    }
    return null;
  };
  