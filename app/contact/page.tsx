// import Banner from '@/components/contact/Banner'
import ContactBanner from '@/components/contact/ContactBanner'
import ContactInfo from '@/components/contact/ContactInfo'
import StaticMap from '@/components/contact/LocationMap'
import { ContactUs } from '@/components/ContactUs/ContactUs'
import React from 'react'

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
