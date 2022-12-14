import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const ActionBtn = styled.TouchableOpacity`
  margin-horizontal: ${({ theme }) => theme.space[1]};
  flex-direction: row;
  align-items: center;
`;

export const InfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NoListWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  max-width: 75%;
`;

export const ExtinguishersWrapper = styled.View`
  flex: 1;
  max-width: 400px;
  align-items: center;
  width: 100%;
`;

export const SpinnerWrapper = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.4);
  height: ${Dimensions.get("window").height}px;
  width: ${Dimensions.get("window").width}px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 50px;
  position: absolute;
  bottom: 10px;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
`;

export const CameraWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
`;

export const UploadPhotoButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ui.input};
  padding: ${({ theme }) => theme.space[3]};
  align-items: center;
  justify-content: center;
`;

export const TrackLocationWrapper = styled.View`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.ui.input};
  padding: ${({ theme }) => theme.space[3]};
  align-items: center;
  justify-content: center;
`;

export const ExtinguisherForm = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  max-width: 400px;
`;
