import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 17edb1786fe00dbe236135dc4c15c73f18f45d2efdc698afb4bd0f6b400402fd'
  }
});