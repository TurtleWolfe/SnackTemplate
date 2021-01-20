# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by clicking the **Run** button or use the simulator by clicking **Tap to Play**. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Export** your project and use it with [expo-cli](https://docs.expo.io/versions/latest/introduction/installation.html).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the **Embed** button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.io).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack-web).

```json
{  "dependencies": {
    "jquery": "3.0.0",
    "bootstrap": "^4.5.3",
    "popper.js": "1.16.1",
    "expo-constants": "~9.3.1",
    "react-bootstrap": "^1.4.0",
    "react-native-paper": "3.6.0",
    "react-router-native": "5.2.0",
    "react-native-screens": "~2.15.0",
    "@react-navigation/stack": "^5.9.0",
    "react-native-reanimated": "~1.13.0",
    "@react-navigation/native": "^5.9.0",
    "react-native-gesture-handler": "~1.8.0",
    "react-native-safe-area-context": "3.1.9",
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/bottom-tabs": "^5.9.0",
    "react-native-vector-icons/Ionicons": "*",
    "react-native-vector-icons": "7.1.0"          }}
```

```jsx
      <Tab.Navigator 
      initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
            activeColor="#f0edf6",
  inactiveColor="#3e2465",
  barStyle={ backgroundColor: '#694fad' }
      >
      ```