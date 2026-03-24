'use client'
import { ChangeEvent, useState } from "react";
import { WeeklyCollection } from "../types/global";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WeeklyCollectionSchema } from "../schemas/collections";

const CollectDataForm = () => {
    const [slide, setSlide] = useState(0);
    const {register, handleSubmit, formState:{errors}} = useForm<WeeklyCollection>({
        resolver:zodResolver(WeeklyCollectionSchema),
        mode:'onChange'
    })

    const moveToNext = () => {
        setSlide(slide + 1)
    }

    const moveToPrev = () => {
        setSlide(slide - 1)
    }
    const handleFormSubmit = () => {
        console.log("form submitted")
    }
    const positiveClick = () => {
        if (slide > 0) {
            handleFormSubmit()
        }
        else {
            moveToNext()
        }
    }
    const negativeClick = () => {
        if (slide == 0) {
            console.log('Close modal')
        }
        else {
            moveToPrev()
        }
    }
    return (
        <div className="lg:w-xl">

            {slide == 0 && (<div>
                <p className="text-2xl text-center">Givings</p>
                <div className="input-div">
                    <input {...register('tithes')} type="text" placeholder="Tithes" className={`user-input ${errors.tithes?.message? 'error-inp':''}`} />
                    {errors.tithes && (<p className="error-txt">{errors.tithes.message}</p>)}
                </div>
                <div className="input-div">
                    <input  type="text" {...register('offerings')} placeholder="Offerings" className={`user-input ${errors.offerings?'error-inp':''}`} />
                    {errors.offerings && (<p className="error-txt">{errors.offerings.message}</p>)}
                </div>
                <div className="input-div">
                    <input type="text" name="sundaySchool" placeholder="Sunday School" className="user-input" />
                </div>
                <div className="input-div">
                    <input  type="text" name="building" placeholder="Building" className="user-input" />
                </div>
                <div className="input-div">
                    <input type="text" name="evangelism" placeholder="Evangelism" className="user-input" />
                </div>
                <div className="input-div">
                    <input  type="text" name="others" placeholder="Others" className="user-input" />
                </div>
                <div className="input-div">
                    <input  type="text" name="cashCollections" className="user-input" placeholder="Cash Collections" />
                </div>
                <div className="input-div">
                    <input  type="text"  name="bankCollections" className="user-input" placeholder="Bank Collections" />
                </div>
            </div>)}

            {slide == 1 && (
                <div>
                    <p className="text-2xl text-center font-[500]">Attendance</p>
                    <div className="input-div">
                        <input  type="text" name="adults" className="user-input" placeholder="Adults" />
                    </div>
                    <div className="input-div">
                        <input  type="text"  name="children" className="user-input" placeholder="Children" />
                    </div>


                    <div className="input-div">
                        <input  type="text" name="visitors" className="user-input" placeholder="Visitors" />
                    </div>
                    <div className="input-div">
                        <input  type="text"  name="newConverts" className="user-input" placeholder="New Converts" />
                    </div>
                    <div className="input-div">
                        <input type="date" name="date" className="user-input" placeholder="Date" />
                    </div>
                </div>
            )}
            <div className="flex justify-end gap-10 mt-5">
                <button onClick={negativeClick} className="transition-all duration-400 ease-in-out hover:bg-red-600 hover:text-white text-red-600 border rounded-xl py-1 px-4">{slide == 0 ? "Close" : "Back"}</button>
                <button onClick={positiveClick} className="transition-all ease-in-out duration-400 text-white border border-blue-700 rounded-xl py-1 px-4  bg-blue-700 hover:bg-transparent hover:text-blue-700">{slide == 1 ? 'Submit' : 'Next'}</button>
            </div>
        </div>
    )
}
export default CollectDataForm;