import { test, expect } from "@playwright/test";

test("Visiting url should contain text", async ({ page }) => {
	await page.goto("http://localhost:3000");

	// Expect a title "to contain" a substring.
	const locator = page.locator("h1");
	await expect(locator).toContainText(/The list/);
});
