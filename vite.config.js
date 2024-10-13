import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ACMWebPortfolio2/', //set this to your repository name with leading and trailing slashes
});