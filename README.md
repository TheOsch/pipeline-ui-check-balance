# Pipeline UI login demo with restricted balance

This demo shows:
- How to log in via MyAlgo wallet
- How to check user's balance both on login and on the pages

## Deploying the application

Clone the repository, enter the directory and run `npm install`. This is enough.

## Testing the application

- Run `npm start` in the application's root directory. After a few seconds the application will appear
  in a browser.
- Open the`config.json` file in the `src` subdirectory. It looks like this:
```
{
    "minBalance": 50
}
```
Change 50 to the value that exceeds your own Algorand balance and save the file.
- Go to the page in a browser and make sure the value you entered is on the screen.
- Click 'Login' button and log in. See that you're redirected to the page with a failure message.
- Try to change '/failure' to '/restricted' in the browser's address bar. Make sure you're 
  redirected to the home page.
- Change the value in `config.json` again, but now to the value smaller than your balance 
  (if your balance is zero, write -1 there)
- Go to the browser, see the new value on the home page and click 'Login'. See the restricted page.

## What's there inside

This is a standard React application with routes. It consists of 3 pages and two additional components.

That's where it can appear to be interesting to look at:
- [App.js](https://github.com/TheOsch/pipeline-ui-check-balance/blob/main/src/App.js)
  Root component. Almost nothing related to Pipeline-UI, just a simple React routing sample.
- Pages
  - [Home](https://github.com/TheOsch/pipeline-ui-check-balance/blob/main/src/pages/Home/index.js)
    Absolutely nothing interesting. Almost a plain text.
  - [Restricted](https://github.com/TheOsch/pipeline-ui-check-balance/blob/main/src/pages/Restricted/index.js)
and [Failure](https://github.com/TheOsch/pipeline-ui-check-balance/blob/main/src/pages/Failure/index.js) 
can be interesting. They show how to obtain and display user's balance.
- Components
  - [Title](https://github.com/TheOsch/pipeline-ui-check-balance/blob/main/src/components/Title/index.js)
    Just an icon and a label. Nothing interesting.
  - [Login](https://github.com/TheOsch/pipeline-ui-check-balance/blob/main/src/components/Login/index.js)
    A Login button. It does all the Pipeline-related job: logs in, checks balance and transfers results to
    the root component to handle. If you look there you'll find that there are more comments than code.

## Happy coding!
