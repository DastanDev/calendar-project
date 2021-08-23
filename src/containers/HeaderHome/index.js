import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink
} from 'mdbreact';
import './styles.css';
import {withTranslation} from "react-i18next";

class HeaderHome extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            collapseID: '',
            photoIndex: 0,
            isOpen: false
        };

    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));


    render() {
        const { t } = this.props;

        return (
            <div id='HeaderHome'>
                <MDBNavbar dark expand='lg' fixed='top' scrolling transparent>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            <strong className='white-text'>MDB</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
                        <MDBCollapse
                            id='navbarCollapse'
                            isOpen={this.state.collapseID}
                            navbar
                        >
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to='/'>{t('topmenu.home')}</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='#work'>{t('topmenu.aboutus')}</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to='#work'>{t('topmenu.contactus')}</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink to='/login'>{t('topmenu.login')}</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem active>
                                    <MDBNavLink to='/register'>{t('topmenu.register')}</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </div>
        );
    }
}

export default withTranslation("common")(HeaderHome);
