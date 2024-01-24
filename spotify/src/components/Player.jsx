import React from 'react';
import '../components/Player.css';
import next from '../playerbuttons/Next.png';
import play from '../playerbuttons/Play.png';
import repeat from '../playerbuttons/Repeat.png';
import shuffle from '../playerbuttons/Shuffle.png';
import previous from '../playerbuttons/Previous.png';
import { useSelector } from 'react-redux';

export default function Player() {
  const state = useSelector(state => state);

  return (
    <>
      {state.length > 0 && (
        <div className="container-fluid fixed-bottom bg-container pt-1">
          <div className='playing d-flex'>
            <div>
              <img src={state[state.length - 1].album.cover_medium} alt="" style={{ width: "50px" }} />
            </div>
            <div className='ms-2 text-truncate'>
              <p className='mb-0 text-truncate'>{state[state.length - 1].title}</p>
              <p className='text-truncate'>{state[state.length - 1].artist.name}</p>
            </div>
          </div>
          <div className="row contenitore">
            <div className="col-lg-10 offset-lg-2">
              <div className="row">
                <div
                  className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
                >
                  <div className="row d-flex flex-nowrap container player">
                    <a href="#">
                      <img src={shuffle} alt="shuffle" />
                    </a>
                    <a href="#">
                      <img src={previous} alt="previous" />
                    </a>
                    <a href="#">
                      <img src={play} alt="play" />
                    </a>
                    <a href="#">
                      <img src={next} alt="next" />
                    </a>
                    <a href="#">
                      <img src={repeat} alt="repeat" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center playBar py-3">
                <div className="col-8 col-md-6">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
