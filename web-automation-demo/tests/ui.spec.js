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
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(
    "Sauce Labs Backpack",
  );
  await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText(
    "$29.99",
  );
  await page.screenshot({
    path: test.info().outputPath("cart.png"),
    fullPage: true,
  });
});

