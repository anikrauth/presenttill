import { createContext, FC, ReactNode, useState } from "react";

interface AppContextProps {
    setOpenSearchbar: (value: boolean) => void;
    openSearchbar: boolean;
}


const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
    const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);

    return (
        <>
            <AppContext.Provider value={{ setOpenSearchbar, openSearchbar }}>
                {children}
            </AppContext.Provider>
        </>
    );
};

export { ContextProvider, AppContext };