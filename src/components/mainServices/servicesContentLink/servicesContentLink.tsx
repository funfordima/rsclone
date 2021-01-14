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
}