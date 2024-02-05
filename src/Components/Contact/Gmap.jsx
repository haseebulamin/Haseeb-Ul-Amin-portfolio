import React,{useEffect} from 'react'

export default function Gmap() {
   useEffect(() => {
    function updateMapWithCurrentLocation() {
        // Try HTML5 geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const iframe = document.getElementById('mapIframe');
              const currentLocationUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6865.131156947819!2d72.63690515!3d30.6461985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392326150971c08d%3A0xefef8624c266edc1!2sJakhar%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab!5e0!3m2!1sen!2s!4v1707144811344!5m2!1sen!2s`;
              
              // Append current location parameters
              const updatedSrc = `${currentLocationUrl}&center=${position.coords.latitude},${position.coords.longitude}`;
  
              // Set the iframe src with the updated URL
              iframe.src = updatedSrc;
            },
            () => {
              // Handle Geolocation error (e.g., user denied permission)
              console.error('Error getting user location');
            }
          );
        } else {
          // Browser doesn't support Geolocation
          console.error('Browser does not support Geolocation');
        }
      }
  
      // Call the function when needed, for example, when a button is clicked
      updateMapWithCurrentLocation();
   
   }, [])
   
  
    return (
      
        <iframe id="mapIframe" className='w-full h-full border-round-xl' allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      
    );
}
