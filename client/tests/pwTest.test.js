import { test, expect } from "@playwright/test"

test("check if anchor element navigates to new page", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://www.leovegas.it/it-it/gioco-re sponsabile")

  const acceptCookiesButton = page.locator(
    'button[data-test-id="button-accept-cookies"]'
  )

  // Ensure the button is visible before clicking
  await expect(acceptCookiesButton).toBeVisible()

  // // Click the button
  await acceptCookiesButton.click()

  const contactLink = page.locator(
    'a:has-text("contattare il nostro personale qualificato")'
  )

  // Check if the link is visible before clicking
  await expect(contactLink).toBeVisible()

  // Click on the link and wait for navigation
  await contactLink.click()

  // Verify that the URL has changed to the expected one
  await expect(page).toHaveURL("https://www.leovegas.it/it-it/assistenza")
})

test("check if LeoSafePlay.com/it/ anchor element opens new tab", async ({
  page,
}) => {
  // Navigate to the target page
  await page.goto("https://www.leovegas.it/it-it/gioco-responsabile")

  const acceptCookiesButton = page.locator(
    'button[data-test-id="button-accept-cookies"]'
  )

  // Ensure the button is visible before clicking
  await expect(acceptCookiesButton).toBeVisible()

  // Click the button
  await acceptCookiesButton.click()

  // Locate the link with the specified text
  const link = page.locator('a:has-text("LeoSafePlay.com/it/")').first()

  // Check if the link is visible before clicking
  await expect(link).toBeVisible()

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    link.click(),
  ])

  // Verify that the URL has changed to the expected one
  await expect(newPage).toHaveURL("https://www.leosafeplay.com/it/")
})

test("check if Autovalutazione anchor element opens new tab", async ({
  page,
}) => {
  // Navigate to the target page
  await page.goto("https://www.leovegas.it/it-it/gioco-responsabile")

  ///POPUP ACCEPT
  const acceptCookiesButton = page.locator(
    'button[data-test-id="button-accept-cookies"]'
  )

  // Ensure the button is visible before clicking
  await expect(acceptCookiesButton).toBeVisible()

  // Click the button
  await acceptCookiesButton.click()

  // Locate the link with the specified text
  const link = page.locator('a:has-text("Autovalutazione")').first()

  // Check if the link is visible before clicking
  await expect(link).toBeVisible()

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    link.click(),
  ])

  // Verify that the URL has changed to the expected one
  await expect(newPage).toHaveURL(
    "https://www.leosafeplay.com/it/self-assessment/"
  )
})
