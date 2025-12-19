import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("my-store");
  const url = new URL(req.url);
  const params = url.searchParams;

  // 1. Load your full data object from persistent storage
  const allData = (await store.get("db-json", { type: "json" })) || {
    meals: [],
    reviews: [],
  };

  // 2. Route the request based on the URL path (meals vs reviews)
  const path = url.pathname.split("/").pop();
  let data = path === "reviews" ? allData.reviews : allData.meals;

  // 3. Apply Filtering
  const category = params.get("category");
  const label = params.get("label");
  const id = params.get("id");
  const mealId = params.get("mealId");

  if (category && category !== "all")
    data = data.filter((m) => m.category === category);
  if (label) data = data.filter((m) => m.label === label);
  if (id) data = data.filter((m) => m.id === id);
  if (mealId) data = data.filter((r) => r.mealId === mealId);

  // 4. Calculate Pagination Metadata
  const totalItems = data.length;
  const page = parseInt(params.get("page") || "1");
  const limit = parseInt(params.get("limit") || "6");
  const pages = Math.ceil(totalItems / limit);

  // 5. Slice Data for the current page
  const start = (page - 1) * limit;
  const paginatedData = data.slice(start, start + limit);

  // 6. Return the structured object matching your component's needs
  return new Response(
    JSON.stringify({
      data: paginatedData, // Your component maps over this
      pagination: {
        pages, // Your component uses this for the Pagination count
        totalItems,
        currentPage: page,
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
