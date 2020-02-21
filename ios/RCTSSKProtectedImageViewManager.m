//
//  Copyright © 2019 Confide. All rights reserved.
//
//  THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
//  AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE SCREENSHIELDKIT LICENSE AGREEMENT.
//  UNAUTHORIZED REPROUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
//  This notice may not be removed from this file.
//

#import "RCTSSKProtectedImageViewManager.h"

@import ScreenShieldKit;

@implementation RCTSSKProtectedImageViewManager

RCT_EXPORT_MODULE()

RCT_CUSTOM_VIEW_PROPERTY(image, UIImage, SSKProtectedImageView) {
  if (json) {
    [view setImage:[RCTConvert UIImage:json]];
  } else {
    [view setImage:nil];
  }
}

- (UIView *)view {
  return [[SSKProtectedImageView alloc] initWithImage:nil];
}

@end
