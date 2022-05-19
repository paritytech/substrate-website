import React from 'react';

export default function Icon({ IconComponent, className, ...others }) {
  if (!IconComponent) return <span className="w-5"></span>;
  return <IconComponent className={className} {...others}></IconComponent>;
}
