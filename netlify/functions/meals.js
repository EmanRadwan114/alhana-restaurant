import { getStore } from "@netlify/blobs";
// 1. Import your backup data directly
import backupData from "./db-backup.json" with { type: "json" };

export default async (req) => {
  const store = getStore("my-store");
  const url = new URL(req.url);
  const params = url.searchParams;

  // 2. Load from storage
  let allData = await store.get("db-json", { type: "json" });

  // 3. AUTO-SEED: If storage is empty (first run), populate it from the backup file
  if (!allData) {
    allData = backupData;
    await store.setJSON("db-json", backupData);
  }

  // 4. Route the request based on the URL path (meals vs reviews)
  const path = url.pathname.split("/").pop();
  let data = path === "reviews" ? allData.reviews : allData.meals;

  // 5. Apply Filtering
  const category = params.get("category");
  const label = params.get("label");
  const id = params.get("id");
  const mealId = params.get("mealId");

  if (category && category !== "all")
    data = data.filter((m) => m.category === category);
  if (label) data = data.filter((m) => m.label === label);
  if (id) data = data.filter((m) => m.id === id);
  if (mealId) data = data.filter((r) => r.mealId === mealId);

  // 6. Calculate Pagination Metadata
  const totalItems = data.length;
  const page = parseInt(params.get("page") || "1");
  const limit = parseInt(params.get("limit") || "6");
  const pages = Math.ceil(totalItems / limit);

  // 7. Slice Data for the current page
  const start = (page - 1) * limit;
  const paginatedData = data.slice(start, start + limit);

  // 8. Return the structured object
  // Note: I added "pages" at the top level to perfectly match your component's destructuring
  return new Response(
    JSON.stringify({
      data: paginatedData,
      pages: pages, // Matches: const { data: { pages } }
      pagination: {
        pages,
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
