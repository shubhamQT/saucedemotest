import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Login, view product list, and add a product to cart', { tag: ["@e2e","@regression","@P0","@login-view-products-add-to-cart"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Open the application login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.auth.password);
  });
  await test.step('Click — Click login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Assert visible — Verify inventory page is displayed', async () => {
    await inventoryPage.expectProductsVisible();
  });
  await test.step('Assert count greater than — Verify products are listed', async () => {
    await inventoryPage.expectProductsCountGreaterThan(0);
  });
  await test.step('Assert visible — Verify product name, price, description, and image are visible', async () => {
    await inventoryPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await inventoryPage.expectCartBadgeText('1');
  });
});
