import React, { useEffect } from 'react';
import AmiiboInfo from '../../components/AmiiboInfo';
import Layout from '../../components/Layout';

const Detail = () =>{

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <AmiiboInfo />
        </Layout>
    )
} 

export default Detail;