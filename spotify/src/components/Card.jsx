import React from 'react';
import { Link } from 'react-router-dom';


export default function Card({ songInfo }) {


  console.log(songInfo);



  return (

    <div  className="col text-center" id={songInfo.id}>
      <Link to={`/albumPage/${songInfo.album.id}`}>
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link href={`/album_page.html?id=${songInfo.album.id}`}>
          Album: "{songInfo.album.title.length < 16 ? songInfo.album.title : `${songInfo.album.title.substring(0, 16)}...`}."<br />
        </Link>
        <Link href={`/artist_page.html?id=${songInfo.artist.id}`}>
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </div>
  );
}
