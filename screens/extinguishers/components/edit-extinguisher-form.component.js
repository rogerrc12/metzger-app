import { format, parse } from "date-fns";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../api/axios";
import Accordion from "../../../components/UI/accordion.component";
import { Button } from "../../../components/UI/button.component";
import { Checkbox } from "../../../components/UI/checkbox.component";
import { DateInput } from "../../../components/UI/date-input.component";
import { Input } from "../../../components/UI/input.component";
import { PickerSelect } from "../../../components/UI/picker.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { getSublocations } from "../../../services/catalogues/actions";
import { editExtinguisher } from "../../../services/extinguishers/actions";
import { editExtinguisherSchema } from "../validation/schemas";

const EditExtinguisherForm = ({ businessId, extinguisherData }) => {
  const dispatch = useDispatch(),
    [showGeneral, setShowGeneral] = useState(false),
    [showAccesories, setShowAccesories] = useState(false),
    [showDates, setShowDates] = useState(false),
    { locations, sublocations, status, providers } = useSelector((state) => state.catalogues),
    { isProcessing } = useSelector((state) => state.extinguishers);

  const formik = useFormik({
    initialValues: {
      location_id: extinguisherData.locationId,
      sub_location_id: extinguisherData.subLocationId,
      hose: !!extinguisherData.hose,
      nozzle: !!extinguisherData.nozzle,
      cornet: !!extinguisherData.cornet,
      piton: !!extinguisherData.piton,
      vehicle_bracket: !!extinguisherData.vehicle_bracket,
      hose_holder: !!extinguisherData.hose_holder,
      hydrostatic_test_date: parse(extinguisherData.hydrostaticTestDate, "dd-MM-yyyy", new Date()),
      next_hydrostatic_test_date: extinguisherData.nextHydrostaticTestDate,
      recharge_date: parse(extinguisherData.rechargeDate, "dd-MM-yyyy", new Date()),
      next_recharge_date: extinguisherData.nextRechargeDate,
      status_id: extinguisherData.statusId,
      provider_id: extinguisherData.providerId || "",
    },
    enableReinitialize: true,
    validationSchema: editExtinguisherSchema,
    onSubmit: (values) => dispatch(editExtinguisher({ values, id: extinguisherData.id })),
  });

  const handleChangeLocation = (_, value) => {
      if (!value) return;

      formik.setFieldTouched("location_id", true);
      formik.setFieldValue("location_id", value);

      dispatch(getSublocations(value));
    },
    handleSelect = (name, value) => {
      formik.setFieldTouched(name, true);
      formik.setFieldValue(name, value);
    },
    handleChangeDate = async (name, date) => {
      let formattedDate = format(date, "dd-MM-yyyy"),
        type = name === "hydrostatic_test_date" ? 3 : name === "inspection_date" ? 1 : 2;

      try {
        const response = await axios.get(`/v1/catalogues/dates?client_id=${businessId}&type=${type}&date=${formattedDate}&class_id=${extinguisherData.classId}`);

        let nexDate = parse(response.data.next_date, "dd-MM-yyyy", new Date());

        formik.setFieldTouched(name, true);
        formik.setFieldValue(name, date);
        formik.setFieldValue(`next_${name}`, format(nexDate, "dd-MM-yyyy"));
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <Accordion title="Generalidades" show={showGeneral} toggleShow={() => setShowGeneral((prev) => !prev)}>
        <PickerSelect
          label="Ubicación"
          options={locations.map((l) => ({ value: l.id, label: l.name }))}
          errorMessage={formik.touched.location_id && formik.errors.location_id}
          isError={formik.touched.location_id && formik.errors.location_id}
          value={formik.values.location_id}
          onChange={handleChangeLocation}
        />
        <PickerSelect
          options={sublocations.map((sub) => ({ value: sub.id, label: sub.name }))}
          value={formik.values.sub_location_id}
          label="Sub ubicación"
          name="sub_location_id"
          onChange={handleSelect}
          disabled={sublocations.length <= 0}
        />
      </Accordion>

      <Accordion title="Fechas claves" show={showDates} toggleShow={() => setShowDates((prev) => !prev)}>
        <DateInput
          placeholder="Selecciona"
          errorMessage={formik.touched.hydrostatic_test_date && formik.errors.hydrostatic_test_date}
          isError={formik.touched.hydrostatic_test_date && formik.errors.hydrostatic_test_date}
          label="Fecha de prueba hidrostática"
          value={formik.values.hydrostatic_test_date}
          onChange={handleChangeDate.bind(this, "hydrostatic_test_date")}
        />
        <Input label="Próxima prueba hidrostática" disabled value={formik.values.next_hydrostatic_test_date} />
        <DateInput
          placeholder="Selecciona"
          label="Fecha de recarga"
          value={formik.values.recharge_date}
          errorMessage={formik.touched.recharge_date && formik.errors.recharge_date}
          isError={formik.touched.recharge_date && formik.errors.recharge_date}
          onChange={handleChangeDate.bind(this, "recharge_date")}
        />
        <Input label="Próxima recarga" disabled value={formik.values.next_recharge_date} />
      </Accordion>

      <Accordion title="Accesorios" show={showAccesories} toggleShow={() => setShowAccesories((prev) => !prev)}>
        <Spacer variant="top" size={2} />
        <Checkbox checked={formik.values.hose} onChange={() => formik.setFieldValue("hose", !formik.values.hose)}>
          Manguera
        </Checkbox>
        <Checkbox checked={formik.values.nozzle} onChange={() => formik.setFieldValue("nozzle", !formik.values.nozzle)}>
          Boquilla
        </Checkbox>
        {extinguisherData.typeId === 8 && (
          <>
            <Checkbox checked={formik.values.cornet} onChange={() => formik.setFieldValue("cornet", !formik.values.cornet)}>
              Corneta
            </Checkbox>
            <Checkbox checked={formik.values.piton} onChange={() => formik.setFieldValue("piton", !formik.values.piton)}>
              Pitón
            </Checkbox>
          </>
        )}
        <Checkbox checked={formik.values.vehicle_bracket} onChange={() => formik.setFieldValue("vehicle_bracket", !formik.values.vehicle_bracket)}>
          Bracket vehículo
        </Checkbox>
        <Checkbox checked={formik.values.hose_holder} onChange={() => formik.setFieldValue("hose_holder", !formik.values.hose_holder)}>
          Porta manguera
        </Checkbox>
      </Accordion>
      <Spacer variant="top" size={2} />
      <PickerSelect
        options={providers.map((p) => ({ value: p.id, label: p.name }))}
        placeholder="Sin proveedor"
        name="provider_id"
        errorMessage={formik.touched.provider_id && formik.errors.provider_id}
        isError={formik.touched.provider_id && formik.errors.provider_id}
        value={formik.values.provider_id}
        label="Proveedor"
        disabled={formik.values.status_id !== 76}
        onChange={handleSelect}
      />
      <PickerSelect
        options={status.map((s) => ({ value: s.id, label: s.name }))}
        errorMessage={formik.touched.status_id && formik.errors.status_id}
        isError={formik.touched.status_id && formik.errors.status_id}
        name="status_id"
        value={formik.values.status_id}
        label="Status"
        onChange={handleSelect}
      />
      <Spacer variant="top" size={5} />
      <Button onPress={formik.handleSubmit} loading={isProcessing} disabled={!formik.isValid} title="Editar extintor" />
    </>
  );
};

export default EditExtinguisherForm;
