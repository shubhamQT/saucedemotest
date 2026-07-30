import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Login success and inventory page renders with 6 complete product cards and navigation elements', { tag: ["@functional","@regression","@P0","@case-4e65ca5a-2539-4d2b-bb3a-b58801d22946"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Fill — Username input', async () => {
    await loginPage.fillUsername(env.username);
  });

  await test.step('Fill — Password input', async () => {
    await loginPage.fillPassword(env.password);
  });

  await test.step('Click — Login button', async () => {
    await loginPage.clickLogin();
  });

  await test.step('Assert contains — Inventory page header', async () => {
    await inventoryPage.expectTitleContainsText('Products');
  });

  await test.step('Assert visible — Product list container', async () => {
    await inventoryPage.expectInventoryListVisible();
  });

  await test.step('Assert count — Total product cards', async () => {
    await inventoryPage.expectInventoryItemCount(6);
  });

  await test.step('Assert count — Product images', async () => {
    await inventoryPage.expectInventoryItemImgCount(6);
  });

  await test.step('Assert count — Product names', async () => {
    await inventoryPage.expectInventoryItemNameCount(6);
  });

  await test.step('Assert count — Product descriptions', async () => {
    await inventoryPage.expectInventoryItemDescCount(6);
  });

  await test.step('Assert count — Product prices', async () => {
    await inventoryPage.expectInventoryItemPriceCount(6);
  });

  await test.step('Assert count — Add to cart buttons', async () => {
    await inventoryPage.expectAddToCartButtonsCount(6);
  });

  await test.step('Assert visible — Menu button', async () => {
    await inventoryPage.expectOpenMenuVisible();
  });

  await test.step('Assert visible — Shopping cart icon', async () => {
    await inventoryPage.expectShoppingCartVisible();
  });

  await test.step('Assert visible — Sorting dropdown', async () => {
    await inventoryPage.expectProductSortVisible();
  });
});
