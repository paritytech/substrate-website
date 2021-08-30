import React from 'react';

import communityResources from '../../../media/ecosystem/community-resources/community-resources.png';
import w3fLogo from '../../../media/ecosystem/grants/w3f-logo.png';
import hackathons1 from '../../../media/ecosystem/hackathons/hackathons-1.png';
import hackathons2 from '../../../media/ecosystem/hackathons/hackathons-2.png';
import jobs from '../../../media/ecosystem/jobs/jobs.png';
import seminar from '../../../media/ecosystem/seminar/seminar.png';

const imagesMap = {
  hackathons1,
  hackathons2,
  jobs,
  w3fLogo,
  'community-resources': communityResources,
  seminar,
};

export default function Image({ name, alt, className }) {
  if (!name) return <span className="w-5"></span>;
  if (!imagesMap[name]) return <span className="w-5"></span>;
  return <img src={imagesMap[name]} alt={alt} className={className} />;
}
