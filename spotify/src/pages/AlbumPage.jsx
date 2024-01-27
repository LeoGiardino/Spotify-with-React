import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { playSong } from '../actions';

export default function AlbumPage() {
  const state = useSelector((state) => state.song);
  const [albumInfo, setAlbumInfo] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [likes, setLikes] = useState({});
  const albumId = useParams();
  const dispatch = useDispatch();

  const playPreview = (previewUrl, song) => {
    setAudioUrl(previewUrl);
    setIsPlaying(true);
  };

  useEffect(() => {}, [state]);

  const stopPreview = () => {
    setAudioUrl('');
    setIsPlaying(false);
  };

  const togglePreview = (previewUrl) => {
    if (isPlaying && audioUrl === previewUrl) {
      stopPreview();
    } else {
      playPreview(previewUrl);
    }
  };

  const headers = new Headers({
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
  });

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId.id}`, {
      method: 'GET',
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbumInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (song) => {
    dispatch(playSong(song));
  };

  const handleLikes = (e, id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id], // Inverte il valore del like per la canzone specifica
    }));
  };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      {albumInfo && (
        <div className="row">
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img src={albumInfo.cover_medium} alt="" />
            <div className="mt-4 text-center">
              <p className="album-title">{albumInfo.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">{albumInfo.artist.name}</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {albumInfo.tracks.data.map((song, index) => {
                  const isLiked = likes[song.id];

                  return (
                    <div className="d-flex align-items-center" key={index}>
                      <i
                        data-id={song.id}
                        className={isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'}
                        onClick={(e) => handleLikes(e, song.id)}
                        style={{ color: 'white', cursor: 'pointer', fontSize: '20px' }}
                      ></i>
                      <div
                        key={index}
                        className="py-3 trackHover ms-5"
                        onClick={() => {
                          togglePreview(song.preview);
                          handleClick(song);
                        }}
                      >
                        <a href="#" className="card-title trackHover px-3" style={{ color: 'white' }}>
                          {song.title}
                        </a>
                        <small className="duration" style={{ color: 'white' }}>
                          {song.duration}
                        </small>
                      </div>
                    </div>
                  );
                })}
                {isPlaying && <audio autoPlay onEnded={stopPreview} src={audioUrl} style={{ width: '100%' }} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
