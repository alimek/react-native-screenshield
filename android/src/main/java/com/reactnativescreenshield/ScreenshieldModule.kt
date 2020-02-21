package com.reactnativescreenshield

import android.view.WindowManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.UiThreadUtil.runOnUiThread
import java.lang.Object

class ScreenshieldModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "Screenshield"
    }

    @ReactMethod
    fun enableSecureFlag() {
        runOnUiThread(Runnable {
            currentActivity!!.getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
        });
    }

    @ReactMethod
    fun disableSecureFlag() {
        runOnUiThread(Runnable {
            currentActivity!!.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
        });
    }
}
