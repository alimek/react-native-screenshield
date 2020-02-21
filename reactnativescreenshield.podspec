require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "reactnativescreenshield"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com/alimek/react-native-screenshield", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m}"
  s.ios.vendored_frameworks = "ScreenShieldKit.framework"

  s.dependency "React"
end
