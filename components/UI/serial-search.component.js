import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../utils/spacer.component";

const ScanButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.buttons.secondary};
  border-radius: 10px;
  padding-vertical: ${({ theme }) => theme.space[2]};
  height: 55px;
  padding-horizontal: ${({ theme }) => theme.space[4]};
`;

const SearchInput = styled.TextInput`
  width: 100%;
  background-color: #f2f2f2;
  padding: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.body};
  height: 55px;
  color: #666;
  border-radius: 10px;
`;

const SearchInputWrapper = styled.View`
  flex: 1;
  position: relative;
`;

const SearchIcon = styled(MaterialIcons).attrs({
  size: 30,
  color: "#999",
})`
  position: absolute;
  right: 5px;
  top: 15%;
  padding: 5px;
  z-index: 10;
  elevation: 10;
`;

export const SerialSearch = ({ onSearch, onScan, searching, setSearching }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeText = (text) => setSearchTerm(text),
    handleSearch = () => {
      if (searchTerm.length > 5) {
        setSearching(true);
        onSearch(searchTerm);
      }
    },
    handleClearSearch = () => {
      setSearching(false);
      setSearchTerm("");
    };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <SearchInputWrapper>
        <SearchInput
          placeholder="Buscar por serie o código"
          placeholderTextColor="#777"
          value={searchTerm}
          onChangeText={handleChangeText}
          returnKeyLabel="Buscar"
          onSubmitEditing={handleSearch}
        />
        <SearchIcon onPress={searching ? handleClearSearch : undefined} name={searching ? "close" : "search"} />
      </SearchInputWrapper>
      <Spacer variant="left" />
      <ScanButton onPress={onScan}>
        <MaterialIcons name="qr-code-scanner" size={35} color="#FFF" />
      </ScanButton>
    </View>
  );
};
