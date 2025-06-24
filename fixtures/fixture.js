import { test as base } from 'playwright-bdd';
import { Dashboardpage } from '../pageObject/Dashboardpage.js';

export const test = base.extend({
  dbPage: async ({ page }, use) => {
    const dbPage1 = new Dashboardpage(page);
    await use(dbPage1);
  },
});