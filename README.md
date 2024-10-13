# UF ACM Web Portfolio Workshop
```10/14/2024```
### Created by Alexander Fisher
### 
---

### About
- This is the continuation of ACM's Web Portfolio Workshop 1, where we built a portfolio in plain HTML CSS & JS
- In this workshop, we are expanding our portfolio by using React & TailwindCSS!

### CUSTOMIZE THIS YOURSELF
- You may want to either clone or fork this repository and make it your own. Then you can proceed with deploying it as your digital portfolio
- Make sure to customize this portfolio. Go through it and fill in your own information. This is a template!
---
### Instructions for hosting using ```Github Pages```
1. Change or Add ```vite.config.js``` to contain the following: 

    ```javascript
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
        plugins: [react()],
        base: '/myrepository/', // Set this to your repository name with leading and trailing slashes (this is ACMWebPortfolio2 in my case)
    });
    ```

2. Install ```gh-pages``` Package:
    - run ```npm install --save-dev gh-pages```

3. Add ```"homepage"``` to ```package.json```:
 
    ```javascript
    "homepage": "https://your-username.github.io/your-repo-name",
    ```

    ### Additionally, add the following under the ```scripts``` section in ```package.json```:

    ```javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    ```

4. Finally, deploy to github pages

    ### Run : 
    ```npm run deploy```
