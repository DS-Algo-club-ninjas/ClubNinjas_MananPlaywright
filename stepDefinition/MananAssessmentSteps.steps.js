import { expect } from '@playwright/test';
// import { test } from '../hooks/Hooks.js';
import { createBdd } from 'playwright-bdd';
import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// // 👇 these lines define __filename and __dirname manually
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// // const { Given, When, Then } = createBdd();
// import { Given, When, Then, Before, After } from '@cucumber/cucumber';
const { Given, When, Then } = createBdd();
import {MananAssessmentPage} from '../pageObject/MananAssessmentPage.js'
import { readDataFromExcelFile } from '../utilities/ExcelReader.js';



Given('User is in Manan Medical Triage Assistant page', async function({page}) {
  console.log('User is in Manan Assessment page')
});

When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, Medical History, and Current medications and clicks Analyze Case', async function({page}) {
  const mananAssessment = new MananAssessmentPage(page);
  const mananFormData = readDataFromExcelFile('Manan','AllValidFields');
  console.log("Age ",mananFormData.Age);
  await mananAssessment.enterAge(mananFormData.Age);
  await mananAssessment.enterGender(mananFormData.Gender);
  await mananAssessment.enterChiefComplaint(mananFormData.ChiefComplaint);
  await mananAssessment.enterDetailedSymptoms(mananFormData.DetailedSymptoms);
  await mananAssessment.uploadBloodReport();
  await mananAssessment.enterMedicalHistory(mananFormData.MedicalHistory);
  await mananAssessment.enterMedications(mananFormData.Medication);
  await mananAssessment.clickAnalyzeCase();
  // await page.getByRole('button', { name: 'Analyze Case' }).click();
  // await expect(page.getByRole('status')).toContainText('Analysis Complete');
//   await page.getByRole('textbox', { name: 'Patient Age' }).fill('65');
//   await page.getByRole('combobox', { name: 'Gender at Birth' }).click();
//   await page.getByRole('option', { name: 'Male', exact: true }).click();
//   await page.getByRole('textbox', { name: 'Chief Complaint' }).fill('Flu');
//   await page.getByRole('textbox', { name: 'Detailed Symptoms' }).fill('Cough,cold');
//   await page.locator('input[type="file"]').setInputFiles(path.join(__dirname, '../testData/CBC-sample.pdf'));
//   //await this.page.screenshot({ path: 'screenshot.png', fullPage: true });
//   await expect(page.locator('span[role="status"]')).toContainText('Blood report values have been added to vitals');
//  // console.log('uploaded blood report');
//   await page.getByRole('textbox', { name: 'Medical History' }).fill('None');
//   await page.getByRole('textbox', { name: 'Current Medications' }).fill('None');
//   await page.getByRole('button', { name: 'Analyze Case' }).click();
  //await this.page.screenshot({ path: 'screenshot2.png', fullPage: true });
});

Then('User should be able to see Analysis report with Analysis Complete AI has analysed the case message', async function({page}) {
  //await expect(page.locator('span[role="status"]')).toContainText('Analysis Complete');
  await expect(page.getByText('Analysis Complete', { exact: true })).toBeVisible();
  // await expect(page.getByRole('status')).toContainText('Analysis Complete');
  
});

When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms,  maunally enters Vital Signs & Lab Reports, Medical History, and Current medications and clicks Analyze Case', async ({}) => {
  // Step: When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms,  maunally enters Vital Signs & Lab Reports, Medical History, and Current medications and clicks Analyze Case
  // From: feature\MananAssessment.feature:14:5
});

Then('User should be able to see Analysis report', async ({}) => {
  // Step: Then User should be able to see Analysis report
  // From: feature\MananAssessment.feature:15:5
});

When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, and clicks Analyze Case', async ({}) => {
  // Step: When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, and clicks Analyze Case
  // From: feature\MananAssessment.feature:19:5
});

Given('User is in  Manan Medical Triage Assistant page after successful analysis', async ({}) => {
  // Step: Given User is in  Manan Medical Triage Assistant page after successful analysis
  // From: feature\MananAssessment.feature:23:5
});

When('User clicks Share Analysis button', async ({}) => {
  // Step: When User clicks Share Analysis button
  // From: feature\MananAssessment.feature:24:5
});

Then('User should be able to see a Share window with the analysis pdf', async ({}) => {
  // Step: Then User should be able to see a Share window with the analysis pdf
  // From: feature\MananAssessment.feature:25:5
});

When('User clicks Ask for Further Analysis', async ({}) => {
  // Step: When User clicks Ask for Further Analysis
  // From: feature\MananAssessment.feature:29:5
});

Then('User should be able to see details for further analysis', async ({}) => {
  // Step: Then User should be able to see details for further analysis
  // From: feature\MananAssessment.feature:30:5
});

When('User uploads five pdf files', async ({}) => {
  // Step: When User uploads five pdf files
  // From: feature\MananAssessment.feature:34:5
});

Then('User should see Success, Blood report values have been added to vitals', async ({}) => {
  // Step: Then User should see Success, Blood report values have been added to vitals
  // From: feature\MananAssessment.feature:35:5
});

When('User clicks Analyze Case for {string}', async ({}, arg) => {

});

Then('User should see error message for {string}', async ({}, arg) => {
  // Step: Then User should see error message for 'AgeNull'
  // From: feature\MananAssessment.feature:40:5
});