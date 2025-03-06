import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Contact from '../../components/ContactUS/Contact'
import Footer from '../../components/Home/Footer'


const ContactUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactUs


// {/* <Typography variant='h3' fontSize={"24px"} fontWeight={"700"} color="primary">{data.city}</Typography>
//                                         <Typography variant='h4' fontSize={"20px"} fontWeight={"400"} color="primary">{data.street}</Typography>
//                                         <Typography variant='h5' fontSize={"16px"} fontWeight={"700"} color="primary">{data.no}</Typography>
//                                         <Typography variant='h5' fontSize={"16px"} fontWeight={"700"} color="primary">Phone : {data.mobileNo}</Typography>
//                                         <Typography variant='h5' fontSize={"16px"} fontWeight={"700"} color="primary">Fax : {data.fax}</Typography> */}