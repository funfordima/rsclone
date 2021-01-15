import React from 'react';
import './servicesContent.css';
import ServicesContentLink from '../servicesContentLink/servicesContentLink'

export interface servicesContentProps {
  links: string[]
  images: string[]
}

export default function ServicesContent({
    links,
    images,
}: servicesContentProps) {
  return (
    <div className='service-content-wrapper'>
        <div className='service-content'>
            <div className='service-item'>
                <ServicesContentLink link = {links[0]} image = {images[0]}/>
            </div>
            <div className='service-item'>
                <ServicesContentLink link = {links[1]} image = {images[1]}/>
                <ServicesContentLink link = {links[2]} image = {images[2]}/>
            </div>
            <div className='service-item'>
                <ServicesContentLink link = {links[3]} image = {images[3]}/>
            </div>
            <div className='service-item'>
                <ServicesContentLink link = {links[4]} image = {images[4]}/>
                <ServicesContentLink link = {links[5]} image = {images[5]}/>
            </div>
        </div>
    </div>
  )
}