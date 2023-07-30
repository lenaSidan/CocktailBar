import React, { useEffect, useState } from 'react';
import type ZippopotamKey from './types/ZippopotamKey';

export default function Zippopotam(): JSX.Element {
  const initialValue: ZippopotamKey = {
    'post code': '',
    country: '',
    'country abbreviation': '',
    places: [
      {
        'place name': '',
        longitude: '',
        state: '',
        'state abbreviation': '',
        latitude: '',
      },
    ],
  };

  const [zippopotam, setZippopotam] = useState<ZippopotamKey>(initialValue);

  async function loadZippopotam(): Promise<void> {
    const res = await fetch('https://api.zippopotam.us/us/33162');
    const obj = await res.json();
    setZippopotam(obj);
  }

  useEffect(() => {
    loadZippopotam();
  }, []);

  return (
    <div>
      <h1>{zippopotam['post code']}</h1>
      <p>
        <strong>Country:</strong> {zippopotam.country}
      </p>
      <p>
        <strong>Country Abbreviation:</strong> {zippopotam['country abbreviation']}
      </p>
      {zippopotam.places.length > 0 && (
        <div>
          <h2>Place Information</h2>
          <p>
            <strong>Place Name:</strong> {zippopotam.places[0]['place name']}
          </p>
          <p>
            <strong>Longitude:</strong> {zippopotam.places[0].longitude}
          </p>
          <p>
            <strong>State:</strong> {zippopotam.places[0].state}
          </p>
          <p>
            <strong>State Abbreviation:</strong> {zippopotam.places[0]['state abbreviation']}
          </p>
          <p>
            <strong>Latitude:</strong> {zippopotam.places[0].latitude}
          </p>
        </div>
      )}
      <button type="button" onClick={loadZippopotam}>New Activity</button>
    </div>
  );
}
