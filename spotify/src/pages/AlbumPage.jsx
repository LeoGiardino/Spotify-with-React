import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


export default function AlbumPage() {
  const currentSong = useSelector((state) => state.currentSong);


  const [albumInfo, setAlbumInfo] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');

  const albumId = useParams();
  const dispatch = useDispatch();

  console.log(albumId);

  const playPreview = (previewUrl, song) => {
    setAudioUrl(previewUrl);
    setIsPlaying(true);

    if (song) {
        dispatch({
            type: 'CANZONE_RIPORODOTTA',
            payload: {
                title: song.title || '',
                artist: song.artist?.name || '',
                duration: song.duration || '',
            },
        });
    }
};

  
  console.log(currentSong);
  

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

  let headers = new Headers({
    // sets the headers
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
  })

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId.id}`, {

      method: 'GET',
      headers
    }).then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAlbumInfo(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  return (


    <div class="col-12 col-md-9 offset-md-3 mainPage">
      <div class="row mb-3">
        <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      {albumInfo && (
        <div class="row">
          <div class="col-md-3 pt-5 text-center" id="img-container">
            <img src={albumInfo.cover_medium} alt="" />
            <div class="mt-4 text-center">
              <p class="album-title">{albumInfo.title}</p>
            </div>
            <div class="text-center">
              <p class="artist-name">{albumInfo.artist.name}</p>
            </div>
            <div class="mt-4 text-center">
              <button id="btnPlay" class="btn btn-success" type="button">Play</button>
            </div>

          </div>
          <div class="col-md-8 p-5">
            <div class="row">
              <div class="col-md-10 mb-5" id="trackList">

                {albumInfo.tracks.data.map((song, index) => {
               
                  return (
                    <div key={index} className="py-3 trackHover">
                      <a href="#" className="card-title trackHover px-3" style={{ color: "white" }} onClick={() => {togglePreview(song.preview)}}>{song.title}</a>
                      <small className="duration" style={{ color: "white" }}>{song.duration}</small>
                    </div>
                  );
                })}
                {isPlaying && (
                  <audio
                    controls
                    autoPlay
                    onEnded={stopPreview}
                    src={audioUrl}
                    style={{ width: '100%' }}
                  />
                )}

                <div>



                </div></div>
            </div>
          </div>
        </div>


      )}
    </div>

  )
}
