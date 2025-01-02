warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/.env b/.env[m
[1mindex 14973f0..f79a6cf 100644[m
[1m--- a/.env[m
[1m+++ b/.env[m
[36m@@ -1 +1 @@[m
[31m-VITE_PORT=2005[m
\ No newline at end of file[m
[32m+[m[32mPORT=3002[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex cb1062c..906680f 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -19,6 +19,7 @@[m
         "@types/react-dom": "^18.3.0",[m
         "@vitejs/plugin-react": "^4.3.1",[m
         "autoprefixer": "^10.4.18",[m
[32m+[m[32m        "dotenv": "^16.4.7",[m
         "eslint": "^9.9.1",[m
         "eslint-plugin-react-hooks": "^5.1.0-rc.0",[m
         "eslint-plugin-react-refresh": "^0.4.11",[m
[36m@@ -1934,6 +1935,19 @@[m
       "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",[m
       "dev": true[m
     },[m
[32m+[m[32m    "node_modules/dotenv": {[m
[32m+[m[32m      "version": "16.4.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "BSD-2-Clause",[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=12"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://dotenvx.com"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/eastasianwidth": {[m
       "version": "0.2.0",[m
       "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 1bbd7ee..500c3d5 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -21,6 +21,7 @@[m
     "@types/react-dom": "^18.3.0",[m
     "@vitejs/plugin-react": "^4.3.1",[m
     "autoprefixer": "^10.4.18",[m
[32m+[m[32m    "dotenv": "^16.4.7",[m
     "eslint": "^9.9.1",[m
     "eslint-plugin-react-hooks": "^5.1.0-rc.0",[m
     "eslint-plugin-react-refresh": "^0.4.11",[m
[1mdiff --git a/vite.config.ts b/vite.config.ts[m
[1mindex 0681a68..f341705 100644[m
[1m--- a/vite.config.ts[m
[1m+++ b/vite.config.ts[m
[36m@@ -1,13 +1,14 @@[m
 import { defineConfig } from 'vite';[m
 import react from '@vitejs/plugin-react';[m
[32m+[m[32mimport dotenv from 'dotenv';[m
[32m+[m
[32m+[m[32m// Load environment variables from .env file[m
[32m+[m[32mdotenv.config();[m
 [m
[31m-// https://vitejs.dev/config/[m
 export default defineConfig({[m
   plugins: [react()],[m
[31m-  optimizeDeps: {[m
[31m-    exclude: ['lucide-react'],[m
[31m-  },[m
   server: {[m
[31m-    port: parseInt(process.env.PORT) || 2005, // Use the PORT environment variable or default to 5173[m
[32m+[m[32m    port: parseInt(process.env.PORT || '3000', 10),[m
[32m+[m[32m    host: true, // Required for Docker/Render deployment[m
   },[m
 });[m
