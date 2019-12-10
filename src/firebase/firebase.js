const config_prod = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    databaseURL: process.env.FB_DATABASEURL,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSAGINGSENDERID,
    appId: process.env.FB_APPID,
    measurementId: process.env.FB_MEASUREMENTID
};

const config_dev = {
  apiKey: process.env.DEV_FB_APIKEY,
  authDomain: process.env.DEV_FB_AUTHDOMAIN,
  databaseURL: process.env.DEV_FB_DATABASEURL,
  projectId: process.env.DEV_FB_PROJECTID,
  storageBucket: process.env.DEV_FB_STORAGEBUCKET,
  messagingSenderId: DEV_process.env.FB_MESSAGINGSENDERID,
  appId: process.env.DEV_FB_APPID,
  measurementId: process.env.DEV_FB_MEASUREMENTID
};

const config = process.env.NODE_ENV === 'production' ? config_prod : config_dev;

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;