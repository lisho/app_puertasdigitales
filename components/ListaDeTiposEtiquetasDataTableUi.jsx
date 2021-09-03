import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import traerListaCompleta from "../helpers/traerListaCompleta";
import MUIDataTable, { ExpandButton, TableFilterList } from "mui-datatables";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";
import EditButton from "./tablaCustomComponents/EditButton";

const ListaDeEtiquetasDataTableUi = ({
  listaEtiquetas,
  setListaEtiquetas,
  setEtiquetaParaEditar,
  onOpen,
}) => {
  const [resizableColumns, setResizableColumns] = useState(false);
 
  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetas"
    );
    lista.then((resultado) => setListaEtiquetas(resultado));
    
  }, []);

  /***** COLUMNAS *****/

  const columnas = [
    "etiqueta",
    "descripcion",
    /* "etiquetaTipo.tipo", */
    {
      name:"etiquetaTipo.tipo",
      label:"Tipo",
      
    },
    {
      name: "Editar",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <EditButton
              handleEditar={handleEditar}
              dataIndex={dataIndex}
              rowIndex={rowIndex}
            />
          );
        },
      },
    },
  ];

  /***** OPCIONES *****/

  const options = {
    resizableColumns: resizableColumns,
    onRowsDelete: (e, newTableData) => {
      handleBorrar(e.data, newTableData);
    },
    enableNestedDataAccess: '.'
    /* selectableRows:'single', */
  };

  /***** COMPONENTS *****/

  const components = {};

  /* MANEJADORES DE ACCIONES */

  const handleBorrar = (arrayDeFilasParaBorrar, newTableData) => {
    newTableData = null;
   
    arrayDeFilasParaBorrar.map((filaParaBorrar) => {
      let idParaBorrar = listaEtiquetas[filaParaBorrar.dataIndex].id;
      borrarElementoEnBd(
        process.env.NEXT_PUBLIC_URL_API + "etiquetas/" + idParaBorrar,
        setListaEtiquetas
      );
    });
  };

  const handleEditar = (dataIndex, rowIndex) => {
    let elementoParaEditar = listaEtiquetas[dataIndex];
    setEtiquetaParaEditar(elementoParaEditar);
    onOpen();
  };

  return (
    <Box m="5" maxW={"100%"}>
      
      <MUIDataTable
        title={"Etiquetas creadas"}
        data={listaEtiquetas}
        columns={columnas}
        options={options}
        components={components}
        maxW={"100%"}
      />
    </Box>
  );
};

export default ListaDeEtiquetasDataTableUi;
