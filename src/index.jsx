//Apartir da versao do 17 não é necessario mais importar react em todo arquivo
// import React from 'react';
import {render} from 'react-dom';
import {App} from './App'

//1 -O que eu quero renderizar
//2 - Qual elemento eu vou renderizar
// render(<h1>Test</h1>,document.getElementById('root'))
render(<App/>,document.getElementById('root'))