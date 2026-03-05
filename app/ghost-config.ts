import axios from "axios";

export const api = axios.create({
  baseURL: "https://surya.dulaytechservices.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = async () => {
  try {
    const response = await api.get("/ghost/api/content/posts/", {
      params: {
        key: "d07e127956792a42c83e253a93",
      },
    });

    return response.data.posts;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/ghost/api/content/posts/slug/${slug}/`, {
      params: {
        key: "d07e127956792a42c83e253a93",
      },
    });

    return response.data.posts[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};
