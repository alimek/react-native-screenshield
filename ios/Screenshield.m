#import "Screenshield.h"

@import ScreenShieldKit;

@implementation Screenshield

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(init:(NSString *)key)
{
 [ScreenShieldKit setLicenseKey:key];
}

@end
