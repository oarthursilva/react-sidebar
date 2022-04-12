// @ts-nocheck
import { useState } from "react";
import { SearchField } from "src/components/forms/SearchField";
import { Button } from "../Button";
import Divider from "../Divider";
import Logo from "../Logo";
import { SideMenuWrapper } from "./styles";

export default function SideMenu() {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <SideMenuWrapper.Menu
      collapse={collapse}
    >
      <SideMenuWrapper.Header
        collapse={collapse}
      >
        <Logo
          src="/images/logo.png"
          alt="raketenstart"
          margin="4px 14px"
          fullWidth={collapse} />

        <Button
          color="primary.main"
          icon="list"
          onClick={() => setCollapse(!collapse)}
          fullWidth={collapse}
        />
      </SideMenuWrapper.Header>

      {/* <SideMenuWrapper.Toggle>
      </SideMenuWrapper.Toggle> */}

      <SearchField
        placeholder='Search'
        hidden={collapse}
      />

      <Divider
        color="primary.main"
      />

    </SideMenuWrapper.Menu>
  );
}
