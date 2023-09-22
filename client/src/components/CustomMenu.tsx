import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { LinkButton } from "./LinkButton";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type item = {
  title: string;
  url: string;
};
export type props = {
  title: string;
  items: item[];
};

export function CustomMenu(props: props) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal md:text-lg lg:text-xl"
        >
          {props.title}{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="w-[15rem] mt-12 rounded-xl overflow-visible outline-none shadow-md shadow-gray">
        <ul className="col-span-4 flex w-full flex-col outline-none">
          {props.items.map(({ title, url }) => {
            return (
              <LinkButton
                to={`${url}`}
                key={title}
                className="p-2 hover:bg-[#5F9EA0] hover:text-white border-b-[1px] ease-in duration-200"
              >
                <MenuItem>{title}</MenuItem>
              </LinkButton>
            );
          })}
        </ul>
      </MenuList>
    </Menu>
  );
}
