# Google_AS-Sheets-Finance-IncomeTaxDed
Google Sheets automation for calculating payroll and income tax deductions

## Google Apps Script Configuration

### Triggers

| Function | Event Source ( - t)^ | Time Based Trigger ( - nn)* | Time of Day / Hour | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| checkTaxOwedChangeSnapShot | Time-drive | Month - 3rd | 10pm to 11pm | Weekly |
| sendEmailTaxOwedChangeCheck | Time-drive | Month - 1st | 6pm to 7pm | Weekly |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected* \
*\^Event type if `From spreadsheet` is selected*


<sup><sub>Spreadsheet Name: `Payroll and Income Tax Deductions - Tax Rates`</sup></sub>
