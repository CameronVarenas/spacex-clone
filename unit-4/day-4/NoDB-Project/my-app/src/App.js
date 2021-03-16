import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Component } from 'react';
import SeasonalAnime from './Components/SeasonalAnime';
import WatchList from './Components/WatchList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      seasonalAnimes: [],
      watchList: [],
    }
  }

  getAnime = () => {
    axios
      .get(`http://localhost:4000/api/anime`)
      .then((res) => {
        // console.log(res.data[0]);
        this.setState({seasonalAnimes: res.data[0]});
        // console.log(this.state.seasonalAnimes)
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getAnime();
  }

  toWatchList = (title, id, img_url) => {
    axios
      .post(`http://localhost:4000/api/anime/?title=${title}&id=${id}&img_url=${img_url}`)
      .then((res) => {
        console.log(res.data)
        this.setState({watchList: res.data});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <Header />
            <h3 className='seasonal-header'>Seasonal Anime - Winter 2021</h3>
          <section className='seasonals'>
            <SeasonalAnime seasonalAnime={this.state.seasonalAnimes} toWatchList={this.toWatchList}/>
          </section>
          <section>
            <h3 className='list-header'>Your Watch List</h3>
            <section className='watch-list'>
              <WatchList className='watch-list-content' watchListAnime={this.state.watchList}/>
            </section>
          </section>
      </div>
    );
  }

}

export default App;