const isLoggined = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export default isLoggined;
