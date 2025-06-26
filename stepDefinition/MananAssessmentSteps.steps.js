import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import path from 'path';
const { Given, When, Then } = createBdd();
import {MananAssessmentPage} from '../pageObject/MananAssessmentPage.js'
import { readDataFromExcelFile } from '../utilities/ExcelReader.js';


Given('User is in Manan Medical Triage Assistant page', async function({page}) {
  console.log('User is in Manan Assessment page')
});

When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, Medical History, and Current medications and clicks Analyze Case', async function({page}) {
  const mananAssessment = new MananAssessmentPage(page);
  const mananFormData = readDataFromExcelFile('Manan','AllValidFields');
  await mananAssessment.enterAge(mananFormData.Age);
  await mananAssessment.enterGender(mananFormData.Gender);
  await mananAssessment.enterChiefComplaint(mananFormData.ChiefComplaint);
  await mananAssessment.enterDetailedSymptoms(mananFormData.DetailedSymptoms);
  await mananAssessment.uploadBloodReport();
  await mananAssessment.enterMedicalHistory(mananFormData.MedicalHistory);
  await mananAssessment.enterMedications(mananFormData.Medication);
  await mananAssessment.clickAnalyzeCase();
});

Then('User should be able to see Analysis report with Analysis Complete AI has analysed the case message', async function({page}) {
  await expect(page.getByText('Analysis Complete', { exact: true })).toBeVisible();

});

When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms,  maunally enters Vital Signs & Lab Reports, Medical History, and Current medications and clicks Analyze Case',  async function({page})  {
  const mananAssessment = new MananAssessmentPage(page);
  const mananFormData = readDataFromExcelFile('Manan','AllValidFields');
  await mananAssessment.enterAge(mananFormData.Age);
  await mananAssessment.enterGender(mananFormData.Gender);
  await mananAssessment.enterChiefComplaint(mananFormData.ChiefComplaint);
  await mananAssessment.enterDetailedSymptoms(mananFormData.DetailedSymptoms);
  await mananAssessment.enterLabValues(mananFormData.LabValues);
  await mananAssessment.enterMedicalHistory(mananFormData.MedicalHistory);
  await mananAssessment.enterMedications(mananFormData.Medication);
  await mananAssessment.clickAnalyzeCase();
});

Then('User should be able to see Analysis report', async function({page}) {
  await expect(page.locator('#root')).toContainText('TRIAGE LEVEL');
});

When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, and clicks Analyze Case', async function({page}) {
  const mananAssessment = new MananAssessmentPage(page);
  const mananFormData = readDataFromExcelFile('Manan','AllValidFields');
  await mananAssessment.enterAge(mananFormData.Age);
  await mananAssessment.enterGender(mananFormData.Gender);
  await mananAssessment.enterChiefComplaint(mananFormData.ChiefComplaint);
  await mananAssessment.enterDetailedSymptoms(mananFormData.DetailedSymptoms);
  await mananAssessment.enterLabValues(mananFormData.LabValues);
  await mananAssessment.clickAnalyzeCase();
});

Given('User is in  Manan Medical Triage Assistant page after successful analysis', async function({page})  {
  const mananAssessment = new MananAssessmentPage(page);
  const mananFormData = readDataFromExcelFile('Manan','AllValidFields');
  await mananAssessment.enterAge(mananFormData.Age);
  await mananAssessment.enterGender(mananFormData.Gender);
  await mananAssessment.enterChiefComplaint(mananFormData.ChiefComplaint);
  await mananAssessment.enterDetailedSymptoms(mananFormData.DetailedSymptoms);
  await mananAssessment.enterLabValues(mananFormData.LabValues);
  await mananAssessment.enterMedicalHistory(mananFormData.MedicalHistory);
  await mananAssessment.enterMedications(mananFormData.Medication);
  await mananAssessment.clickAnalyzeCase();
});

When('User clicks Share Analysis button', async function({page}) {
  const mananAssessment = new MananAssessmentPage(page);
  await mananAssessment.clickShareAnalysis();
});

Then('User should be able to see a Share window with the analysis pdf', async function({page}) {
  await expect(page.getByText('PDF Generated')).toBeVisible();
});

When('User clicks Ask for Further Analysis', async function({page}) {  
  const mananAssessment = new MananAssessmentPage(page);
  await mananAssessment.clickAskForFurtherAnalysis();
});

Then('User should be able to see details for further analysis', async function({page}) {
  await expect(page.getByRole('button', { name: 'Submit Additional Information' })).toBeVisible();
});

When('User uploads two pdf files', async function({page}) {
  const mananAssessment = new MananAssessmentPage(page);
  await mananAssessment.uploadMultipleBloodReport();
  
});

Then('User should see three uploads remaining', async function({page}) {
  await expect(page.locator('span[role="status"]')).toContainText('3 uploads remaining');
});

When('User clicks Analyze Case for {string}', async ({page}, arg) => {
  const mananAssessment = new MananAssessmentPage(page);
  const mananFormData = readDataFromExcelFile('Manan',arg);
  
  if (mananFormData.Age !== 'null') {
    await mananAssessment.enterAge(mananFormData.Age)
  }
  if (mananFormData.Gender !== 'null') {
      await mananAssessment.enterGender(mananFormData.Gender);
  }
  if (mananFormData.ChiefComplaint !== 'null') {
      await mananAssessment.enterChiefComplaint(mananFormData.ChiefComplaint);
  }
  if (mananFormData.DetailedSymptoms !== 'null') {
      await mananAssessment.enterDetailedSymptoms(mananFormData.DetailedSymptoms);
  }
  if (mananFormData.LabValues !== 'null') {
      await mananAssessment.enterLabValues(mananFormData.LabValues);
  }
  await mananAssessment.enterMedicalHistory(mananFormData.MedicalHistory);
  await mananAssessment.enterMedications(mananFormData.Medication);
  await mananAssessment.clickAnalyzeCase();
});

Then('User should see error message for {string}', async ({page}, arg) => {
  // Step: Then User should see error message for 'AgeNull'
  const mananFormData = readDataFromExcelFile('Manan',arg);
  if (arg === 'AgeNull') {
      await expect(page.locator('[id=":r6:-form-item-message"]')).toContainText(mananFormData.Error);
  }

  if (arg === 'GenderNull') {
      await expect(page.locator('[id=":r7:-form-item-message"]')).toContainText(mananFormData.Error);
  }

  if (arg === 'ChiefComplaintNull') {
      await expect(page.locator('[id=":r9:-form-item-message"]')).toContainText(mananFormData.Error);
  }

  if (arg === 'SymptomsNull') {
      await expect(page.locator('[id=":ra:-form-item-message"]')).toContainText(mananFormData.Error);
  }

  if (arg === 'LabValuesNull') {
      await expect(page.locator('[id=":rb:-form-item-message"]')).toContainText(mananFormData.Error);
  }
});