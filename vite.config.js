import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-react-app2/', // 這裡要填你 GitHub repo 的名稱，注意開頭和結尾的斜線
  plugins: [react()],
})
