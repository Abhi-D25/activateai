'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

export default function ClickTracker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const leadId = searchParams.get('leadId');
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');

    // Only track if we have a leadId (required) and at least one UTM param
    if (!leadId || (!utmSource && !utmMedium)) {
      return;
    }

    // Avoid duplicate tracking for the same page load
    const trackingKey = `tracked_${leadId}_${pathname}`;
    if (sessionStorage.getItem(trackingKey)) {
      return;
    }

    const trackClick = async () => {
      try {
        await fetch('/api/track-click', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            leadId,
            timestamp: new Date().toISOString(),
            page: pathname,
            utmSource,
            utmMedium,
          }),
        });

        // Mark as tracked to prevent duplicates
        sessionStorage.setItem(trackingKey, 'true');
      } catch (error) {
        console.error('Failed to track click:', error);
      }
    };

    trackClick();
  }, [searchParams, pathname]);

  return null;
}
