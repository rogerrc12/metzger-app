import * as Yup from "yup";

export const registerExtinguisherSchema = Yup.object().shape({
  location_id: Yup.number().required("Debes seleccionar una opción."),
  type_id: Yup.number().required("Debes seleccionar una opción."),
  brand_id: Yup.number().required("Debes seleccionar una opción."),
  serie: Yup.string().required("Debes escribir una serie"),
  class_id: Yup.number().required("Debes seleccionar una opción."),
  capacity_id: Yup.number().required("Debes seleccionar una opción."),
  agent_id: Yup.number().required("Debes seleccionar una opción."),
  manufacturing_date: Yup.string().when("is_manufacturing_date", {
    is: false,
    then: Yup.string().required("Debes agregar una fecha de fabricación."),
    otherwise: Yup.string().notRequired(),
  }),
  hydrostatic_test_date: Yup.string().required("Debes agregar una fecha de prueba hidrostática."),
  inspection_date: Yup.string().required("Debes agregar una fecha de inspección."),
  recharge_date: Yup.string().required("Debes agregar una fecha de recarga."),
});

export const editExtinguisherSchema = Yup.object().shape({
  location_id: Yup.number().required("Debes seleccionar una opción."),
  hydrostatic_test_date: Yup.string().required("Debes agregar una fecha de prueba hidrostática."),
  recharge_date: Yup.string().required("Debes agregar una fecha de recarga."),
  status_id: Yup.number().required("Debe seleccionar un status"),
  provider_id: Yup.string().when("status_id", {
    is: 76,
    then: Yup.string().required("Debes seleccionar un proveedor para la recarga."),
    otherwise: Yup.string().notRequired(),
  }),
});
