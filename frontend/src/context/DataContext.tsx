import { createContext, useState, FC, ReactNode } from 'react';


interface DataContextValue {
    data: any[],
    setData: (data: any) => void

}
interface DataProviderProps {
    children: ReactNode;
}
const DataContext = createContext<DataContextValue>({} as DataContextValue);

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<any[]>([]);


    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;