// auth.setup.ts
import {chromium, test as setup} from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto(
        "https://notebooks-stg-cf.dod2af5.easn.morningstar.com/static/av/demo.html"
    );
    await page.getByLabel("email").fill("dnalabtest1@morningstar.com");
    await page.getByLabel("Password", { exact: true }).fill("test123*");
    await page.getByRole("button", { name: "Sign In" }).click();
    await page.waitForTimeout(5000);
    await page.context().storageState({ path: authFile });
});
