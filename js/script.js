console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums:[],
  },
  methods: {},
  created(){
    axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res)=>{
     // const albumTitle = res.data.response[1].title ------> preso parametro oggetto;
     // console.log("LUNGHEZZA",res.data.response.length) ------->preso indice API;

     //costruisco oggetto album e push in array albums
     if(i=0, i < res.data.response.length, i++){
       const album = {
         poster: res.data.response[i].poster,
         title: res.data.response[i].title,
         author: res.data.response[i].author,
         genre: res.data.response[i].genre,
         year: res.data.response[i].year,
       }
       this.albums.push(album);
     }
    })
  }
});
console.log("ALBUMS:", this.album);