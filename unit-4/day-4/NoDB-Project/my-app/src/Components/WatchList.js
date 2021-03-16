import React, {Component} from 'react'

class WatchList extends Component {

    render() {
        const watchListMapped = this.props.watchListAnime.map(anime => {
                return (
                    <div className='watch-list-content' key={anime.id}>
                        <img className='list-img' src={anime.img_url} />
                        <h3 className='watch-list-titles'>{anime.title}</h3>
                    </div>
                );
        });

        return (
            <div className='list'>
                {watchListMapped}
            </div>
        )
    }
}


export default WatchList