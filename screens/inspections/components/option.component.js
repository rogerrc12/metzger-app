import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Checkbox } from "../../../components/UI/checkbox.component";
import { Spacer } from "../../../components/utils/spacer.component";

const OptionsWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 180px;
  flex-direction: row;
`;

export const Option = ({ label, onChange, checked, value, error }) => {
  return (
    <>
      <Spacer variant="left">
        <Text variant="bold" style={{ color: error ? "#d9534f" : "#999" }}>
          {label}
        </Text>
      </Spacer>
      <OptionsWrapper>
        <Checkbox error={error} checked={checked === value} onChange={onChange.bind(null, value)}>
          {value}
        </Checkbox>
        <Checkbox
          error={error}
          checked={checked === (value.includes("tiempo") ? "vencido" : `no ${value}`)}
          onChange={onChange.bind(null, value.includes("tiempo") ? "vencido" : `no ${value}`)}
        >
          {value.includes("tiempo") ? "vencido" : `no ${value}`}
        </Checkbox>
      </OptionsWrapper>
    </>
  );
};
