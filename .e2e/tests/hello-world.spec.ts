import { getURLForDeployment } from "@/utils"
import { test, expect } from "@playwright/test"

test.use({ baseURL: getURLForDeployment('hello-world') })
test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test('"Hello Nuxt 3!" is visible', async ({ page }) => {
  await expect(page.getByText("Hello Nuxt 3!")).toBeVisible()
})
