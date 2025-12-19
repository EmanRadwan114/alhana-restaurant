const BASE_URL = "/api";

const getAllMeals = async (category = "", page = 1, perPage = 6) => {
  const params = new URLSearchParams({
    category,
    page: page.toString(),
    limit: perPage.toString(),
  });

  const res = await fetch(`${BASE_URL}/meals?${params}`);
  return await res.json();
};

const getMealsByLabel = async (label = "", page = 1, perPage = 6) => {
  const params = new URLSearchParams({
    label,
    page: page.toString(),
    limit: perPage.toString(),
  });

  const res = await fetch(`${BASE_URL}/meals?${params}`);
  return await res.json();
};

const getMealById = async (id) => {
  const res = await fetch(`${BASE_URL}/meals?id=${id}`);
  const data = await res.json();
  // Since serverless filtering might return an array, ensure we return one object
  return Array.isArray(data) ? data[0] : data;
};

const getSampleReviews = async () => {
  const res = await fetch(`${BASE_URL}/reviews`);
  return await res.json();
};

const getMealReviews = async (id) => {
  const res = await fetch(`${BASE_URL}/reviews?mealId=${id}`);
  return await res.json();
};

export default {
  getAllMeals,
  getMealReviews,
  getSampleReviews,
  getMealById,
  getMealsByLabel,
};
