export const setToken = token => localStorage.setItem("token", token);

export const removeToken = () => localStorage.removeItem("token");

export const getToken = () => localStorage.getItem("token");

export const parseDate = dateString => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let newDate = new Date(Date.parse(dateString));
  return `${newDate.getDate()} ${
    monthNames[newDate.getMonth()]
  }, ${newDate.getFullYear()}`;
};

export const NOTES_API_URL = "http://127.0.0.1:8000/api/notes";
