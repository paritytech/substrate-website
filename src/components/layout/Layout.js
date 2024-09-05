import { Layout as SubstrateLayout } from 'gatsby-plugin-substrate';
import React from 'react';

import { SDKAnnouncementBanner } from './MobileAnnouncementBanner';

export default function Layout(props) {
  return <SubstrateLayout announcementBanner={<SDKAnnouncementBanner />} {...props} />;
}
