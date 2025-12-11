import {expect, test} from "@playwright/test";
import {faker} from "@faker-js/faker/locale/ar";

const appUrl: string =
    process.env.APP_URL ||
    "https://fe-delivery.tallinn-learning.ee/signin";

let randomUsername: string;
let randomPassword: string;

test.beforeEach(async ({ page }) => {
    randomUsername = faker.internet.username();
    randomPassword = faker.internet.password();

    await page.goto(appUrl);
    await page.waitForLoadState("networkidle");
});

test('Login button is disabled if one field is empty', async ({ page }) => {
    const loginField = page.getByTestId("username-input");
    const signInButton = page.getByTestId("signIn-button");

    await expect(signInButton).toBeEnabled();
    await loginField.fill(randomUsername);
    await expect(signInButton).toBeDisabled();
});

test('Auth error modal is visible if credentials are wrong', async ({ page }) => {
    const loginField = page.getByTestId("username-input");
    const passwordField = page.getByTestId("password-input");
    const signInButton = page.getByTestId("signIn-button");
    const authErrorPopup = page.getByTestId("authorizationError-popup");

    await loginField.fill(randomUsername);
    await passwordField.fill(randomPassword);
    await signInButton.click();

    await expect(authErrorPopup).toBeVisible();
});