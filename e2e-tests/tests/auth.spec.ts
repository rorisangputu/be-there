import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/";

test('should allow user to sign in', async ({ page }) => {
    await page.goto(UI_URL);

    //get the sign in button
    await page.getByRole("link", { name: "Log In" }).click();

    await expect(page.getByRole("heading", { name: "Log In" })).toBeVisible();

    await page.locator("[name = email]").fill("rorisang@gmail.com");
    await page.locator("[name=password]").fill("rorisang@gmail.com");

    await page.getByRole("button", { name: "Log In" }).click();

    await expect(page.getByText("Log In Successful")).toBeVisible();
    
    //await expect(page.getByRole("link", { name: "Profile" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
})

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${Math.floor(Math.random()*90000) + 10000}@test.com`
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Log In" }).click();

  await page.getByRole("link", { name: "Create Account" }).click();
  
  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();

  await page.locator("[name=firstName]").fill("firstName_Test");
  await page.locator("[name=lastName]").fill("lastName_Test");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("password123");
  await page.locator("[name=confirmPassword]").fill("password123");

  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("Registration success!")).toBeVisible();

  await expect(page.getByRole("link", { name: "Profile" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();

  
})