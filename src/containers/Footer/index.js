import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBFooter
} from 'mdbreact';
import './styles.css';
import {withTranslation} from "react-i18next";

class Footer extends React.Component {


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
        console.log(this.props);
        const { t } = this.props;
        //console.log("Test", t('welcome.title', {framework:'React'}))
        return (
            <div id='footer'>
                <MDBFooter className='pt-4 mt-4 text-center text-md-left'>
                    <MDBContainer>
                        <MDBRow className='mt-3 d-flex align-items-center'>
                            <MDBCol size='12' md='5'>
                                <p className='text-left grey-text'>
                                    {t('footer.copyright')}{' '}
                                    <a href={t('footer.url')}>
                                        <strong> {t('footer.ventse')}</strong>
                                    </a>
                                </p>
                            </MDBCol>

                            <div className='col-md-6 col-12'>
                                <div className='social-section'>
                                    <ul className='list-unstyled list-inline d-flex justify-content-end'>
                                        <li className='list-inline-item'>
                                            <MDBBtn
                                                tag='a'
                                                floating
                                                color=''
                                                className='rgba-white-slight'
                                            >
                                                <MDBIcon fab icon='facebook' />
                                            </MDBBtn>
                                        </li>
                                        <li className='list-inline-item'>
                                            <MDBBtn
                                                tag='a'
                                                floating
                                                color=''
                                                className='rgba-white-slight'
                                            >
                                                <MDBIcon fab icon='twitter' />
                                            </MDBBtn>
                                        </li>
                                        <li className='list-inline-item'>
                                            <MDBBtn
                                                tag='a'
                                                floating
                                                color=''
                                                className='rgba-white-slight'
                                            >
                                                <MDBIcon fab icon='google-plus' />
                                            </MDBBtn>
                                        </li>
                                        <li className='list-inline-item'>
                                            <MDBBtn
                                                tag='a'
                                                floating
                                                color=''
                                                className='rgba-white-slight'
                                            >
                                                <MDBIcon fab icon='linkedin' />
                                            </MDBBtn>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </div>
        );
    }
}

export default withTranslation("common")(Footer);
