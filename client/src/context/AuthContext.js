import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

// Başlangıç State Yazılır
const INITIAL_STATE = {
    user: {
        _id:"634d6e9b30d8a83cdfa986e2",
        username: "emin",
        email: "emin@gmail.com",
        profilePicture : "",
        coverPicture : "person/1.jpeg",
        city: "Antalya",
        from: "Turkey",
        relationship:1,
        followers:[],
        followings:[],
        isAdmin:false,
    },   // ilk etapta kullanıcı yok
    isFetching: false, // ilk etapta veri getirilmiyor
    error: false // ilk etapta herhangi bir hata yok
};



// context kurulumu 
export const AuthContext = createContext(INITIAL_STATE);


//Context kurulumu yapıldı ama bu context nasıl kullanılır
//buradaki children app.js
export const AuthContextProvider = ({children}) => {
    //Bu kısımda authreducer kullanılır authreducer'dan veriler burada tutuluyor
    //buradaki STATE reducer'daki state
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider 
        value={{ 
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    );
};