const { test, expect } = require("@playwright/test");

test("UI-01 standard user logs in and adds one item to cart", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory.html$/);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/cart.html$/);
  const cart = page.locator('[data-test="cart-list"]');
  await expect(cart).toBeVisible();
  const items = cart.locator('[data-test="inventory-item"]');
  await expect(items).toHaveCount(1);
  await expect(items.locator('[data-test="inventory-item-name"]')).toHaveText(
    "Sauce Labs Backpack",
  );
  await expect(items.locator('[data-test="inventory-item-price"]')).toHaveText(
    "$29.99",
  );
});

test("UI-02 invalid password shows an error and keeps the user signed out", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("not-the-demo-password");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username and password do not match",
  );
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toHaveCount(
    0,
  );
});

async function signIn(page) {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
}

test("UI-03 removing a cart item clears it and restores the add action", async ({
  page,
}) => {
  await signIn(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
    "1",
  );
  await page.locator('[data-test="shopping-cart-link"]').click();
  const cart = page.locator('[data-test="cart-list"]');
  await expect(cart).toBeVisible();
  await expect(cart.locator('[data-test="inventory-item"]')).toHaveCount(1);
  await cart.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(cart.locator('[data-test="inventory-item"]')).toHaveCount(0);
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(
    0,
  );
  await page.locator('[data-test="continue-shopping"]').click();
  await expect(
    page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
  ).toBeVisible();
});

test("UI-04 numeric price sorting preserves all six products", async ({
  page,
}) => {
  await signIn(page);
  const names = page.locator('[data-test="inventory-item-name"]');
  await expect(names).toHaveCount(6);
  const originalNames = (await names.allTextContents()).sort();
  const prices = page.locator('[data-test="inventory-item-price"]');
  await expect(prices).toHaveCount(6);
  const original = (await prices.allTextContents()).map((text) =>
    Number(text.replace("$", "")),
  );
  const lowToHigh = [...original].sort((a, b) => a - b);
  await page
    .locator('[data-test="product-sort-container"]')
    .selectOption("lohi");
  await expect(prices).toHaveText(
    lowToHigh.map((price) => "$" + price.toFixed(2)),
  );
  await page
    .locator('[data-test="product-sort-container"]')
    .selectOption("hilo");
  await expect(prices).toHaveText(
    [...lowToHigh].reverse().map((price) => "$" + price.toFixed(2)),
  );
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
  expect((await names.allTextContents()).sort()).toEqual(originalNames);
});
