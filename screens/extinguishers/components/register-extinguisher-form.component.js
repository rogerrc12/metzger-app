import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { format, parse } from "date-fns";
import * as Location from "expo-location";
import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../api/axios";
import { Text } from "../../../components/typography/text.component";
import Accordion from "../../../components/UI/accordion.component";
import { Button } from "../../../components/UI/button.component";
import { Checkbox } from "../../../components/UI/checkbox.component";
import { DateInput } from "../../../components/UI/date-input.component";
import { Input } from "../../../components/UI/input.component";
import { PickerSelect } from "../../../components/UI/picker.component";
import { Spacer } from "../../../components/utils/spacer.component";
import { getSublocations } from "../../../services/catalogues/actions";
import { registerExtinguisher } from "../../../services/extinguishers/actions";
import { registerExtinguisherSchema } from "../validation/schemas";
import { TrackLocationWrapper, UploadPhotoButton } from "./extinguishers.styles";

const RegisterExtinguisherForm = ({ handleUploadPhoto, params, businessId, onOpenSettings }) => {
  const dispatch = useDispatch(),
    { locations, sublocations, types, brands, classes, capacities, agents } = useSelector((state) => state.catalogues),
    { isProcessing, verifiedQr } = useSelector((state) => state.extinguishers),
    [showGeneral, setShowGeneral] = useState(false),
    [showAspects, setShowAspects] = useState(false),
    [showAccesories, setShowAccesories] = useState(false),
    [showDates, setShowDates] = useState(false),
    [hasPermissions, setHasPermissions] = useState(null),
    [loading, setLoading] = useState(false),
    [currentLocation, setCurrentLocation] = useState(null);

  const formik = useFormik({
      initialValues: {
        qr_id: verifiedQr.id,
        location_id: "",
        sub_location_id: "",
        type_id: "",
        brand_id: "",
        serie: "",
        class_id: "",
        capacity_id: "",
        agent_id: "",
        hose: false,
        nozzle: false,
        cornet: false,
        piton: false,
        vehicle_bracket: false,
        hose_holder: false,
        manufacturing_date: "",
        is_manufacturing_date: false,
        hydrostatic_test_date: "",
        next_hydrostatic_test_date: "",
        inspection_date: "",
        next_inspection_date: "",
        recharge_date: "",
        next_recharge_date: "",
        photo: null,
        client_id: businessId,
        latitude: null,
        longitude: null,
      },
      validationSchema: registerExtinguisherSchema,
      enableReinitialize: true,
      onSubmit: (values) => dispatch(registerExtinguisher(values)),
    }),
    { class_id } = formik.values;

  const requestLocation = async () => {
    setLoading(true);

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermissions(status === "granted");

      if (status === "granted") {
        console.log({ status });

        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 5000, timeout: 5000 });
        formik.setFieldValue("latitude", location.coords.latitude);
        formik.setFieldValue("longitude", location.coords.longitude);

        let address = await Location.reverseGeocodeAsync(location.coords);
        setCurrentLocation(address[0]);
      }
    } catch (error) {
      console.log(error);
      setHasPermissions(false);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeLocation = (_, value) => {
    if (!value) return;

    formik.setFieldTouched("location_id", true);
    formik.setFieldValue("location_id", value);

    dispatch(getSublocations(value));
  };

  const handleSelect = (name, value) => {
    formik.setFieldTouched(name, true);
    formik.setFieldValue(name, value);
  };

  const handleManufacturingChangeDate = (_, date) => {
    if (!formik.values.is_manufacturing_date) formik.setFieldValue("manufacturing_date", date);
  };

  const handleChangeDate = useCallback(
    async (name, date) => {
      let formattedDate = format(date, "dd-MM-yyyy"),
        type = name === "hydrostatic_test_date" ? 3 : name === "inspection_date" ? 1 : 2;

      try {
        const response = await axios.get(`/v1/catalogues/dates?client_id=${businessId}&type=${type}&date=${formattedDate}&class_id=${class_id}`);

        let nexDate = parse(response.data.next_date, "dd-MM-yyyy", new Date());

        formik.setFieldValue(name, date);
        formik.setFieldValue(`next_${name}`, format(nexDate, "dd-MM-yyyy"));
      } catch (error) {
        console.log(error);
      }
    },
    [businessId, class_id]
  );

  useEffect(() => {
    if (params?.photo) {
      let base64Img = `data:image/jpg;base64,${params.photo.base64}`;
      formik.setFieldValue("photo", base64Img);
    }
  }, [params]);

  return (
    <>
      <Accordion title="Generalidades" show={showGeneral} toggleShow={() => setShowGeneral((prev) => !prev)}>
        <PickerSelect
          errorMessage={formik.errors.location_id}
          isError={formik.touched.location_id && formik.errors.location_id}
          options={locations.map((l) => ({ value: l.id, label: l.name }))}
          value={formik.values.location_id}
          placeholder="Ubicación"
          onChange={handleChangeLocation}
        />
        <PickerSelect
          options={sublocations.map((sub) => ({ value: sub.id, label: sub.name }))}
          value={formik.values.sub_location_id}
          placeholder="Sub ubicación"
          name="sub_location_id"
          onChange={handleSelect}
          disabled={sublocations.length <= 0}
        />
        <PickerSelect
          errorMessage={formik.errors.type_id}
          isError={formik.touched.type_id && formik.errors.type_id}
          options={types.map((type) => ({ value: type.id, label: type.name }))}
          name="type_id"
          placeholder="Tipo"
          value={formik.values.type_id}
          onChange={handleSelect}
        />
        <PickerSelect
          options={brands.map((data) => ({ value: data.id, label: data.name }))}
          name="brand_id"
          placeholder="Marca"
          errorMessage={formik.touched.brand_id && formik.errors.brand_id}
          isError={formik.touched.brand_id && formik.errors.brand_id}
          value={formik.values.brand_id}
          onChange={handleSelect}
        />
        <Input
          errorMessage={formik.touched.serie && formik.errors.serie}
          isError={formik.touched.serie && formik.errors.serie}
          placeholder="Serie"
          autoCapitalize="characters"
          value={formik.values.serie}
          onChangeText={formik.handleChange("serie")}
        />
      </Accordion>

      <Accordion title="Aspectos técnicos" show={showAspects} toggleShow={() => setShowAspects((prev) => !prev)}>
        <Input placeholder="Código QR" disabled value={verifiedQr.serial} label="Código QR" />
        <PickerSelect
          errorMessage={formik.touched.class_id && formik.errors.class_id}
          isError={formik.touched.class_id && formik.errors.class_id}
          options={classes.map((cl) => ({ value: cl.id, label: cl.name }))}
          placeholder="Clase"
          name="class_id"
          value={formik.values.class_id}
          onChange={handleSelect}
        />
        <PickerSelect
          errorMessage={formik.touched.capacity_id && formik.errors.capacity_id}
          isError={formik.touched.capacity_id && formik.errors.capacity_id}
          options={capacities.map((cap) => ({ value: cap.id, label: cap.name }))}
          placeholder="Capacidad"
          value={formik.values.capacity_id}
          onChange={handleSelect}
          name="capacity_id"
        />
        <PickerSelect
          errorMessage={formik.touched.agent_id && formik.errors.agent_id}
          isError={formik.touched.agent_id && formik.errors.agent_id}
          options={agents.map((agent) => ({ value: agent.id, label: agent.name }))}
          placeholder="Agente extintor"
          value={formik.values.agent_id}
          onChange={handleSelect}
          name="agent_id"
        />
      </Accordion>

      <Accordion title="Accesorios" show={showAccesories} toggleShow={() => setShowAccesories((prev) => !prev)}>
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
        <Checkbox checked={formik.values.vehicle_bracket} onChange={() => formik.setFieldValue("vehicle_bracket", !formik.values.vehicle_bracket)}>
          Bracket vehículo
        </Checkbox>
        <Checkbox checked={formik.values.hose_holder} onChange={() => formik.setFieldValue("hose_holder", !formik.values.hose_holder)}>
          Porta manguera
        </Checkbox>
      </Accordion>

      <Accordion title="Fechas claves" show={showDates} toggleShow={() => setShowDates((prev) => !prev)}>
        <DateInput
          placeholder="Fecha de fabricación"
          errorMessage={formik.touched.manufacturing_date && formik.errors.manufacturing_date}
          isError={formik.touched.manufacturing_date && formik.errors.manufacturing_date}
          disabled={formik.values.is_manufacturing_date}
          value={formik.values.manufacturing_date}
          onChange={handleManufacturingChangeDate.bind(this, "manufacturing_date")}
        />
        <View style={{ width: "100%", top: -5 }}>
          <Checkbox checked={formik.values.is_manufacturing_date} onChange={() => formik.setFieldValue("is_manufacturing_date", !formik.values.is_manufacturing_date)}>
            No aplica fecha de fabricación
          </Checkbox>
        </View>
        <DateInput
          placeholder="Selecciona"
          label="Fecha de prueba hidrostática"
          errorMessage={formik.touched.hydrostatic_test_date && formik.errors.hydrostatic_test_date}
          isError={formik.touched.hydrostatic_test_date && formik.errors.hydrostatic_test_date}
          value={formik.values.hydrostatic_test_date}
          onChange={handleChangeDate.bind(this, "hydrostatic_test_date")}
          disabled={!class_id}
        />
        <Input label="Próxima prueba hidrostática" disabled value={formik.values.next_hydrostatic_test_date} />
        <DateInput
          placeholder="Selecciona"
          label="Fecha de inspección"
          errorMessage={formik.touched.inspection_date && formik.errors.inspection_date}
          isError={formik.touched.inspection_date && formik.errors.inspection_date}
          value={formik.values.inspection_date}
          onChange={handleChangeDate.bind(this, "inspection_date")}
          disabled={!class_id}
        />
        <Input label="Próxima inspección" disabled value={formik.values.next_inspection_date} />
        <DateInput
          placeholder="Selecciona"
          label="Fecha de recarga"
          errorMessage={formik.touched.recharge_date && formik.errors.recharge_date}
          isError={formik.touched.recharge_date && formik.errors.recharge_date}
          value={formik.values.recharge_date}
          onChange={handleChangeDate.bind(this, "recharge_date")}
          disabled={!class_id}
        />
        <Input label="Próxima recarga" disabled value={formik.values.next_recharge_date} />
      </Accordion>

      <Spacer variant="top" size={2} />

      {params?.photo && <Image source={{ uri: params.photo.uri }} style={{ width: 160, height: 250 }} />}

      <Spacer variant="top" />

      <UploadPhotoButton onPress={handleUploadPhoto}>
        <Text>Foto del extintor</Text>
        <Spacer variant="top" />
        {params?.photo ? (
          <Text variant="link">Tomar de nuevo</Text>
        ) : (
          <>
            <AntDesign name="upload" size={20} color="#676767" />
            <Spacer variant="top" />
            <Text variant="link">Tomar fotografía</Text>
          </>
        )}
      </UploadPhotoButton>

      <Spacer variant="top" size={4} />

      <TrackLocationWrapper>
        <Text>Ubicación del extintor</Text>
        <Spacer variant="top" />
        {hasPermissions === false ? (
          <>
            <Text variant="caption" style={{ textAlign: "center" }}>
              Debes aceptar los permisos de ubicación en tu teléfono.
            </Text>
            <Spacer variant="top" />
            <TouchableOpacity onPress={onOpenSettings}>
              <Text variant="link">Ir a configuración</Text>
            </TouchableOpacity>
          </>
        ) : currentLocation ? (
          <Text variant="bold">{currentLocation.name}</Text>
        ) : loading ? (
          <ActivityIndicator size={20} />
        ) : (
          <>
            <MaterialIcons name="my-location" size={20} color="#676767" />
            <Spacer variant="top" />
            <TouchableOpacity onPress={requestLocation}>
              <Text variant="link">Obtener ubicación</Text>
            </TouchableOpacity>
          </>
        )}
      </TrackLocationWrapper>

      <Spacer variant="top" size={4} />

      <Button onPress={formik.handleSubmit} loading={isProcessing || loading} title="Registrar" disabled={!formik.isValid} />
    </>
  );
};

export default React.memo(RegisterExtinguisherForm);
