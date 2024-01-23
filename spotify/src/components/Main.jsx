import React, { useEffect, useState } from 'react'
import '../components/Main.css';
import Card from './Card';


export default function Main() {

    let rockArtists = [
        'queen',
        'u2',
        'thepolice',
        'eagles',
        'thedoors',
        'oasis',
        'thewho',
        'bonjovi'
    ]

    let popArtists = [
        'maroon5',
        'coldplay',
        'onerepublic',
        'jamesblunt',
        'katyperry',
        'arianagrande',
    ]

    let hipHopArtists = [
        'eminem',
        'snoopdogg',
        'lilwayne',
        'drake',
        'kanyewest',
    ]

    const [rock, setRock] = useState([])
    const [pop, setPop] = useState([])
    const [hipHop, setHipHop] = useState([])

    let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    })


    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=rock',
            {
                method: 'GET',
                headers
            })
            .then((response) => response.json())
            .then((data) => {
                setRock(data.data)
                console.log(data.data)
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=pop',
            {
                method: 'GET',
                headers
            })
            .then((response) => response.json())
            .then((data) => {
                setPop(data.data)
                console.log(data.data)
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop',
            {
                method: 'GET',
                headers
            })
            .then((response) => response.json())
            .then((data) => {
                setHipHop(data.data)
                console.log(data.data)
            })
            .catch((error) => console.log(error));
    }, []);




    return (



        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div id="searchResults" style={{ display: "none" }}>
                        <h2>Search Results</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                        ></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection">
                            {rock
                                .sort(() => Math.random() - 0.5)
                                .slice(0, 4)
                                .map((song) => (
                                    <Card key={song.id} songInfo={song} />
                                ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="popSection"
                        >

                            {pop
                                .sort(() => Math.random() - 0.5)
                                .slice(0, 4)
                                .map((song) => (
                                    <Card key={song.id} songInfo={song} />
                                ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">

                            {hipHop
                                .sort(() => Math.random() - 0.5)
                                .slice(0, 4)
                                .map((song) => (
                                    <Card key={song.id} songInfo={song} />
                                ))}

                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}
