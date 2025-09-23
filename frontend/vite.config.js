import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/CICD-PROJECT/', // Add this line with your repo name
    plugins: [react()],
    server: {
        host: '0.0.0.0', // bind to all interfaces
        port: 5173
    }
})