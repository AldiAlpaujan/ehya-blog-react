import { createContext, useState } from "react";
import { childrenType } from "../utils/type";

interface ProviderValue {
    showMenu: boolean,
    setShowMenu: (value: boolean) => void,
}

const NavBarContext = createContext<ProviderValue | null>(null);

const NavBarContextProvider = (props: { children: childrenType }) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <NavBarContext.Provider value={{ showMenu, setShowMenu }}>
            {props.children}
        </NavBarContext.Provider>
    );
}

export { NavBarContext };
export default NavBarContextProvider;