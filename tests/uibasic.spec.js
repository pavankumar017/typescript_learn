import { test, expect } from '@playwright/test';
import { parseEnv } from 'node:util';
import { compileFunction } from 'node:vm';


// this test.only if its there - it will run only this test case
test.only('first test', async({browser, page})=>{
    // const browser_context = await browser.newContext()
    // const page = await browser_context.newPage()

    const usernme=  page.locator("input#username")
    const pwd =  page.locator("input#password")
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
     await usernme.fill("Pavan123")
     await pwd.fill("testpwd")
     await page.locator('[type ="submit"]').click()

    
     console.log(await page.locator('[style*= "block"]').textContent())

    await expect(page.locator('[style*= "block"]')).toContainText("Incorrect")


    
    //to select dropdowns
   const dropdown = await page.locator("select[class*='form-control']")
   dropdown.selectOption("consult")
   


   //to check radion button and add assertion 
    await page.locator("[value='user']").click()
    await expect(page.locator("[value='user']")).toBeChecked
    await page.pause()
    // // ENTER valid creds
    // await usernme.fill("rahulshettyacademy")
    //  await pwd.fill("Learning@830$3mK2")
    //  await page.locator('[type ="submit"]').click()

    //  console.log(await page.locator('.card-title a').nth(0).textContent())

    //  console.log(await page.locator('.card-title a').nth(1).textContent())

    //  //now i need to get all the headings using the wait i add
    //  await page.waitForLoadState("networkidle")
    //  const all_text = await page.locator(".card-body a").allTextContents()
    //  console.log(all_text)


})



test('Test to move to next page ', async({browser})=> {

    const browser_context2 = await browser.newContext()
    const page2 = await browser_context2.newPage()
    await page2.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
    // Method 1: Using Promise.all() to wait for new page w hen clicking a link
    const [newPage] = await Promise.all([
        browser_context2.waitForEvent('page'),
        page2.click('.blinkingText') // Replace selector with your link's selector
    ])
    
    // Work with the new page
    await newPage.waitForLoadState()
    console.log(await newPage.title())

})