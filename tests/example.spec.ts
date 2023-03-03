import { test, chromium,Page, expect } from "@playwright/test";
import fs from "fs";
test.describe.configure({ mode: 'serial' });

let page: Page;

test.describe("Login Tests", () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('runs first', async () => {
    await page.goto(`https://google.com`);
    await page.goto(
        "https://notebooks-stg-cf.dod2af5.easn.morningstar.com/static/av/demo.html"
    );
    await page.waitForTimeout(5000);
    await expect(page.getByText("Carbon Risk")).toBeVisible()
  });

  test('runs second', async () => {
    await page.goto(`https://yahoo.com`);
    await page.goto(
        "https://notebooks-stg-cf.dod2af5.easn.morningstar.com/static/av/demo.html"
    );
    await page.waitForTimeout(5000);
    await expect(page.getByText("Carbon Risk")).toBeVisible()
  });
});



