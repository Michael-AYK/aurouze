import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ACCUEIL, SERVICES, PRODUITS, PRODUITSPRO, PANIER, QUISOMMESNOUS, MARQUES, FAQ, ENSAVOIRPLUS } from './CONSTANTS'
import Accueil from '../pages/Accueil'

const RouterConfigs = () => {
    return(
        <Switch>
            <Route exact path={ACCUEIL} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={SERVICES} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={PRODUITS} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={PRODUITSPRO} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={PANIER} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={QUISOMMESNOUS} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={MARQUES} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={FAQ} render={(routeProps) => <Accueil {...routeProps} />} />
            <Route exact path={ENSAVOIRPLUS} render={(routeProps) => <Accueil {...routeProps} />} />
        </Switch>
    )
}

export default RouterConfigs