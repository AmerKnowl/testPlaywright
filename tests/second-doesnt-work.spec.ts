import { test, chromium,Page, expect } from "@playwright/test";
import fs from "fs";
test.describe.configure({ mode: 'serial' });

let page: Page;
const FLOW_NAME = "Allocation";

test.describe("Login Tests 2", () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('runs second', async () => {
    await page.goto(`https://yahoo.com`);
    await page.goto(
        "https://mysite/home.html"
    );
    await page.waitForTimeout(5000);
    await expect(page.getByText("Allocation")).toBeVisible()
  });
});



