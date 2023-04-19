import { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection} from 'firebase/firestore';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {
    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const [users, setUsers] = useState([]);
    const [otherUsers, setOtherUsers] = useState([]);
    const [userSelect, setUserSelect] = useState([]);

    useEffect(() => {
        searchCollections("usuarios")
    }, [])

    useEffect(() => {
        searchOtherCollections("otrosUsuarios")
    }, [])



    const searchCollections = async (nameCollection) => {
        // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTAS COLECCIONES DE LA BASE DE DATOS.
        const collectionsData = await getDocs(query(collection(db, nameCollection)));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setUsers(collections);
    };

    const searchOtherCollections = async (nameCollection) => {
        // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTAS COLECCIONES DE LA BASE DE DATOS.
        const collectionsData = await getDocs(query(collection(db, nameCollection)));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        setOtherUsers(collections);
    };

    const collectionByParam = async (nameCollection, param, type) => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
        const dataFb = await getDocs(query(collection(db, nameCollection)));
        const data = await dataFb.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        const dataFilter = data.filter(obj => obj.id === param)
        setUserSelect(dataFilter[0])
        if (dataFilter.length === 0) {
            return false;
        } else {
            return true;
        }
    };


    return (
        <UseApiContext.Provider value={{
            collectionByParam,
            searchCollections,
            searchOtherCollections,
            setUserSelect,
            users,
            otherUsers,
            userSelect,
        }}>
            {children}
        </UseApiContext.Provider>
    );
};
