import {test} from '@playwright/test'


test('Learning CSS Selectors',async({page})=>{
await page.goto("https://login.salesforce.com/?locale.in");
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('input[id="password"]').fill('TestLeaf@2025');
await page.locator('#Login').click();

})