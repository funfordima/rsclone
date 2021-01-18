<<<<<<< HEAD:src/components/mainServices/servicesContentLink/servicesContentLink.tsx
import React from 'react';

interface servicesContentLinkProps {
  link: string
  image: string
}

export default function ServicesContentLink({
    link,
    image,
}: servicesContentLinkProps) {
  return (
    <a href={link}>
        <img src={image} alt=""/>
    </a>
  )
=======
import React from 'react';

export interface servicesContentLinkProps {
  link: string
  image: string
}

export default function ServicesContentLink({
    link,
    image,
}: servicesContentLinkProps) {
  return (
    <a href={link}>
        <img src={image} alt=""/>
    </a>
  )
>>>>>>> e99d01775c001135ed46040dd75934be36c2c7be:103/src/components/mainServices/servicesContentLink/servicesContentLink.tsx
}