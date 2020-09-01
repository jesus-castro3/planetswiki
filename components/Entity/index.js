import React from 'react';
import { useRouter } from 'next/router';

const Entity = ({
  color,
  name,
  size,
}) => {

  const router = useRouter();

  const showEntityWikiDetails = () => {
    router.push('/wiki-details/[name]', `/wiki-details/${name}`);
  }
  
  return(
    <div className="planet__wrapper" onClick={showEntityWikiDetails}>
      <span className='planet' style={{ backgroundColor: color, width: size, height: size }}></span>
      <p>{name}</p>
    </div>
  )
}


export default Entity;