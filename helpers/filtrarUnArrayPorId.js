
const filtrarUnArrayPorId = (array, id) => {


    let results = array?.filter((elemento) => elemento.id === id);
    var existe = (results?.length > 0) ? true : false;

    return existe;
}

export default filtrarUnArrayPorId;