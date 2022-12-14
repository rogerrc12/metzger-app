import * as Yup from "yup";

export const createAlertSchema = Yup.object().shape({
  internal_code: Yup.bool(),
  qr_code: Yup.bool(),
  pressure_gauge: Yup.bool(),
  pressure_gauge_reading: Yup.bool(),
  determined_load_indicator: Yup.bool(),
  hose: Yup.bool(),
  nozzle: Yup.bool(),
  cornet: Yup.bool(),
  piton: Yup.bool(),
  tires: Yup.bool(),
  label: Yup.bool(),
  lock: Yup.bool(),
  hose_holder: Yup.bool(),
  paint: Yup.bool(),
  instructions: Yup.bool(),
  clamping_handle: Yup.bool(),
  actuator: Yup.bool(),
  control_card: Yup.bool(),
  hydrostatic_test: Yup.bool(),
  recharge: Yup.bool(),
  visibility: Yup.bool(),
  signaling: Yup.bool(),
  access: Yup.bool(),
  hook: Yup.bool(),
  checkbox_selection: Yup.bool().when(
    [
      "internal_code",
      "qr_code",
      "pressure_gauge",
      "pressure_gauge_reading",
      "determined_load_indicator",
      "hose",
      "nozzle",
      "cornet",
      "piton",
      "tires",
      "label",
      "lock",
      "hose_holder",
      "paint",
      "instructions",
      "clamping_handle",
      "actuator",
      "control_card",
      "hydrostatic_test",
      "recharge",
      "visibility",
      "signaling",
      "access",
      "hook",
    ],
    {
      is: (
        internal_code,
        qr_code,
        pressure_gauge,
        pressure_gauge_reading,
        determined_load_indicator,
        hose,
        nozzle,
        cornet,
        piton,
        tires,
        label,
        lock,
        hose_holder,
        paint,
        instructions,
        clamping_handle,
        actuator,
        control_card,
        hydrostatic_test,
        recharge,
        visibility,
        signaling,
        access,
        hook
      ) =>
        !internal_code &&
        !qr_code &&
        !pressure_gauge &&
        !pressure_gauge_reading &&
        !determined_load_indicator &&
        !hose &&
        !nozzle &&
        !cornet &&
        !piton &&
        !tires &&
        !label &&
        !lock &&
        !hose_holder &&
        !paint &&
        !instructions &&
        !clamping_handle &&
        !actuator &&
        !control_card &&
        !hydrostatic_test &&
        !recharge &&
        !visibility &&
        !signaling &&
        !access &&
        !hook,
      then: Yup.bool().required("debes seleccionar al menos un valor de la alerta."),
      otherwise: Yup.bool(),
    }
  ),
  priority: Yup.string().required("Debes escoger una prioridad"),
});
