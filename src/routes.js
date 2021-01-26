import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Projects from './components/projects'
import ProjSkol from './pages/projects/projSkol'
import ProjRobby from './pages/projects/projRobby'
import ProjCacada from './pages/projects/projCacada';
import MiniMundo from './pages/projects/miniMundo'
import ProjFabBrahma from './pages/projects/projFabBrahma';
import ProjAraujo from './pages/projects/projAraujo';
export default function Routes () {
    return (
    <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/projects" exact component={Projects} />
        <Route path="/SkolHops" exact component={ProjSkol} />
        <Route path="/Robbyson_Land" exact component={ProjRobby} />    
        <Route path="/Cacada_Autentica" exact component={ProjCacada} /> 
        <Route path="/Mini_mundo_cnhi" exact component={MiniMundo} />
        <Route path="/Fabrica_Brahma_Extra" exact component={ProjFabBrahma} />
        <Route path="/Araujo_Venda_Mais" exact component={ProjAraujo} />
    </Switch>
    )};