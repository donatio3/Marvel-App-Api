import xMen from '../../resources/img/x-men.png';
import './singleComic.scss'
import { useState, useEffect } from "react";

import Spinner from '../spiner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from "../../services/MarvelService";
import {useParams, Link} from 'react-router-dom'


const SingleComicPage = () => {
    const {comicId} = useParams()
    const [comic, setComic] = useState(null)

    const {loading, error, getComic, clearError} = useMarvelService()

    useEffect(() => {
        updateComic();    
    }, [comicId])
    

    const updateComic = () => {
        clearError() // очищаем ошибку чтобы если была ошибка, можно было нажать на другого персонажа
       
        getComic(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic)
    }


    const loadingSpinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null
 
    return (
        <>
            {loadingSpinner}
            {errorMessage}
            {content}
        </>
    )
}

const View = ({comic}) => {
    
    const {thumbnail, title, description, pageCount, price, language} = comic

    return (
        <>
            <div className="single-comic">
                <img src={thumbnail} alt={title} className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pageCount}</p>
                    <p className="single-comic__descr">{language}</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to="/comics" className="single-comic__back">Back to all</Link>
            </div>
            

        </>
    )
}

export default SingleComicPage;