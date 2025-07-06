export async function fetchCategories() {
  const res = await fetch(
    "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  console.log("Fetching categories");
  return res.json();
}

export async function fetchQuestions() {
  const res = await fetch(
    "https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch questions");
  }
  return res.json();
}
