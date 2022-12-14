export const validateExtinguisherValues = (values) => {
  let isValid = true;

  Object.entries(values).forEach((value) => {
    if (
      value[0] !== "control_card" &&
      value[0] !== "hydrostatic_test" &&
      value[0] !== "recharge" &&
      value[0] !== "visibility" &&
      value[0] !== "signaling" &&
      value[0] !== "access" &&
      value[0] !== "hook" &&
      value[0] !== "actions" &&
      value[0] !== "accessories"
    ) {
      if (value[1]) {
        isValid = true;
      } else isValid = false;
    }
  });

  return isValid;
};

export const validateControlValues = (values) => {
  let isValid = true;

  Object.entries(values).forEach((value) => {
    if (value[0] === "control_card" || value[0] === "hydrostatic_test" || value[0] === "recharge") {
      if (value[1]) {
        isValid = true;
      } else isValid = false;
    }
  });

  return isValid;
};

export const validateInstallationValues = (values) => {
  let isValid = true;

  Object.entries(values).forEach((value) => {
    if (value[0] === "visibility" || value[0] === "signaling" || value[0] === "access" || value[0] === "hook") {
      if (value[1]) {
        isValid = true;
      } else isValid = false;
    }
  });

  return isValid;
};
