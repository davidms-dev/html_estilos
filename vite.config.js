import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base:"/html_estilos/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienes_somos: resolve(__dirname, 'quienes_somos.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'),
        registro: resolve(__dirname, 'registro.html'),
        login: resolve(__dirname, 'login.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        avisolegal: resolve(__dirname, 'avisolegal.html'),
      }
    }
  }
})
