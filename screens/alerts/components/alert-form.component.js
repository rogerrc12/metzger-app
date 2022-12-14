import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../../components/UI/accordion.component";
import { Button } from "../../../components/UI/button.component";
import { Checkbox } from "../../../components/UI/checkbox.component";
import { PickerSelect } from "../../../components/UI/picker.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { createAlert, editAlert } from "../../../services/alerts/actions";
import { createAlertSchema } from "../validation/schemas";

const AlertForm = ({ extinguisherId, alertData }) => {
  const dispatch = useDispatch(),
    isProcessing = useSelector((state) => state.alerts.isProcessing),
    [showLegibles, setShowLegibles] = useState(false),
    [showCompliants, setShowCompliants] = useState(false),
    [showDefeated, setShowDefeated] = useState(false);

  const formik = useFormik({
    initialValues: {
      extinguisher_id: extinguisherId || "",
      internal_code: !!alertData?.internalCode,
      qr_code: !!alertData?.qrCode,
      pressure_gauge: !!alertData?.pressureGauge,
      pressure_gauge_reading: !!alertData?.pressureGaugeReading,
      determined_load_indicator: !!alertData?.determinedLoadIndicator,
      hose: !!alertData?.hose,
      nozzle: !!alertData?.nozzle,
      cornet: !!alertData?.cornet,
      piton: !!alertData?.piton,
      tires: !!alertData?.tires,
      label: !!alertData?.label,
      lock: !!alertData?.lock,
      hose_holder: !!alertData?.hoseHolder,
      paint: !!alertData?.paint,
      instructions: !!alertData?.instructions,
      clamping_handle: !!alertData?.clampingHandle,
      actuator: !!alertData?.actuator,
      control_card: !!alertData?.controlCard,
      hydrostatic_test: !!alertData?.hydrostaticTest,
      recharge: !!alertData?.recharge,
      visibility: !!alertData?.visibility,
      signaling: !!alertData?.signaling,
      access: !!alertData?.access,
      hook: !!alertData?.hook,
      priority: alertData?.priority.toLowerCase() || "",
    },
    validationSchema: createAlertSchema,
    onSubmit: (values) => (alertData ? dispatch(editAlert({ values, alertId: alertData.id })) : dispatch(createAlert(values))),
  });

  const priorityOptions = [
    { label: "Alta", value: "alta" },
    { label: "Media", value: "media" },
    { label: "Baja", value: "baja" },
  ];

  const onSelectChange = (name, value) => {
    formik.setFieldTouched(name, true);
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <Accordion show={showLegibles} toggleShow={() => setShowLegibles((prev) => !prev)} title="Partes no legibles:">
        <Checkbox checked={formik.values.internal_code} onChange={() => formik.setFieldValue("internal_code", !formik.values.internal_code)}>
          Código interno
        </Checkbox>
        <Checkbox checked={formik.values.qr_code} onChange={() => formik.setFieldValue("qr_code", !formik.values.qr_code)}>
          Código QR
        </Checkbox>
        <Checkbox checked={formik.values.instructions} onChange={() => formik.setFieldValue("instructions", !formik.values.instructions)}>
          Instrucciones
        </Checkbox>
        <Checkbox checked={formik.values.control_card} onChange={() => formik.setFieldValue("control_card", !formik.values.control_card)}>
          Tarjeta de control
        </Checkbox>
      </Accordion>

      <Accordion show={showCompliants} toggleShow={() => setShowCompliants((prev) => !prev)} title="Partes no conformes:">
        <Checkbox checked={formik.values.pressure_gauge} onChange={() => formik.setFieldValue("pressure_gauge", !formik.values.pressure_gauge)}>
          Manómetro
        </Checkbox>
        <Checkbox checked={formik.values.pressure_gauge_reading} onChange={() => formik.setFieldValue("pressure_gauge_reading", !formik.values.pressure_gauge_reading)}>
          Lectura manómetro
        </Checkbox>
        <Checkbox checked={formik.values.determined_load_indicator} onChange={() => formik.setFieldValue("determined_load_indicator", !formik.values.determined_load_indicator)}>
          Indicador de carga determinada
        </Checkbox>
        <Checkbox checked={formik.values.hose} onChange={() => formik.setFieldValue("hose", !formik.values.hose)}>
          Manguera
        </Checkbox>
        <Checkbox checked={formik.values.nozzle} onChange={() => formik.setFieldValue("nozzle", !formik.values.nozzle)}>
          Boquilla
        </Checkbox>
        <Checkbox checked={formik.values.cornet} onChange={() => formik.setFieldValue("cornet", !formik.values.cornet)}>
          Corneta
        </Checkbox>
        <Checkbox checked={formik.values.piton} onChange={() => formik.setFieldValue("piton", !formik.values.piton)}>
          Pitón
        </Checkbox>
        <Checkbox checked={formik.values.tires} onChange={() => formik.setFieldValue("tires", !formik.values.tires)}>
          Llantas
        </Checkbox>
        <Checkbox checked={formik.values.label} onChange={() => formik.setFieldValue("label", !formik.values.label)}>
          Marchamo
        </Checkbox>
        <Checkbox checked={formik.values.lock} onChange={() => formik.setFieldValue("lock", !formik.values.lock)}>
          Seguro
        </Checkbox>
        <Checkbox checked={formik.values.hose_holder} onChange={() => formik.setFieldValue("hose_holder", !formik.values.hose_holder)}>
          Portamanguera
        </Checkbox>
        <Checkbox checked={formik.values.paint} onChange={() => formik.setFieldValue("paint", !formik.values.paint)}>
          Pintura
        </Checkbox>
        <Checkbox checked={formik.values.clamping_handle} onChange={() => formik.setFieldValue("clamping_handle", !formik.values.clamping_handle)}>
          Manija de Sujeción
        </Checkbox>
        <Checkbox checked={formik.values.actuator} onChange={() => formik.setFieldValue("actuator", !formik.values.actuator)}>
          Accionador
        </Checkbox>
      </Accordion>

      <Accordion show={showDefeated} toggleShow={() => setShowDefeated((prev) => !prev)} title="Partes vencidas:">
        <Checkbox checked={formik.values.hydrostatic_test} onChange={() => formik.setFieldValue("hydrostatic_test", !formik.values.hydrostatic_test)}>
          Prueba hidrostática
        </Checkbox>
        <Checkbox checked={formik.values.recharge} onChange={() => formik.setFieldValue("recharge", !formik.values.recharge)}>
          Recarga
        </Checkbox>
      </Accordion>

      <Spacer variant="top" size={2} />

      <PickerSelect
        label="Priodridad"
        placeholder="Selecciona una prioridad"
        value={formik.values.priority}
        options={priorityOptions}
        name="priority"
        onChange={onSelectChange}
        errorMessage={formik.errors.priority}
        isError={formik.touched.priority && formik.errors.priority}
      />
      <Spacer variant="top" size={2} />
      <Button title={alertData ? "Editar alerta" : "Crear alerta"} onPress={formik.handleSubmit} loading={isProcessing} disabled={!formik.isValid} />
    </>
  );
};

export default AlertForm;
