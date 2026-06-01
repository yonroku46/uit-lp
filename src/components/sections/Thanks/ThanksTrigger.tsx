'use client';

import { useEffect } from 'react';
import { trackGoogleAdsConversion } from '@/lib/tracking';

export default function ThanksTrigger() {
  useEffect(() => {
    const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
    if (label) {
      trackGoogleAdsConversion(label);
    }
  }, []);

  return null;
}
