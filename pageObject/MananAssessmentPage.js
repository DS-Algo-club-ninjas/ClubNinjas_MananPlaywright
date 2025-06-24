import path from 'path';
import { expect } from '@playwright/test';

export class MananAssessmentPage {
    constructor(page) {
        this.page = page;
        this.ageTextbox = page.getByRole('textbox', { name: 'Patient Age' });
        this.genderDropdown = page.getByRole('combobox', { name: 'Gender at Birth' });
        this.genderOptionMale = page.getByRole('option', { name: 'Male', exact: true });
        this.genderOptionFemale = page.getByRole('option', { name: 'Female', exact: true });
        this.chiefComplaintTextbox = page.getByRole('textbox', { name: 'Chief Complaint' });
        this.detailedSymptomsTextbox = page.getByRole('textbox', { name: 'Detailed Symptoms' });
        this.fileUploadInput = page.locator('input[type="file"]');
        this.uploadSuccessMessage = page.locator('span[role="status"]');
        this.medicalHistoryTextbox = page.getByRole('textbox', { name: 'Medical History' });
        this.medicationsTextbox = page.getByRole('textbox', { name: 'Current Medications' });
        this.analyzeButton = page.getByRole('button', { name: 'Analyze Case' });

    }

    async enterAge(age) {
        await this.ageTextbox.fill(String(age));
    }

    async enterGender(gender) {
        await this.genderDropdown.click();
        if (gender.toLowerCase() === 'male') {
            await this.genderOptionMale.click();
        } else {
            await this.genderOptionFemale.click();
        }
    }

    async enterChiefComplaint(complaint) {
        await this.chiefComplaintTextbox.fill(complaint);
    }

    async enterDetailedSymptoms(symptoms) {
        await this.detailedSymptomsTextbox.fill(symptoms);
    }

    async uploadBloodReport() {
        await this.fileUploadInput.setInputFiles(path.join(__dirname, '../testData/CBC-sample.pdf'));
        await expect(this.uploadSuccessMessage).toContainText('Blood report values have been added to vitals');
    }

    async enterMedicalHistory(history) {
        await this.medicalHistoryTextbox.fill(history);
    }

    async enterMedications(medication) {
        await this.medicationsTextbox.fill(medication);
    }

    async clickAnalyzeCase() {
        await this.analyzeButton.click();
    }

}