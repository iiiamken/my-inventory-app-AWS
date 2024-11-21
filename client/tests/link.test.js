import { test, expect } from "@playwright/test"
import TestPage from "./TestPage"

test("check if anchor element navigates to new page", async ({ page }) => {
  const testPage = new TestPage(page)
  await testPage.navigateToPage()
  const acceptCookiesButton = page.locator(
    'button[data-test-id="button-accept-cookies"]'
  )

  // Ensure the button is visible before clicking
  await expect(acceptCookiesButton).toBeVisible()

  // // Click the button
  await acceptCookiesButton.click()
  await testPage.clickLink()
  await testPage.verifyLinkSuccess()
})
