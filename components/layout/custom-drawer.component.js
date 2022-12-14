import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/auth/actions";

export const CustomDrawer = (props) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props} style={{ width: "100%" }}>
      <DrawerItemList {...props} />
      <DrawerItem label="Cerrar sesión" onPress={() => dispatch(logoutUser())} />
    </DrawerContentScrollView>
  );
};
