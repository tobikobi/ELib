import axios from "axios";

export default axios.create({
  baseURL: " https://36f0-123-201-8-224.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
