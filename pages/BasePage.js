const { expect } = require("@playwright/test");
const envs = require("../test-data/env.json");
const users = require("../test-data/test-data.json");

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  randomCompanyName() {
  const prefixes = ["Global", "Prime", "Apex", "Nova", "Delta", "Synergy", "Vertex", "Titan", "Nexus", "Stellar"];
  const words = ["Tech", "Solutions", "Systems", "Dynamics", "Innovations", "Ventures", "Group", "Labs", "Works", "Hub"];
  const suffixes = ["Inc", "LLC", "Corp", "Ltd", "Co"];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const word = words[Math.floor(Math.random() * words.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix} ${word} ${suffix}`;
}


async waitForLoader() {
  const loader = this.page.locator('div.planhub-loader-inner');
  await loader.waitFor({ state: "visible" });
}


}

module.exports = { BasePage };
