const { test, expect } = require("@playwright/test");
test("API-01 lists all 100 posts with unique identifiers", async ({
  request,
}) => {
  const r = await request.get("/posts");
  expect(r.status()).toBe(200);
  const rows = await r.json();
  expect(rows).toHaveLength(100);
  expect(new Set(rows.map((x) => x.id)).size).toBe(100);
});
test("API-02 retrieves post 1 with its documented schema", async ({
  request,
}) => {
  const r = await request.get("/posts/1");
  expect(r.status()).toBe(200);
  expect(r.headers()["content-type"]).toContain("application/json");
  expect(await r.json()).toEqual({
    userId: 1,
    id: 1,
    title: expect.any(String),
    body: expect.any(String),
  });
});
test("API-03 rejects a nonexistent post", async ({ request }) => {
  const r = await request.get("/posts/999999");
  expect(r.status()).toBe(404);
  expect(await r.json()).toEqual({});
});
test("API-04 filters posts by user without leaking other users", async ({
  request,
}) => {
  const r = await request.get("/posts", { params: { userId: 1 } });
  expect(r.status()).toBe(200);
  const rows = await r.json();
  expect(rows).toHaveLength(10);
  for (const row of rows) expect(row.userId).toBe(1);
});
test("API-05 nonexistent user filter returns an empty collection", async ({
  request,
}) => {
  const r = await request.get("/posts", { params: { userId: 999999 } });
  expect(r.status()).toBe(200);
  expect(await r.json()).toEqual([]);
});
test("API-06 nested comments all belong to the requested post", async ({
  request,
}) => {
  const r = await request.get("/posts/1/comments");
  expect(r.status()).toBe(200);
  const rows = await r.json();
  expect(rows).toHaveLength(5);
  for (const row of rows) {
    expect(row.postId).toBe(1);
    expect(row.email).toEqual(expect.any(String));
    expect(row.body.length).toBeGreaterThan(0);
  }
});
test("API-07 nested and filtered comment routes agree", async ({ request }) => {
  const a = await request.get("/posts/1/comments"),
    b = await request.get("/comments", { params: { postId: 1 } });
  expect(a.status()).toBe(200);
  expect(b.status()).toBe(200);
  expect(await a.json()).toEqual(await b.json());
});
test("API-08 user collection has ten unique identities", async ({
  request,
}) => {
  const r = await request.get("/users");
  expect(r.status()).toBe(200);
  const rows = await r.json();
  expect(rows).toHaveLength(10);
  expect(new Set(rows.map((x) => x.id)).size).toBe(10);
  for (const row of rows) {
    expect(row.username.length).toBeGreaterThan(0);
    expect(row.email).toContain("@");
  }
});
test("API-09 user detail contains structured address information", async ({
  request,
}) => {
  const r = await request.get("/users/1");
  expect(r.status()).toBe(200);
  const row = await r.json();
  expect(row.id).toBe(1);
  expect(row.address).toMatchObject({
    city: expect.any(String),
    zipcode: expect.any(String),
    geo: { lat: expect.any(String), lng: expect.any(String) },
  });
});
test("API-10 completed todo filter returns only completed items", async ({
  request,
}) => {
  const r = await request.get("/todos", { params: { completed: true } });
  expect(r.status()).toBe(200);
  const rows = await r.json();
  expect(rows.length).toBeGreaterThan(0);
  for (const row of rows) expect(row.completed).toBe(true);
});
test("API-11 album photos preserve parent relationship", async ({
  request,
}) => {
  const r = await request.get("/albums/1/photos");
  expect(r.status()).toBe(200);
  const rows = await r.json();
  expect(rows).toHaveLength(50);
  for (const row of rows) {
    expect(row.albumId).toBe(1);
    expect(row.url).toMatch(/^https:\/\//);
  }
});
test("API-12 todo detail preserves boolean completion type", async ({
  request,
}) => {
  const r = await request.get("/todos/1");
  expect(r.status()).toBe(200);
  expect(await r.json()).toEqual({
    userId: 1,
    id: 1,
    title: expect.any(String),
    completed: false,
  });
});

test("API-13 POST simulates creating a post", async ({ request }) => {
  const data = {
    title: "QA synthetic post",
    body: "Portfolio test",
    userId: 1,
  };
  const response = await request.post("/posts", { data });
  expect(response.status()).toBe(201);
  expect(await response.json()).toEqual({ ...data, id: 101 });
});
test("API-14 PUT simulates replacing a post", async ({ request }) => {
  const data = {
    id: 1,
    title: "QA replacement",
    body: "Replacement body",
    userId: 1,
  };
  const response = await request.put("/posts/1", { data });
  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual(data);
});
test("API-15 DELETE simulates removing a post", async ({ request }) => {
  const response = await request.delete("/posts/1");
  expect(response.status()).toBe(200);
  expect(await response.json()).toEqual({});
});
test("API-16 malformed JSON is rejected", async ({ request }) => {
  test.fail(
    true,
    "Known demo defect DEMO-01: malformed JSON returns 500 instead of 400; retain the client-error assertion.",
  );
  const response = await request.post("/posts", {
    headers: { "Content-Type": "application/json" },
    data: '{"title":',
  });
  expect(response.status()).toBe(400);
});
test("API-17 post lookup completes within a generous demo budget", async ({
  request,
}) => {
  const started = performance.now();
  const response = await request.get("/posts/1");
  const elapsed = performance.now() - started;
  expect(response.status()).toBe(200);
  expect(elapsed).toBeLessThan(10000);
});
