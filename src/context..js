import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "https://elym3zf4og.execute-api.us-east-1.amazonaws.com/development/tg-marketing-content-search?searchQuery=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("what is Azure?");
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
            
            const {references} = data;
            
            setGeneratedText(data['generated_text']);

            if(references){
                const newBooks = references.slice(0, 20).map((bookSingle) => {
                    const {text, title, video_url} = bookSingle;

                    return {
                        text: text,
                        title: title,
                        video_url: video_url
                    }
                });

                console.log(newBooks);

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Sources");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
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