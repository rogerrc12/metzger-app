import WTooltip from "react-native-walkthrough-tooltip";

export const Tooltip = ({ content, visible, setVisible, children }) => {
  return (
    <WTooltip isVisible={visible} content={content} placement="top" onClose={setVisible}>
      {children}
    </WTooltip>
  );
};
