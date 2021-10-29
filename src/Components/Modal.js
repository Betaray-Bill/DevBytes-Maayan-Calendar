import React,{useState,  Fragment, useRef}  from 'react'
import { useRecoilState } from "recoil"
import { modalstate } from "../atoms/modalAtom"
import {Dialog, Transition } from  "@headlessui/react"
import "../Style/Modal.css"
import { CameraIcon } from "@heroicons/react/outline"
import { IoAddOutline } from "react-icons/io5";
import {db, storage} from "../firebase"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "@firebase/firestore"
import { ref, getDownloadURL, uploadString } from "@firebase/storage"
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars"

function Modal() {

    const [open, setopen] = useRecoilState(modalstate)
    const [selectedfile, setselectedfile] = useState(null)
    const [loading, setloading] = useState(false)   

    const filePicker = useRef(null)
    const captionRef = useRef(null)

    const addImageToPost = (e) => {

    }

    const uploadPost = async() => {

    }   


    return (
        <Transition.Root show={open} as={Fragment}>

            <Dialog
                as="div"
                // className="fixed z-50 inset-0 overflow-y-hidden"
                className="Modal"
                onClose={setopen}    
            >
                <div className="flex items-center justify-center min-h-[800px] 
                    sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                >
                    <Transition.Child
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-200"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay 
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition"
                        />
                    </Transition.Child>
                    <Transition.Child
                        as="div"
                        enter="ease-out duration-300 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-200  translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <div className="modal_box">
                        <div className="modal_img_section"
                            onClick={() => filePicker.current.click()}
                        >
                            <CameraIcon 
                                className="icon-camera"
                                aria-hidden="true"
                            />  
                        </div>
                        <Dialog.Title
                            as="h2"
                            className="upl_foto"
                        >
                            Upload a Photo
                        </Dialog.Title>

                        <div>
                            <DateTimePickerComponent placeholder="Choose a day for your event..."></DateTimePickerComponent>
                        </div>

                        <div className="upload_section">
                            <button
                                type="button"
                                disabled={selectedfile}
                                className="upload_btn"
                                onClick={uploadPost}
                            >
                                {loading ? "Uploading...." : "Upload Post"}                                      
                            </button>
                        </div>
                    </div>
                        
                        <div className="close" onClick={() => setopen(false)}>
                            <IoAddOutline className="rotate close-icon" />
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal
