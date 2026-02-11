import { test, expect } from '@playwright/test';

test('practice test', async ({ page }) => {
    test.slow();
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').click();
    await page.getByTestId('text-input').fill('add');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('one');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('two');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('threee');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByTestId('footer-navigation').click();
    await page.getByRole('link', { name: 'Active' }).click();
   // await page.getByRole('listitem').filter({ hasText: 'one' }).getByTestId('todo-item-toggle').check();
    await expect(page.getByText('two')).toBeVisible();
    await page.getByText('add').click();
    await expect(page.getByTestId('todo-list')).toContainText('add');
    await page.getByText('two').click();
    await page.getByText('two').click();
    await expect(page.getByTestId('todo-list')).toContainText('two');
   // await page.getByRole('button', { name: 'Clear completed' }).click();
});