import axios from "axios";

const url = process.env.API_URL || `http://localhost:5000/posts`;

console.log("url", url);
export const fetchPosts = () => axios.get(url);
