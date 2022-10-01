import Axios from "axios";

export default Axios.create({
  // baseURL: "https://database-design.vercel.app",
  baseURL: "http://localhost:5000",
});
