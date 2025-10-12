## Add firebase SDK for Frontend Framework

### Use script:

```html
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBWVOZ4SVFmeRBpl8r_gh9vhzwt_rXNQoI",
    authDomain: "todolist-1a234.firebaseapp.com",
    databaseURL: "https://todolist-1a234-default-rtdb.firebaseio.com",
    projectId: "todolist-1a234",
    storageBucket: "todolist-1a234.appspot.com",
    messagingSenderId: "305602964725",
    appId: "1:305602964725:web:a9978c5e897e3a3ea0e9bc",
    measurementId: "G-6EYGTC06RP",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```

### Use npm

```bash
npm install firebase
```

```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWVOZ4SVFmeRBpl8r_gh9vhzwt_rXNQoI",
  authDomain: "todolist-1a234.firebaseapp.com",
  databaseURL: "https://todolist-1a234-default-rtdb.firebaseio.com",
  projectId: "todolist-1a234",
  storageBucket: "todolist-1a234.appspot.com",
  messagingSenderId: "305602964725",
  appId: "1:305602964725:web:a9978c5e897e3a3ea0e9bc",
  measurementId: "G-6EYGTC06RP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

## Install Firebase CLI for Backend Framework

### NodeJS

```bash
npm install -g firebase-tools
```
