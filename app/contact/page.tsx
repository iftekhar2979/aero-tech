// import Banner from '@/components/contact/Banner'
import type { Metadata } from "next";
import ContactBanner from '@/components/contact/ContactBanner'
import ContactInfo from '@/components/contact/ContactInfo'
import StaticMap from '@/components/contact/LocationMap'
import { ContactUs } from '@/components/ContactUs/ContactUs'
import React from 'react'
export const metadata: Metadata = {
  title: "Contact Aerotech Aircraft Maintenance Ltd.",
  description: "Contact Aerotech Aircraft Maintenance Ltd.",
};
export default function page() {
  return (
    <div>
      {/* <Banner/> */}
      <ContactBanner/>
      <StaticMap/>
      <ContactUs/>
      <ContactInfo/>
    </div>
  )
}
