The issue was resolved by completely deleting the `node_modules` folder and the `package-lock.json` file (or `yarn.lock`), and then reinstalling the project dependencies. This forced Expo to re-download and configure the dependencies, resolving the missing module error.

```javascript
//In the terminal:
npm install
rm -rf node_modules
rm package-lock.json
npm install
```

After this, `expo start` and `expo prebuild` worked as expected. The root cause appears to be a corrupted dependency cache.