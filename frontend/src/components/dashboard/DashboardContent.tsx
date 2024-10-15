import React from 'react';
import Electricity from "./Electricity"
import ElectricityTrack from './ElectricityTrack';
import Temperature from './Temperature';
import Moisture from './Moisture';

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export const iframeHeight = "825px"

export const containerClassName = "w-full h-full"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function DashboardContent() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Electricity />
        <ElectricityTrack />
        <Temperature />
        <Moisture />
    </main>
  )
}
