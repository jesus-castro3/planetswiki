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
    const router = useRouter();
    const { name } = router.query;
    const { entityList, isError, isLoading } = useEntity(name);


    const renderImage = (img) => <img className="wiki-details__media-image" src={img.href} alt="planet" />

    const renderVideo = (video) => (
        <video className="wiki-details__media-video">
            <source src={video.href} />
        </video>
    );

    const close = () => router.push('/')

    const back = () => {
        const tracker = (pageTracker === 0) ? 0 : pageTracker - 1;
        setPageTracker(tracker);
    }

    const next = () => {
        const tracker = (pageTracker === entityList.length - 1) ? pageTracker : pageTracker + 1;
        setPageTracker(tracker);
    }

    if(isError) return <span> :( Something happended try again later....</span>

    if(isLoading) return <span> Is Loading....</span>
    
    const currentEntity = entityList[pageTracker];
    const { links , data } = currentEntity;
    const [media] = links;
    const [details] = data;

    return (
        <Fragment>
            <div className="wiki-details__close">
                <button onClick={close}>X</button>
            </div>
            <section className="wiki-details__media">
                {media.render === 'image' && renderImage(media)}
                {media.render === 'image' && renderVideo(media)}
            </section>
            <section className="wiki-details">
                <h2 className="wiki-details__title">{details.title}</h2>
                <p className="wiki-details__date">{details.date_created}</p>
                <p className="wiki-details__description">{details.description}</p>
            </section>
            <NavBar back={back} next={next} tracker={pageTracker} />
        </Fragment>
    )
}

export default WikiDetails;