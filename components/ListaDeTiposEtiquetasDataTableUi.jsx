import { Box, Tag } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import traerListaCompleta from "../helpers/traerListaCompleta";
import MUIDataTable, { ExpandButton, TableFilterList } from "mui-datatables";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";
import EditButton from "./tablaCustomComponents/EditButton";

const ListaDeTiposEtiquetasDataTableUi = ({
  listaTiposEtiquetas,
  setListaTiposEtiquetas,
  setTiposEtiquetaParaEditar,
  setIndexParaEditar,
  onOpen,
}) => {
  const [resizableColumns, setResizableColumns] = useState(false);
 
  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "etiquetaTipos"
    );
    lista.then((resultado) => setListaTiposEtiquetas(resultado));
    
  }, []);

  /***** COLUMNAS *****/

  const columnas = [
    "tipo",
    "descripcion",
    /* "etiquetaTipo.tipo", */
  "color",
  {
    name: "color",
    options: {
      customBodyRenderLite: (dataIndex) => {     
          return <Tag  bg={listaTiposEtiquetas[dataIndex].color} m={1}>{listaTiposEtiquetas[dataIndex].color}</Tag>; 
      },
    }
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
      let idParaBorrar = listaTiposEtiquetas[filaParaBorrar.dataIndex].id;
      borrarElementoEnBd(
        process.env.NEXT_PUBLIC_URL_API + "etiquetaTipos/" + idParaBorrar,
        setListaTiposEtiquetas
      );
    });
  };

  const handleEditar = (dataIndex, rowIndex) => {
    let elementoParaEditar = listaTiposEtiquetas[dataIndex];
    setIndexParaEditar(dataIndex);
    setTiposEtiquetaParaEditar(elementoParaEditar);
    onOpen();

  };

  return (
    <Box m="5" maxW={"100%"}>
      
      <MUIDataTable
        title={"Tipos de Etiqueta disponibles"}
        data={listaTiposEtiquetas}
        columns={columnas}
        options={options}
        components={components}
        maxW={"100%"}
      />
    </Box>
  );
};

export default ListaDeTiposEtiquetasDataTableUi;
