import React, {Fragment} from 'react';
import NavBar from '../../components/navbar';

function WikiDetails(props) {
  
  const details = (entity) => {
    const [data] = entity.data;
    return(
      <div className="wiki-details">

        <h2 className="wiki-details__title">{data.title}</h2>
        <p className="wiki-details__date">{data.date_created}</p>
        <p className="wiki-details__description">{data.description}</p>        
      </div>
    )
  }

  const renderImage = (img) => (
    <img className="wiki-details__media-image" src={img.href}/>
  )


  const renderVideo = (video) => (
    <video className="wiki-details__media-video">
      <source src={video.href}/>
    </video>
  )

  const media = (entity) => {
    const [media] = entity.links;

    return(
      <div className="wiki-details__media">
        { media.render === 'image' && renderImage(media) }
        { media.render === 'image' && renderVideo(media) }
      </div>
    )
  }

  const close = (close) => (
    <span className='wiki-details__close' onClick={ ()=> close()}>
      {'×'}
    </span>
  )

  const navbar = ({ back, next, tracker}) => (
    <NavBar back={back} next={next} tracker={tracker}/>
  )
 
  return(
    <Fragment>
      { props.show && close(props.close) }
      { props.show && media(props.currentEntity) }
      { props.show && details(props.currentEntity) }
      { props.show && navbar(props)}
    </Fragment>
  )
}

export default WikiDetails;