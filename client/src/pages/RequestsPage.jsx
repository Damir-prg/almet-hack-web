import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header'
import Loader from '../components/UI/Loader/Loader'
import RequestInput from '../components/UI/RequestInput/RequestInput'
import RequestTextArea from '../components/UI/RequestTextArea/RequestTextArea'
import PostService from '../API/PostService'
import RequestPageFooter from '../components/RequestPageFooter';

const RequestsPage = () => {
    const [value, setValue] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false)

    const [type, setType] = React.useState('');
    const [name, setName] = React.useState('');
    const [preview, setPreview] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [place, setPlace] = React.useState('');
    const [price, setPrice] = React.useState('0');
    const [organization_name, setOrganization_name] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const [fName, setFname] = React.useState('');
    const [sName, setSname] = React.useState('');
    const [faName, setFaName] = React.useState('');

    const changeValue = event => {
        setValue(event.target.value);
        if (value === '2') {
            setPrice('0')
        }
    }

    const formSubmit = event => {
        event.preventDefault();
        const data = {
            type: type,
            name: name,
            preview: preview,
            description: description,
            full_name: `${fName} ${sName} ${faName}`,
            date: date,
            time: time,
            place: place,
            price: price,
            organization_name: organization_name,
            email: email,
            phone: phone
        }
        async function fetchData() {
            setIsLoading(true)
            const response = await PostService.postEventRequest(data);
            setIsLoading(false)
        }
        fetchData()
    }

    const toLink = () => {
        return <Link to='/events'>??????????</Link>
    }

    return (
        <div className='eventsList manrope'>
            <Header>{toLink()}</Header>
            <form className='formRequest' onSubmit={formSubmit}>
                <div className='contentForm'>
                    <div className='contentForm__header'>
                        <h1>???????????????????? ??????????????????????</h1>
                        <p>???? ?????????? ???????? ?????????????????? ???????????????? ?????????????????????????? ?????????????????????????? lorem ipsum, ?????????????? ???????????????? ?? ???????????????? ?????????? ???????????????????? ?????? ???????????????? ?????????????????? ???????? ??????????. ?? ?????????????? ???? lorem ipsum, ?????????? ???????? ???? ?????????????? ?????????? ???????????????? ?????????? ?????????? ???????????????????? ?????????????? ?? ?????????????? ???????????????????????? ?????????????? ?????????????????? ????????????.</p>
                    </div>
                    <div className='selfForm'>
                        <div className='selfInfo'>
                            <h3>???????????? ????????????????????:</h3>
                            <div className='fio'>
                                <RequestInput setValue={setFname} width={'300px'}>??????:</RequestInput>
                                <RequestInput setValue={setSname} width={'300px'}>??????????????:</RequestInput>
                                <RequestInput setValue={setFaName} width={'300px'}>????????????????:</RequestInput>
                            </div>
                            <div className='otherInfo'>
                                <RequestInput setValue={setEmail} width={'100%'} style={{ 'marginTop': '30px', 'marginBottom': '30px' }}>Email:</RequestInput>
                                <RequestInput setValue={setPhone} width={'100%'} style={{ 'marginBottom': '30px' }}>??????????????:</RequestInput>
                                <RequestInput setValue={setOrganization_name} width={'100%'} style={{ 'marginBottom': '30px' }}>???????????????? ???????????????? ?????? ??????????????????????:</RequestInput>
                            </div>
                        </div>
                    </div>
                    <div className='selfForm'>
                        <div className='selfInfo'>
                            <h3>???????????????????? ?? ??????????????????????:</h3>
                            <div className='otherInfo'>
                                <RequestInput setValue={setName} width={'100%'} style={{ 'marginBottom': '30px' }}>???????????????? ??????????????????????:</RequestInput>
                                <RequestInput setValue={setType} width={'100%'} style={{ 'marginBottom': '30px' }}>?????? ??????????????????????:</RequestInput>
                                <RequestTextArea setValue={setDescription} width={'100%'} height={'140px'}>???????????????? ??????????????????????:</RequestTextArea>
                                <RequestInput setValue={setPlace} width={'100%'} style={{ 'marginBottom': '30px' }}>??????????:</RequestInput>
                                <RequestPageFooter
                                    setDate={setDate}
                                    setPreview={setPreview}
                                    setPrice={setPrice}
                                    setTime={setTime}
                                    changeValue={changeValue}
                                    value={value}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='contentForm__header'>
                        <button>{isLoading ? <Loader /> : "???????????????????? ??????????????????????"}</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default RequestsPage;