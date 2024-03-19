import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.ionictest',
  appName: 'ionictest',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
