import React, { FC } from 'react'
import css from './index.module.css'
import GoogleMapReact from 'google-map-react'
import { MAPProps } from '@/constants/map'

const Marker: FC<{
   lat: number
   lng: number
}> = () => (
   <div className={css.marker}>
      <span />
   </div>
)

export const Map = () => {
   const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   return (
      <div className={css.wrapper}>
         <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={MAPProps.center}
            defaultZoom={MAPProps.zoom}
            yesIWantToUseGoogleMapApiInternals
         >
            <Marker lat={MAPProps.center.lat} lng={MAPProps.center.lng} />
         </GoogleMapReact>
      </div>
   )
}
