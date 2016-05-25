const apiPath = `https://api.spotify.com/v1/`;
const apiExplorerPath = `https://artistexplorer.spotify.com/`
const musicBand = `https://api.bandsintown.com/artists/`

export default {
  api:{
    enpoints:{

      getSearch:(query, type)=>{
        return apiPath+`search?query=${query}*&offset=0&limit=10&type=${type}`
      },
      getArtist:(id)=>{
        return apiPath+`artists/${id}`
      },
      getKinds: () =>{
        return apiExplorerPath+`api/genres`
      },
      getTour:(name) => {
        return `http://api.setlist.fm/rest/0.1/search/setlists.json?artistName=muse`
      }

    }
  }
}
