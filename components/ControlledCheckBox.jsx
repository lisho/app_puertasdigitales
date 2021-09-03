import { Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import filtrarUnArrayPorId from "../helpers/filtrarUnArrayPorId";

const ControlledCheckBox = ({
  etiquetaCheck,
  etiquetaIsChecked,
  setEtiquetaIsChecked,
  formValues,
  todasEtiquetas,
}) => {

  useEffect(() => {}, []);

  const handleCheckEtiquetasChange = (e) => {
    let etiquetaIsCheckedActualizado = etiquetaIsChecked;
    const estaEtiqueta = todasEtiquetas.find(
      (etiqueta) => etiqueta.id == e.target.value
    );

    if (
      etiquetaIsCheckedActualizado.some(
        (etiqueta) => etiqueta.id == e.target.value
      )
    ) {
      etiquetaIsCheckedActualizado = etiquetaIsCheckedActualizado.filter(
        (etiqueta) => etiqueta.id != e.target.value
      );
    } else {
      etiquetaIsCheckedActualizado = [
        ...etiquetaIsCheckedActualizado,
        estaEtiqueta,
      ];
    }

    setEtiquetaIsChecked(etiquetaIsCheckedActualizado);
  };

  useEffect(() => {
    console.log(`etiquetaIsChecked`, etiquetaIsChecked);
  }, [etiquetaIsChecked]);

  return (
    <Checkbox
      isChecked={filtrarUnArrayPorId(etiquetaIsChecked, etiquetaCheck.id)}
      defaultChecked={filtrarUnArrayPorId(etiquetaIsChecked, etiquetaCheck.id)}
      onChange={(e) => handleCheckEtiquetasChange(e)}
      name="etiqueta"
      value={etiquetaCheck.id}
    >
      {etiquetaCheck.etiqueta}
    </Checkbox>
  );
};

export default ControlledCheckBox;
