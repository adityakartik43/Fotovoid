const autoLogout = () => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("expiry");

  if (!token || Date.now() > parseInt(expiry)) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
  }
};

export default autoLogout;
