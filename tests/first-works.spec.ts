import { test, chromium,Page, expect } from "@playwright/test";
import fs from "fs";
test.describe.configure({ mode: 'serial' });

let page: Page;
const FLOW_NAME = "Allocation";

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
        "https://mysite/home.html"
    );
    const componentsDropdownLocator = await page.getByRole("textbox", {
      name: "Components",
    });
    await componentsDropdownLocator.waitFor({ state: "visible" });
    await componentsDropdownLocator.click();
    const DROPDOWN_COMPONENT_LOCATOR = await page.getByRole("option", {
      name: FLOW_NAME,
    });
    const SIMILAR_NAMES_COUNT = await DROPDOWN_COMPONENT_LOCATOR.count();
    if (SIMILAR_NAMES_COUNT <= 1) {
      DROPDOWN_COMPONENT_LOCATOR.click();
    } else {
      await page.getByRole('option', { name: `${FLOW_NAME}`, exact: true }).click();
    }
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);
    await expect(page.getByText("Allocation")).toBeVisible()
  });
});



