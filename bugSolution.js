The issue was resolved by carefully examining the `metro.config.js` configuration file. A missing resolver was causing the problem. The corrected `metro.config.js` file includes the necessary resolver configuration.  Additionally, ensuring all project dependencies are up-to-date and compatible with the Expo SDK version is important to prevent such issues. 

```javascript
// Correct metro.config.js
module.exports = {
  resolver: {
    extraNodeModules: new Map([ 
      ['react-native', require.resolve('react-native-web')]
    ]),
  },
};
```