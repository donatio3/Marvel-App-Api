import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Spinner from '../spiner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';


const CharList = (props) => {
    const [charList, setCharList] = useState([])
   
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(1000)

    const {loading, error, getAllCharacters} = useMarvelService()
    const myRef = React.createRef()

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }   

    const onCharListLoaded = (newCharList) => {
        // const {logger, secondLog} = await import('./someFunc')
        // logger();
        const endedCharList = newCharList.length > 0 ? false : true 
    
        setCharList(charList => [...charList, ...newCharList])
        setNewItemLoading(endedCharList)
        setOffset(offset => offset + 9)
    }
        

    
    const itemsRef = useRef([])

    const focusOnItem = (id) => {
        // Я реализовал вариант чуть сложнее, и с классом и с фокусом
        // Но в теории можно оставить только фокус, и его в стилях использовать вместо класса
        // На самом деле, решение с css-классом можно сделать, вынеся персонажа
        // в отдельный компонент. Но кода будет больше, появится новое состояние
        // и не факт, что мы выиграем по оптимизации за счет бОльшего кол-ва элементов
        // По возможности, не злоупотребляйте рефами, только в крайних случаях


        itemsRef.current.forEach(item => item.classList.remove('char__item_selected'));
        itemsRef.current[id].classList.add('char__item_selected');
        itemsRef.current[id].focus();
    }

    
    function renderItems(arr) {
        // console.log('LOAD LIST FROM RENDER', arr)
        
        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: { opacity: 1, visibility: 'visible'},
            entered:  { opacity: 1, visibility: 'visible'},
            exiting:  { opacity: 0, visibility: 'hidden'},
            exited:  { opacity: 0, visibility: 'hidden'},
        };

        const elements = arr.map((item, i) => {
            
            let imgStyle = {'objectFit': 'cover'}
            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                imgStyle = {'objectFit': 'contain'}
            }


            return (
                        <li tabIndex={0} 
                            key={item.id}
                            ref={el => itemsRef.current[i] = el} // в массив itemsRef складываем ссылки на элементы
                            className={"char__item"}
                            onClick={() => {
                                props.onCharSelected(item.id)
                                focusOnItem(i)
                            }}
                            >

                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <div className="char__name">{item.name}</div>
                        </li>
                    )
        })

        return (
            <ul className='char__grid'>
                {elements}
            </ul>
        )
    }

        const items = renderItems(charList)

        const loadingSpinner = loading && !newItemLoading ? <Spinner/> : null
        const errorMessage = error ? <ErrorMessage/> : null
        
        
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {loadingSpinner}
                    {items}
                </ul>

                <button disabled={newItemLoading} onClick={() => {
                    onRequest(offset, false)
                }} className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
}



export default CharList;