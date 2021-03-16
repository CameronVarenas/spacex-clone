import React, { Component } from 'react'
import axios from 'axios'

class SeasonalAnime extends Component {
    constructor() {
        super();

        this.state = {
            watchList: []
        }
    }

    render() {
        const seasonalsMapped = this.props.seasonalAnime.map(anime => {
            
            return (
                <div key={anime.id} className='seasonal-content'>
                    
                        <img className='mapped-anime' src={anime.img_url} />
                        <h5 className='seasonal-titles'>{anime.title}</h5>
                        <button onClick={() => this.props.toWatchList(anime.title, anime.id, anime.img_url)}>Add to Watch List</button>
                    
                </div>
            );
        });

        return (
            <div className='seasonal-content'>
                {seasonalsMapped}
            </div>
        )
    }
}

export default SeasonalAnime