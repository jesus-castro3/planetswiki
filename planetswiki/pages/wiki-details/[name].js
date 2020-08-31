import React, { Fragment, useState } from 'react';
import useSWR from 'swr'
import { useRouter } from 'next/router'
import NavBar from '../../components/Navbar';
import API from '../../lib/api';

function useEntity(name) {
    const { data, error } = useSWR(`https://images-api.nasa.gov/search?q=${name}`, API.GET.entity);
    return {
        entityList: data && data.entityList,
        isLoading: !error && !data,
        isError: error
    }
};

function WikiDetails() {
    const [pageTracker, setPageTracker] = useState(0);
    const { query } = useRouter();
    const { name } = query;
    const { setEntity, entityList, isError, isLoading } = useEntity(name);


    const renderImage = (img) => <img className="wiki-details__media-image" src={img.href} alt="planet" />

    const renderVideo = (video) => (
        <video className="wiki-details__media-video">
            <source src={video.href} />
        </video>
    )

    const back = () => {
        return false;
    }

    const next = (e) => {
        const tracker = (pageTracker === entityList.length - 1) ? pageTracker : pageTracker + 1;
        setPageTracker(tracker);
        setEntity({
            currentEntity: entityList[tracker]
        });
    }

    const tracker = () => {
        return false;
    }

    if(isError) return <span> :( Something happended try again later....</span>

    if(isLoading) return <span> Is Loading....</span>
    
    const { links , data } = currentEntity;
    const [media] = links;
    const [details] = data;

    return (
        <Fragment>
            <div className="wiki-details__media">
                {media.render === 'image' && renderImage(media)}
                {media.render === 'image' && renderVideo(media)}
            </div>
            <div className="wiki-details">
                <h2 className="wiki-details__title">{details.title}</h2>
                <p className="wiki-details__date">{details.date_created}</p>
                <p className="wiki-details__description">{details.description}</p>
            </div>
            <NavBar back={back} next={next} tracker={tracker} />
        </Fragment>
    )
}

export default WikiDetails;