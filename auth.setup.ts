// auth.setup.ts
import {chromium, test as setup} from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto(
        "https://mysite/login.html" // <<< the login is diffrent page with same domain
    );
    await page.getByLabel("email").fill("mytest@test.com");
    await page.getByLabel("Password", { exact: true }).fill("tester*");
    await page.getByRole("button", { name: "Sign In" }).click();
    await page.waitForTimeout(5000);
    await page.context().storageState({ path: authFile }); //<<save here
});
