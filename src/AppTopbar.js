import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';

export class AppTopbar extends Component {

    static defaultProps = {
        onToggleMenu: null,
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired
    }
//pi pi-chevron-circle-left
    render() {
        return (
            <div className="layout-topbar clearfix">
                <button className="p-link layout-menu-button" onClick={this.props.onToggleMenu}>
                    {this.props.clicado ? (<span className="pi pi-chevron-circle-right"/>) : (<span className="pi pi-chevron-circle-left"/>)}
                </button>
                <div className="layout-topbar-icons">
                    <span className="layout-topbar-search">
                        <InputText type="text" placeholder="Search" />
                        <span className="layout-topbar-search-icon pi pi-search"/>
                    </span>
                    <button className="p-link" title="Ajuda">
                         <span className="layout-topbar-icon pi pi-question"/>
                        <span className="layout-topbar-item-text">Ajuda</span>
                    </button>
                    <button className="p-link" title="Notificações">
                        <span className="layout-topbar-item-text">Notificações</span>
                        <span className="layout-topbar-icon pi pi-bell"/>
                        <span className="layout-topbar-badge">5</span>
                    </button>
                    <button className="p-link" title="Gestor">
                        <span className="layout-topbar-item-text">Gestor</span>
                        <span className="layout-topbar-icon pi pi-user"/>
                    </button>
                    <button className="p-link" title="Sair">
                        <span className="layout-topbar-item-text">Sair</span>
                        <span className="layout-topbar-icon pi pi-power-off"/>
                    </button>
                </div>
            </div>
        );
    }
}