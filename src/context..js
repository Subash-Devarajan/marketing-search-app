import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "https://elym3zf4og.execute-api.us-east-1.amazonaws.com/development/tg-marketing-content-search?searchQuery=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState(" ");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [generatedText, setGeneratedText] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const jsonString = await response.json();
            const data = JSON.parse(jsonString);

            console.log(data);
            
            const {references} = data;
            setBooks(data);
            
            setGeneratedText(data[0]['text']);

            
            console.log(books);
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle, generatedText
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};