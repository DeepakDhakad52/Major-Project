import React from "react";
import { Container } from "@mui/material"
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Link } from "react-router-dom";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import avtar from '../../images/learning.png'
import Payment from "./Payment";
import Order from "./Order";
import WishList from "./WishList";
import PersonalInfo from "./PersonalInfo";
import Voucher from "./Voucher";


const Profile = ({ setIsLoggedIn }) => {
    const [userData, setUserData] = React.useState({
        firstName: 'Deepak',
        lastName: 'Dhakad',
        email: 'dhakadd745@gmail.com',
        phone: '',
        gender: '',
        dob: '2001-08-15',
        zipCode: '',
        streetAddress: '',
        city: '',
        state: ''
    });

    const linkClass = "block p-3 rounded-lg text-gray-800 transition-all duration-300 hover:bg-slate-100 focus:text-orange-600"
    const [personalInfo, setPersonalInfo] = React.useState(true);
    const [wishlist, setwishlist] = React.useState(false);
    const [order, setOrder] = React.useState(false);
    const [voucher, setVoucher] = React.useState(false);
    const [payment, setPayment] = React.useState(false);

    const handlePersonClick = () => { setPersonalInfo(true); setOrder(false); setwishlist(false); setVoucher(false); setPayment(false); }
    const handleWishListClick = () => { setPersonalInfo(false); setwishlist(true); setOrder(false); setVoucher(false); setPayment(false); }
    const handleOrderClick = () => { setPersonalInfo(false); setwishlist(false); setOrder(true); setVoucher(false); setPayment(false); }
    const handleVoucherClick = () => { setPersonalInfo(false); setwishlist(false); setOrder(false); setVoucher(true); setPayment(false); }
    const handlePaymentClick = () => { setPersonalInfo(false); setwishlist(false); setOrder(false); setVoucher(false); setPayment(true); }

    return (
        <section>
            <Container>
                <h4 className="text-5xl text-slate-800 font-semibold my-10">Account</h4>
                <main className="flex justify-between my-10">
                    <div className="w-[25%]">
                        <aside className="border rounded-[20px] p-4">
                            <div className="border-b border-slate-300 border-dashed">
                                <div className="flex">
                                    <span className="w-[35%]">
                                        <img
                                            // src="https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg"
                                            src={avtar}
                                            alt="avtar"
                                            className="rounded-full p-3 "
                                        />
                                    </span>
                                    <span className="inline-block mt-8">
                                        <AlertDialogSlide />
                                    </span>
                                </div>
                                <h2 className="text-lg font-semibold text-gray-700 ml-2 mt-1">{userData.firstName + ' ' + userData.lastName}</h2>
                                <h2 className="text-gray-500 ml-2 mb-4">{userData.email}</h2>
                            </div>
                            <div className="mt-2 pb-2 border-b border-slate-300 border-dashed">
                                <Link className={linkClass} onClick={handlePersonClick}>
                                    <i className="fa-regular fa-user"></i>
                                    <span className="ml-4">Personal Info</span>
                                </Link>
                                <Link className={linkClass} onClick={handleWishListClick}>
                                    <i className="fa-regular fa-heart"></i>
                                    <span className="ml-4">Wishlist</span>
                                </Link>
                                <Link className={linkClass} onClick={handleVoucherClick}>
                                    <i className="fa-solid fa-rug"></i>
                                    <span className="ml-4">Vouchers</span>
                                </Link>
                                <Link className={linkClass} onClick={handleOrderClick}>
                                    <i className="fa-solid fa-list"></i>
                                    <span className="ml-4">Orders</span>
                                </Link>
                                <Link className={linkClass} onClick={handlePaymentClick}>
                                    <i className="fa-regular fa-credit-card"></i>
                                    <span className="ml-4">Payment</span>
                                </Link>
                            </div>
                            <Link className={`${linkClass} mt-2`} onClick={() => setIsLoggedIn(false)}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <span className="ml-2">Logout</span>
                            </Link>
                        </aside>
                    </div>
                    <aside className="w-[70%]">
                        {
                            personalInfo ? <PersonalInfo userData={userData} setUserData={setUserData} />
                                : (wishlist ? <WishList />
                                    : (order ? <Order />
                                        : (voucher ? <Voucher />
                                            : (payment ? <Payment />
                                                : null))))
                        }
                    </aside>
                </main>
            </Container>
        </section>
    )
}

export const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Link onClick={() => setOpen(true)} className="text-gray-600 font-semibold p-1 rounded-lg hover:shadow-md ">
                <CloudUploadOutlinedIcon fontSize="small" className="mb-[5px]" />{' '}
                <span className="inline-block ">Change Photo</span>
            </Link>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth={false}
                onClose={() => setOpen(false)}
                aria-describedby="alert-dialog-slide-description"
            >
                Drop Image
            </Dialog>
        </React.Fragment>
    );
}

export default Profile
