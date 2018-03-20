/**
 * 
 * Общие требования:
 * При навигации между закладками, текущая закладка должна находить отображение в url приложения.
 * Например 'localhost/dummyTable' или 'localhost/dummyChart'
 * По умолчанию должна открыться первая закладка.
 *  Если в момент старта приложения, в url указана конкретная закладка необходимо сразу ее открыть.
 * Файл модуль закладки должен быть подгружен только когда необходим
 */

 // https://scotch.io/tutorials/lazy-loading-routes-in-react

 import React, { Component } from 'react'
 
 class List extends Component {
     render () {
         return (
             <div className="container">
                 <section className="section">
                     <div className="container">
                         <h1 className="title">Lazy Loading</h1>
                         <h2 className="subtitle">
                             A simple app to demonstrate how lazy loading routes in React works. List.
                         </h2>
                    </div>
                </section>

            </div>
        )
    }
}

export default List;