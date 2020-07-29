package com.ReactNativeScreenShield

import android.view.WindowManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.UiThreadUtil.runOnUiThread
import java.lang.Exception

class ScreenshieldModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "Screenshield"
    }

    @ReactMethod
    fun enableSecureFlag(promise: Promise) {
        runOnUiThread(Runnable {
          try {
            currentActivity!!.getWindow()!!.setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
            promise.resolve(true)
          } catch (exception: Exception) {
            promise.reject(exception);
          }
        });
    }

    @ReactMethod
    fun disableSecureFlag(promise: Promise) {
        runOnUiThread(Runnable {
          try {
            currentActivity!!.getWindow()!!.clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
            promise.resolve(true);
          } catch (exception: Exception) {
            promise.reject(exception);
          }
        });
    }
}
