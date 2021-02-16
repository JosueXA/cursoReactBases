//const getImagenPromesa = () => new Promise( resolve => resolve('https://hdhjoiunwujas.com') );
//getImagenPromesa().then( console.log );

const getImagen = async() => {

  try {

    const apiKey = 'Is1W7lwwINGGgOl5SIXy0liDKJ1RAIsy';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await resp.json();
    const {url} = data.images.original;

    const img = document.createElement('img');

    img.src = url;
    document.body.append(img);
    
  } catch (error) {

    console.log(error);
    
  }
  
}

getImagen();

/*


peticion
  .then( resp => resp.json())
  .then( ({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

    
  })
  .catch( console.warn );
*/