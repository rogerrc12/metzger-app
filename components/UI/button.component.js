import { Button as RnButton } from "@rneui/themed";
import styled from "styled-components/native";

const defaultAttrs = (theme) => ({
  titleStyle: {
    fontFamily: theme.fonts.button,
    fontSize: 16,
  },
  containerStyle: {
    width: "100%",
    maxWidth: 400,
  },
});

const primary = (theme) => ({
  buttonStyle: {
    backgroundColor: theme.colors.buttons.primary,
    padding: 12,
    borderRadius: 10,
  },
});

const secondary = (theme) => ({
  buttonStyle: {
    backgroundColor: "transparent",
    borderColor: theme.colors.buttons.primary,
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
  },
  titleStyle: {
    color: theme.colors.buttons.primary,
    fontFamily: theme.fonts.button,
    fontSize: 16,
  },
});

const variants = {
  primary,
  secondary,
};

export const Button = styled(RnButton).attrs(({ theme, variant }) => {
  return {
    ...defaultAttrs(theme),
    ...variants[variant](theme),
  };
})``;

Button.defaultProps = {
  variant: "primary",
};
