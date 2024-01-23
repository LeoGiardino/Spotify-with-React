import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtistPage = () => {
    const [artistInfo, setArtistInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchArtistInfo = async () => {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch artist data');
                }

                const data = await response.json();
                setArtistInfo(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchArtistInfo();
    }, [id]);

    console.log(artistInfo);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-9 offset-md-3 mainPage">
                    <div className="row mb-3">
                        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                            {/* Aggiungi i link del menu qui */}
                        </div>
                    </div>

                    {artistInfo && artistInfo[0] && (
                        // Resto del codice


                        <>
                            <div className="row">
                                <div className="col-12 col-md-10 col-lg-10 mt-5">
                                    <h2 className="titleMain">{artistInfo[0].artist.name}</h2>
                                    <div id="followers">{artistInfo[0].rank}</div>
                                    <div className="d-flex justify-content-center" id="button-container">
                                        <button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                                            PLAY
                                        </button>
                                        <button className="btn btn-outline-light mainButton d-inline" id="followButton">
                                            FOLLOW
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                                    <div className="mt-4 d-flex justify-content-start">
                                        <h2 className="text-white font-weight-bold">Tracks</h2>
                                    </div>
                                    <div className="pt-5 mb-5">
                                        
                                            <div className="row" id="apiLoaded">
                                                {artistInfo.map((track) => (
                                                    <div className="col-sm-auto col-md-auto text-center mb-5" key={track.id}>
                                                        <a href={`/album_page.html?id=${track.album.id}`}>
                                                            <img className="img-fluid" src={track.album.cover} alt={track.title} />
                                                        </a>
                                                        <p>
                                                            <a href={`/album_page.html?id=${track.album.id}`}>
                                                                Track: {track.title}
                                                            </a><br />
                                                            <a href={`/album_page.html?id=${track.album.id}`}>
                                                                Album: {track.album.title}
                                                            </a>
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        

                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArtistPage;
