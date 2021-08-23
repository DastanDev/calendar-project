export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "your-server-link.com/api"
    : "http://localhost:5000/api"
