import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();
const vPort = parseInt(process.env.VITE_PORT);

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/qts_1_1_0/',
    build: {
        outDir: 'build',
    },
    server: {
        port: vPort,
        open: true,
    }
});