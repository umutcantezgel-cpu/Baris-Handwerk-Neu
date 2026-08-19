"use client";

import dynamic from 'next/dynamic';

const WhatsAppButton = dynamic(() => import('@/components/common/WhatsAppButton'), { ssr: false });
const ConsentManager = dynamic(() => import('@/components/common/ConsentManager'), { ssr: false });

export function ClientWidgets() {
  return (
    <>
      <WhatsAppButton />
      <ConsentManager />
    </>
  );
}
