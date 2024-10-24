# Deploying a Nuxt 3 App on Ubuntu Server

This guide covers the steps to deploy a Nuxt 3 app on an Ubuntu server, using Nginx as a reverse proxy and PM2 as a process manager.

## Step 1: Install Required Software

1. **Update packages and install dependencies:**
   ```bash
   sudo apt update
   sudo apt install curl nginx
   ```

2. **Install Node.js (v18.x):**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

3. **Verify installation:**
   ```bash
   node -v
   npm -v
   ```

## Step 2: Set Up Nuxt 3 App

1. **Clone your Nuxt app:**
   ```bash
   git clone https://github.com/your-repo/your-nuxt-app.git
   cd your-nuxt-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the app for production:**
   ```bash
   npm run build
   ```

## Step 3: Configure Nuxt 3 for Production

1. **Update the `nuxt.config.ts` to use server-side rendering (SSR):**
   ```typescript
   export default defineNuxtConfig({
     ssr: true,
     target: 'server',
   })
   ```

2. **Run the app in production mode:**
   ```bash
   npm run start
   ```

## Step 4: Set Up PM2 as a Process Manager

1. **Install PM2 globally:**
   ```bash
   sudo npm install pm2 -g
   ```

2. **Start the Nuxt app with PM2:**
   ```bash
   pm2 start npm --name "nuxt-app" -- run start
   ```

3. **Save the PM2 process list and enable auto-start on reboot:**
   ```bash
   pm2 save
   pm2 startup
   ```

## Step 5: Configure Nginx as a Reverse Proxy

1. **Create an Nginx configuration for your app:**
   ```bash
   sudo nano /etc/nginx/sites-available/nuxt-app
   ```

2. **Add the following configuration:**
   ```nginx
   server {
       listen 80;
       server_name your_domain;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable the configuration:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/nuxt-app /etc/nginx/sites-enabled/
   ```

4. **Test the Nginx configuration:**
   ```bash
   sudo nginx -t
   ```

5. **Reload Nginx to apply changes:**
   ```bash
   sudo systemctl reload nginx
   ```

## Step 6: Set Up SSL with Let's Encrypt (Optional)

1. **Install Certbot:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain and configure an SSL certificate:**
   ```bash
   sudo certbot --nginx -d your_domain
   ```

3. **Certbot will automatically update your Nginx configuration to handle SSL.**

## Step 7: Access Your App

Visit your domain or IP address to access the app.

## Step 8: Manage and Monitor the App with PM2

- **Check the app status:**
   ```bash
   pm2 status
   ```

- **View logs:**
   ```bash
   pm2 logs
   ```
