import AppHeader from "../appHeader/AppHeader";
import { lazy, Suspense, useEffect } from "react";

import decoration from '../../resources/img/vision.png';

import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Spinner from "../spiner/Spinner";

const Page404 = lazy(() => import('../pages/404')) // загрузится когда
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicsPage'))


const App = () => {
        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                     
                    <Suspense fallback={<Spinner/>}>  
                        <Routes>
                            <Route element={<MainPage/>} path="/Marvel-App-Api"/>
                            <Route element={<ComicsPage/>} path="/comics"/>
                            <Route element={<SingleComicPage/>} path="/comics/:comicId"/>


                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                        

                        <img className="bg-decoration" src={decoration} alt="vision"/>
                    </main>
                    <h3 style={{marginTop: '40px'}}>"Data provided by Marvel. © 2014 Marvel"</h3>

                </div>

            </Router>
        )
    
   
}



export default App;

// import data from './data';
// import {useState, useMemo, useDeferredValue, useTransition} from 'react';

// function App() {
//     const [text, setText] = useState('');
//     const [posts, setPosts] = useState(data);
//     // const defferedValue = useDeferredValue(text) // CАМ РЕШАЕТ КОГДА РЕНДЕРИТЬ

//     const [isPending, startTransition] = useTransition()

//     const filteredPosts = useMemo(() => {
//         return posts.filter(item => item.name.toLowerCase().includes(text));
//     }, [text]);

//     const onValueChange = (e) => {
//         startTransition(() => {
//             setText(e.target.value);

//         })
//     }

//     return (
//         <>
//             <input value={text} type='text' onChange={onValueChange}/>

//             <hr/>

//             <div>
//                 {isPending ? <h2>LOADING</h2> : 
//                     filteredPosts.map(post => (
//                         <div key={post._id}>
//                             <h4>{post.name}</h4>
//                         </div>
//                     ))}
//             </div>
//         </>
//     );
// }

// export default App;
