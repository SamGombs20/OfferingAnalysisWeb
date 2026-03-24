'use client'
import { ChangeEvent, useState } from "react";
import { collectionInput } from "../types/global";

const CollectDataForm = () => {
    const[slide, setSlide] = useState(0);
    const [collections, setCollections] = useState<collectionInput>({
        tithes:'',
        offerings:'',
        sundaySchool:'',
        building:'',
        evangelism:'',
        others:'',
        cashCollections:'',
        bankCollections:'',
        adults:'',
        children:'',
        visitors:'',
        newConverts:'',
        date:''
    })

    const moveToNext =()=>{
        setSlide(slide+1)
    }
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value.replace(/\D/g, "").length>0){
            const {name, value} = e.target

        setCollections((prevCollections)=>({
            ...prevCollections,
            [name]:value
        }))
        }
    }
    const moveToPrev =()=>{
        setSlide(slide-1)
    }
    const handleFormSubmit =()=>{
        console.log("Form submitted")
    }
    const positiveClick = ()=>{
        if(slide>0){
            handleFormSubmit()
        }
        else{
            moveToNext()
        }
    }
    const negativeClick =()=>{
        if(slide==0){
            console.log('Close modal')
        }
        else{
            moveToPrev()
        }
    }
    return (
        <div className="lg:w-xl">
            
                {slide==0 &&(<div>
                    <p className="text-2xl text-center">Givings</p>
                    <div className="input-div">
                        <input onChange={onChange} value={collections.tithes} name="tithes" type="text" placeholder="Tithes" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.offerings} name="offerings" placeholder="Offerings" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.sundaySchool} name="sundaySchool" placeholder="Sunday School" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.building} name="building" placeholder="Building" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.evangelism} name="evangelism" placeholder="Evangelism" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.others} name="others" placeholder="Others" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.cashCollections} name="cashCollections" className="user-input" placeholder="Cash Collections" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.bankCollections} name="bankCollections" className="user-input" placeholder="Bank Collections" />
                    </div>
                </div>)}

                {slide==1 && (
                    <div>
                    <p className="text-2xl text-center font-[500]">Attendance</p>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.adults} name="adults" className="user-input" placeholder="Adults" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.children} name="children" className="user-input" placeholder="Children" />
                    </div>


                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.visitors} name="visitors" className="user-input" placeholder="Visitors" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="text" value={collections.newConverts} name="newConverts" className="user-input" placeholder="New Converts" />
                    </div>
                    <div className="input-div">
                        <input onChange={onChange} type="date" value={collections.date} name="date" className="user-input" placeholder="Date" />
                    </div>
                </div>
                )}
            <div className="flex justify-end gap-10 mt-5">
             <button onClick={negativeClick} className="transition-all duration-400 ease-in-out hover:bg-red-600 hover:text-white text-red-600 border rounded-xl py-1 px-4">{slide==0?"Close":"Back"}</button>
             <button onClick={positiveClick} className="transition-all ease-in-out duration-400 text-white border border-blue-700 rounded-xl py-1 px-4  bg-blue-700 hover:bg-transparent hover:text-blue-700">{slide==1?'Submit':'Next'}</button>
            </div>
        </div>
    )
}
export default CollectDataForm;