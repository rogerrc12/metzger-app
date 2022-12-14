import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../../components/UI/accordion.component";
import { Button } from "../../../components/UI/button.component";
import { Checkbox } from "../../../components/UI/checkbox.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { editInspection, registerInspection } from "../../../services/inspections/actions";
import { inspectionSchema } from "../validation/schemas";
import { Option } from "./option.component";

const InspectionForm = ({ extinguisherId, inspectionData }) => {
  const dispatch = useDispatch(),
    [showExtintor, setShowExtintor] = useState(false),
    [showControl, setShowControl] = useState(false),
    [showInstallation, setShowInstallation] = useState(false),
    [showActions, setShowActions] = useState(false),
    [showAccesories, setShowAccesories] = useState(false),
    [showActionOptions, setShowActionOptions] = useState(false);

  const { accessories, actions } = useSelector((state) => state.catalogues),
    isProcessing = useSelector((state) => state.inspections.isProcessing);

  const formik = useFormik({
    initialValues: {
      extinguisher_id: extinguisherId,
      internal_code: inspectionData.internalCode || "",
      qr_code: inspectionData.qrCode || "",
      pressure_gauge: inspectionData.pressureGauge || "",
      pressure_gauge_reading: inspectionData.pressureGaugeReading || "",
      determined_load_indicator: inspectionData.determinedLoadIndicator || "",
      hose: inspectionData.hose || "",
      nozzle: inspectionData.nozzle || "",
      cornet: inspectionData.cornet || "",
      piton: inspectionData.piton || "",
      tires: inspectionData.tires || "",
      label: inspectionData.label || "",
      lock: inspectionData.lock || "",
      hose_holder: inspectionData.hoseHolder || "",
      paint: inspectionData.paint || "",
      instructions: inspectionData.instructions || "",
      clamping_handle: inspectionData.clampingHandle || "",
      actuator: inspectionData.actuator || "",
      control_card: inspectionData.controlCard || "",
      hydrostatic_test: inspectionData.hydrostaticTest || "",
      recharge: inspectionData.recharge || "",
      visibility: inspectionData.visibility || "",
      signaling: inspectionData.signaling || "",
      access: inspectionData.access || "",
      hook: inspectionData.hook || "",
      actions: inspectionData.actions?.length > 0 ? inspectionData.actions.map((act) => act.id) : [],
      accessories: inspectionData.accessories?.length > 0 ? inspectionData.accessories.map((acc) => acc.id) : [],
    },
    enableReinitialize: true,
    validationSchema: inspectionSchema,
    onSubmit: (values) => (inspectionData.id ? dispatch(editInspection({ values, id: inspectionData.id })) : dispatch(registerInspection(values))),
  });

  useEffect(() => {
    let values = formik.values;
    let valuesArray = Object.values(values);

    if (valuesArray.find((v) => v === "no conforme" || v === "no legible" || v === "vencido")) {
      setShowActionOptions(true);
    } else setShowActionOptions(false);
  }, [formik.values]);

  const handleSelect = (name, value) => {
      formik.setFieldTouched(name, true);
      formik.setFieldValue(name, value);
    },
    handleActionsCheckbox = (_, value) => {
      let actionsValues = [...formik.values.actions];

      if (actionsValues.find((a) => a === value)) {
        actionsValues = actionsValues.filter((a) => a !== value);
      } else {
        actionsValues.push(value);
      }

      formik.setFieldValue("actions", actionsValues);
    },
    handleAcccesoriesCheckbox = (_, value) => {
      let accessoriesValues = [...formik.values.accessories];

      if (accessoriesValues.find((a) => a === value)) {
        accessoriesValues = accessoriesValues.filter((a) => a !== value);
      } else {
        accessoriesValues.push(value);
      }

      formik.setFieldValue("accessories", accessoriesValues);
    };

  return (
    <>
      <Accordion
        show={showExtintor}
        toggleShow={() => setShowExtintor((prev) => !prev)}
        title="Extintor"
        // isValid={formik.isValid || validateExtinguisherValues(formik.values)}
      >
        {!inspectionData.id && (
          <>
            <Option
              error={formik.touched.internal_code && formik.errors.internal_code}
              label="Código interno"
              checked={formik.values.internal_code}
              onChange={handleSelect.bind(null, "internal_code")}
              value="legible"
            />
            <Option
              error={formik.touched.qr_code && formik.errors.qr_code}
              label="Código QR"
              checked={formik.values.qr_code}
              onChange={handleSelect.bind(null, "qr_code")}
              value="legible"
            />
          </>
        )}
        <Option
          error={formik.touched.pressure_gauge && formik.errors.pressure_gauge}
          label="Manómetro"
          checked={formik.values.pressure_gauge}
          onChange={handleSelect.bind(null, "pressure_gauge")}
          value="conforme"
        />
        <Option
          error={formik.touched.pressure_gauge_reading && formik.errors.pressure_gauge_reading}
          label="Lectura manómetro"
          checked={formik.values.pressure_gauge_reading}
          onChange={handleSelect.bind(null, "pressure_gauge_reading")}
          value="conforme"
        />
        <Option
          error={formik.touched.determined_load_indicator && formik.errors.determined_load_indicator}
          label="Indicador de carga"
          checked={formik.values.determined_load_indicator}
          onChange={handleSelect.bind(null, "determined_load_indicator")}
          value="conforme"
        />
        <Option error={formik.touched.hose && formik.errors.hose} label="Manguera" checked={formik.values.hose} onChange={handleSelect.bind(null, "hose")} value="conforme" />
        <Option
          error={formik.touched.nozzle && formik.errors.nozzle}
          label="Boquilla"
          checked={formik.values.nozzle}
          onChange={handleSelect.bind(null, "nozzle")}
          value="conforme"
        />
        <Option
          error={formik.touched.cornet && formik.errors.cornet}
          label="Corneta"
          checked={formik.values.cornet}
          onChange={handleSelect.bind(null, "cornet")}
          value="conforme"
        />
        <Option error={formik.touched.piton && formik.errors.piton} label="Pitón" checked={formik.values.piton} onChange={handleSelect.bind(null, "piton")} value="conforme" />
        <Option error={formik.touched.tires && formik.errors.tires} n label="Llantas" checked={formik.values.tires} onChange={handleSelect.bind(null, "tires")} value="conforme" />
        <Option error={formik.touched.label && formik.errors.label} label="Marchamo" checked={formik.values.label} onChange={handleSelect.bind(null, "label")} value="conforme" />
        <Option error={formik.touched.lock && formik.errors.lock} label="Seguro" checked={formik.values.lock} onChange={handleSelect.bind(null, "lock")} value="conforme" />
        <Option
          error={formik.touched.hose_holder && formik.errors.hose_holder}
          label="Portamanguera"
          checked={formik.values.hose_holder}
          onChange={handleSelect.bind(null, "hose_holder")}
          value="conforme"
        />
        <Option error={formik.touched.paint && formik.errors.paint} label="Pintura" checked={formik.values.paint} onChange={handleSelect.bind(null, "paint")} value="conforme" />
        <Option
          error={formik.touched.instructions && formik.errors.instructions}
          label="Instrucciones"
          checked={formik.values.instructions}
          onChange={handleSelect.bind(null, "instructions")}
          value="legible"
        />
        <Option
          error={formik.touched.clamping_handle && formik.errors.clamping_handle}
          label="Manija de sujeción"
          checked={formik.values.clamping_handle}
          onChange={handleSelect.bind(null, "clamping_handle")}
          value="conforme"
        />
        <Option
          error={formik.touched.actuator && formik.errors.actuator}
          label="Accionador"
          checked={formik.values.actuator}
          onChange={handleSelect.bind(null, "actuator")}
          value="conforme"
        />
      </Accordion>

      <Accordion
        show={showControl}
        toggleShow={() => setShowControl((prev) => !prev)}
        title="Control"
        // isValid={formik.isValid || validateControlValues(formik.values)}
      >
        <Option
          error={formik.touched.control_card && formik.errors.control_card}
          label="Tarjeta de control"
          checked={formik.values.control_card}
          onChange={handleSelect.bind(null, "control_card")}
          value="legible"
        />
        <Option
          error={formik.touched.hydrostatic_test && formik.errors.hydrostatic_test}
          label="Prueba hidrostática"
          checked={formik.values.hydrostatic_test}
          onChange={handleSelect.bind(null, "hydrostatic_test")}
          value="en tiempo"
        />
        <Option
          error={formik.touched.recharge && formik.errors.recharge}
          label="Recarga"
          checked={formik.values.recharge}
          onChange={handleSelect.bind(null, "recharge")}
          value="en tiempo"
        />
      </Accordion>

      <Accordion
        show={showInstallation}
        toggleShow={() => setShowInstallation((prev) => !prev)}
        title="Instalaciones"
        // isValid={formik.isValid || validateInstallationValues(formik.values)}
      >
        <Option
          error={formik.touched.visibility && formik.errors.visibility}
          label="Visibilidad de extintor"
          checked={formik.values.visibility}
          onChange={handleSelect.bind(null, "visibility")}
          value="conforme"
        />
        <Option
          error={formik.touched.signaling && formik.errors.signaling}
          label="Señalización"
          checked={formik.values.signaling}
          onChange={handleSelect.bind(null, "signaling")}
          value="conforme"
        />
        <Option
          error={formik.touched.access && formik.errors.access}
          label="Acceso al extintor"
          checked={formik.values.access}
          onChange={handleSelect.bind(null, "access")}
          value="conforme"
        />
        <Option error={formik.touched.hook && formik.errors.hook} label="Gancho" checked={formik.values.hook} onChange={handleSelect.bind(null, "hook")} value="conforme" />
      </Accordion>

      {showActionOptions && (
        <Accordion
          show={showActions}
          toggleShow={() => setShowActions((prev) => !prev)}
          title="Acciones a planificar"
          // isValid
        >
          {actions.map((action) => (
            <Checkbox key={action.id} checked={formik.values.actions.find((a) => a === action.id)} onChange={() => handleActionsCheckbox("actions", action.id)}>
              {action.name}
            </Checkbox>
          ))}
        </Accordion>
      )}
      <Spacer variant="top" size={4} />
      {formik.values.actions.find((a) => a === 38) && (
        <Accordion
          show={showAccesories}
          toggleShow={() => setShowAccesories((prev) => !prev)}
          title="Accesorios"
          // isValid
        >
          {accessories.map((accessory) => (
            <Checkbox
              key={accessory.id}
              checked={formik.values.accessories.find((a) => a === accessory.id)}
              onChange={() => handleAcccesoriesCheckbox("accessories", accessory.id)}
            >
              {accessory.name}
            </Checkbox>
          ))}
        </Accordion>
      )}
      <Spacer variant="top" size={4} />
      <Button onPress={formik.handleSubmit} title={inspectionData.id ? "Editar" : "Registrar"} disabled={!formik.isValid} loading={isProcessing} />
    </>
  );
};

export default InspectionForm;
