import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.2ccedbb3e35044ee8b40e3eb65a9070f',
  appName: 'sage-stories-connect',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://2ccedbb3-e350-44ee-8b40-e3eb65a9070f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;