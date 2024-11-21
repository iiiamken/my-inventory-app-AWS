import { expect } from "@playwright/test"

export default class TestPage {
  constructor(page) {
    this.page = page
    this.link = page.locator("a").first()
  }

  async navigateToPage() {
    await this.page.goto("https://www.leovegas.it/it-it/gioco-responsabile")
  }

  async clickLink() {
    await this.link.click()
  }

  async verifyLinkSuccess() {
    await expect(this.page).toHaveURL(
      "https://www.leovegas.it/it-it/probabilita-di-vincita"
    )
  }
}
