console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums:[],
    selectedGenre: "All",
  },
  computed:{
    orderedAlbums(){
      return this.albums.sort((a, b)=>{
        return a.year - b.year;
      });
    },
    genreList(){
      const genreList = [];
      this.albums.forEach(album => {
        if(!genreList.includes(album.genre))
        genreList.push(album.genre);
      });

      return genreList;
    },
    filteredAlbums(){
      const albums = this.orderedAlbums;
      if(this.selectedGenre === 'All') return albums;
      return albums.filter((album)=>{
        return album.genre === this.selectedGenre;
      })
    }
  },
  methods: {},
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res)=>{
     console.log("LOG RES.DATA:",res.data.response)
     this.albums=(res.data.response);
    })
  }
});
