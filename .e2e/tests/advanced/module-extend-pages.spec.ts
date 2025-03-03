import { test, expect } from "@playwright/test"

test.use({ baseURL: "https://module-extend-pages.example.nuxt.space/" })
test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("Page that has been added by a module works", async ({ page }) => {
  await page.getByRole("link", { name: "Test Page" }).click()
  await expect(page.getByText("Test page added by module")).toBeVisible()

  await page.getByRole("link", { name: "Homepage" }).click()
  await expect(page.getByText("Go to Test Page")).toBeVisible()
})
