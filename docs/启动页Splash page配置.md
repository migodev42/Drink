### Android

- https://github.com/crazycodeboy/react-native-splash-screen
- https://github.com/crazycodeboy/react-native-splash-screen/issues/241（spalash和layout页跳动问题）


file: `android/app/src/main/java/com.drink/MainActivity.java`
``` java
package com.drink;

import com.facebook.react.ReactActivity;
+ import org.devio.rn.splashscreen.SplashScreen;
+ import android.os.Bundle;

public class MainActivity extends ReactActivity {
  + @Override
  + protected void onCreate(Bundle savedInstanceState) {
  +  SplashScreen.show(this,R.style.SplashTheme);  // here SplashTheme is defined in values/style.xml
  +  super.onCreate(savedInstanceState);
  + }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "drink";
  }
}
```

add file: `android/app/src/main/java/com.drink/SplashActivity.java`

``` java
package com.drink;  // your packge name

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}

```
add file: `android/app/src/main/res/drawable/background_splash.xml`

``` xml
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:drawable="@color/splashscreen_bg"/>
        
    <item  
        android:height="150dp"
        android:width="150dp"
        android:drawable="@mipmap/ic_launcher_foreground"        
        android:gravity="center" />
</layer-list>
```

add file: `android/app/src/main/res/layout/launch_screen.xml`
``` xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/background_splash"
    android:orientation="vertical">
</LinearLayout>
```
add file: `android/app/src/main/res/values/colors.xml`
``` xml
<resources>
    <color name="splashscreen_bg">#ff4d4f</color>
</resources>
```

edit file: `android/app/src/main/res/values/styles.xml`
``` xml
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <!-- <item name="android:textColor">#000000</item> -->
    +    <item name="android:statusBarColor">@color/splashscreen_bg</item>
        <!-- <item name="android:windowDisablePreview">true</item> -->
        <!-- <item name="android:windowLightStatusBar">false</item> -->
        <!-- Add the following line to set the default background color for all the app. -->
    +    <item name="android:windowBackground">@color/splashscreen_bg</item>
    </style>

    + <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
    +  <item name="android:windowFullscreen">true</item>
    +  <item name="android:statusBarColor">@color/splashscreen_bg</item>
    +  <item name="android:background">@drawable/background_splash</item>
    + </style>

</resources>
```
edit file: `android/app/src/main/res/AndroidManifest.xml.xml`
``` xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.drink">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">

      + <activity
      +    android:name=".SplashActivity"
      +    android:theme="@style/SplashTheme"
      +    android:label="@string/app_name">
      +    <intent-filter>
      +        <action android:name="android.intent.action.MAIN" />
      +        <category android:name="android.intent.category.LAUNCHER" />
      +    </intent-filter>
      +  </activity>

      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true">
      -  <intent-filter>
      -      <action android:name="android.intent.action.MAIN" />
      -      <category android:name="android.intent.category.LAUNCHER" />
      -  </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>

</manifest>
```

edit: `App.js`

``` jsx
import SplashScreen from 'react-native-splash-screen';


export default App () =>{
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Text>App</Text>
}
```

### IOS
// TODO