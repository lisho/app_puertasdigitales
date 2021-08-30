import {
  Box,
  
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import traerListaCompleta from "../helpers/traerListaCompleta";
import MUIDataTable, { ExpandButton, TableFilterList } from "mui-datatables";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";
import EditButton from "./tablaCustomComponents/EditButton";

const ListaDePuertasDataTableUi = ({
  listaPuertas,
  setListaPuertas,
  setPuertaParaEditar,
  onOpen,
}) => {
  const [resizableColumns, setResizableColumns] = useState(false);

  useEffect(() => {
    const lista = traerListaCompleta(
      process.env.NEXT_PUBLIC_URL_API + "puertas"
    );
    lista.then((resultado) => setListaPuertas(resultado));
  }, []);

  /***** COLUMNAS *****/

  const columnas = [
    "titulo",
    "descripcion",
    {
      name: "proceso",
      label: "proceso",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          // Here you can render a more complex display.
          // You're given access to tableMeta, which has
          // the rowData (as well as the original object data).
          // See the console for a detailed look at this object.
          const html = () => {return {__html:value}};
         
          return <Box dangerouslySetInnerHTML={html()} />;
        },
      },
    },
    "foto",
    "video",
    {
      name: "Editar",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <EditButton
              handleEditar = {handleEditar}
              dataIndex = {dataIndex}
              rowIndex = {rowIndex}
            />
          );
        }
      }
    },
  ];

  /***** OPCIONES *****/

  const options = {
    resizableColumns: resizableColumns,
    onRowsDelete:(e, newTableData)=>{handleBorrar(e.data, newTableData)},
    /* selectableRows:'single', */
  };

  /***** COMPONENTS *****/

  const components = {};

  /* MANEJADORES DE ACCIONES */

  const handleBorrar = (arrayDeFilasParaBorrar, newTableData) => {
    newTableData = null;
    console.log(`newTableData`, newTableData)
   
      arrayDeFilasParaBorrar.map(

        filaParaBorrar =>{ 
            let idParaBorrar = listaPuertas[filaParaBorrar.dataIndex].id
            borrarElementoEnBd(process.env.NEXT_PUBLIC_URL_API+"puertas/"+idParaBorrar, setListaPuertas)}
      ); 

  } 

  const handleEditar = (dataIndex, rowIndex) => {
   
    let elementoParaEditar = listaPuertas[dataIndex];
    setPuertaParaEditar(elementoParaEditar);
    onOpen();
   
  } 

  return (
    <Box m="5">
      <MUIDataTable
        title={"Puertas digitales creadas"}
        data={listaPuertas}
        columns={columnas}
        options={options}
        components={components}
      />
    </Box>
  );
};

/* https://github.com/gregnb/mui-datatables */

export default ListaDePuertasDataTableUi;
