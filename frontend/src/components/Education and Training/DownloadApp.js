import { Container } from "@mui/material"
import QR_img from '../images/QR_Img.png'
import AppleIcon from '@mui/icons-material/Apple';
import Button from "@mui/material/Button";


const DownloadApp = () => {
    return (
        <div className="py-20">
            <Container>
                <div className="flex justify-between">
                    <div className="w-1/2 pr-20 py-10">
                        <h5 className="text-5xl font-bold text-gray-900 my-8">Download App</h5>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
                        <div className="border border-slate-400 rounded-[20px] mx-auto mt-8 py-10 px-16 ">
                            <div className="flex border-b border-slate-300 pb-12">
                                <img src={QR_img} alt="QR" className="" />
                                <h6 className="p-6 font-semibold text-xl">Scan QR code to install on your device</h6>
                            </div>
                            <div className="flex my-10 justify-evenly">
                                <Button
                                    variant="contained"
                                    sx={{ background: '#121212', padding: '0', borderRadius: '10px', textTransform: 'capitalize', textAlign: 'left' }}
                                    className="hover:bg-gray-800"
                                >
                                    <span className="text-white flex p-2">
                                        <AppleIcon fontSize="large" />
                                        <div className="my-[-10px] mx-1">
                                            <div className="text-[12px] text-gray-400 mb-[-5px] mt-[5px]">Download On The</div>
                                            <div className="font-semibold text-[16px]">Apple Store</div>
                                        </div>
                                    </span>
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{ background: '#121212', padding: '0', borderRadius: '10px', textTransform: 'capitalize', textAlign: 'left' }}
                                >
                                    <span className="text-white flex p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="component-iconify MuiBox-root css-1wl1iil iconify iconify--logos" width="0.91em" height="1em" viewBox="0 0 256 283" className="text-2xl my-2">
                                            <path fill="#EA4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934l-61.896-67.282Z"></path>
                                            <path fill="#FBBC04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537h.177Z"></path>
                                            <path fill="#4285F4" d="M1.06 23.487A30.565 30.565 0 0 0 0 31.61v219.327a32.333 32.333 0 0 0 1.06 8.124l122.555-120.966L1.06 23.487Z"></path>
                                            <path fill="#34A853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.847 32.847 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399l119.376 117.875Z"></path>
                                        </svg>
                                        <div className="my-[-10px] mx-2">
                                            <div className="text-[12px] text-gray-400 mb-[-5px] mt-[10px]">Download On The</div>
                                            <div className="font-semibold text-[16px]">Google Play</div>
                                        </div>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 py-20">
                        <img src="https://zone-ui.vercel.app/assets/images/course/course_download_app.png" alt="Dwonload" className="w-[90%] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default DownloadApp
