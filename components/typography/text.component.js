import styled from "styled-components/native";

const defaultStyles = (theme) => `
  font-family: ${theme.fonts.body};
  line-height: ${theme.lineHeights.copy};
  flex-wrap: wrap;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  font-size: ${theme.fontSizes.caption};
  color: ${theme.colors.text.error};
`;

const link = (theme) => `
  color: ${theme.colors.text.subtitle};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fontSizes.button};
  text-decoration-line: underline;
`;

const bold = (theme) => `
  font-family: ${theme.fonts.bold};
  font-size: ${theme.fontSizes.body};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
`;

const title = (theme) => `
font-size: ${theme.fontSizes.large};
font-family: ${theme.fonts.title};
color: ${theme.colors.text.title};
line-height: ${theme.lineHeights.title};
margin-vertical: ${theme.space[1]};
`;

const subtitle = (theme) => `
font-size: ${theme.fontSizes.title};
font-family: ${theme.fonts.title};
color: ${theme.colors.text.subtitle};
line-height: ${theme.lineHeights.title};
margin-vertical: ${theme.space[1]};
`;

const variants = {
  body,
  title,
  link,
  bold,
  subtitle,
  caption,
  error,
};

export const Text = styled.Text.attrs({
  allowFontScaling: false,
})`
  ${({ theme }) => defaultStyles(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
