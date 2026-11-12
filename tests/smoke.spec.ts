import { test, expect } from "@playwright/test";

test("홈 화면이 열린다", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("UI Lab");
});
