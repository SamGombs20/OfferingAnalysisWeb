'use client'
import { useState } from "react";
import { WeeklyCollection } from "../types/global";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WeeklyCollectionSchema } from "../schemas/collections";
import { error } from "console";
import { getFieldsForCurrentStep } from "../utils/utils";

const CollectDataForm = () => {
    const [slide, setSlide] = useState(0);
    const {register,trigger, handleSubmit, formState:{errors}} = useForm<WeeklyCollection>({
        resolver:zodResolver(WeeklyCollectionSchema),
        mode:'onChange'
    })

    const moveToNext = () => {
        setSlide(slide + 1)
    }

    const moveToPrev = () => {
        setSlide(slide - 1)
    }
    const handleFormSubmit = (collections:WeeklyCollection) => {
        console.log("submitted")
    }
    const positiveClick = async() => {
        
        const isValid = await trigger(getFieldsForCurrentStep(slide))
        if (isValid && slide > 0) {
            handleSubmit(handleFormSubmit)
        }
        else if(isValid){
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
                    <input type="text" {...register('sundaySchool')} placeholder="Sunday School" className={`user-input ${errors.sundaySchool ? 'error-inp':''}`} />
                    {errors.sundaySchool && (<p className="error-txt">{errors.sundaySchool.message}</p>)}
                </div>
                <div className="input-div">
                    <input  type="text" {...register('building')} placeholder="Building" className={`user-input ${errors.building ? 'error-inp':''}`} />
                    {errors.building && (<p className="error-txt">{errors.building.message}</p>)}
                </div>
                <div className="input-div">
                    <input type="text" {...register('evangelism')} placeholder="Evangelism" className={`user-input ${errors.evangelism ? 'error-inp':''}`} />
                    {errors.evangelism && (<p className="error-txt">{errors.evangelism.message}</p>)}
                </div>
                <div className="input-div">
                    <input  type="text" {...register('others')} placeholder="Others" className={`user-input ${errors.others ? 'error-inp':''}`} />
                    {errors.others && (<p className="error-txt">{errors.others.message}</p>)}
                </div>
                <div className="input-div">
                    <input  type="text" {...register('cashCollections')} className={`user-input ${errors.cashCollections ? 'error-inp':''}`} placeholder="Cash Collections" />
                    {errors.cashCollections && (<p className="error-txt">{errors.cashCollections.message}</p>)}
                </div>
                <div className="input-div">
                    <input  type="text" {...register('bankCollections')} className={`user-input ${errors.bankCollections ? 'error-inp':''}`} placeholder="Bank Collections" />
                    {errors.bankCollections && (<p className="error-txt">{errors.bankCollections.message}</p>)}
                </div>
            </div>)}

            {slide == 1 && (
                <div>
                    <p className="text-2xl text-center font-[500]">Attendance</p>
                    <div className="input-div">
                        <input  type="text" {...register('adults')} className={`user-input ${errors.adults ? 'error-inp':''}`} placeholder="Adults" />
                        {errors.adults && (<p className="error-txt">{errors.adults.message}</p>)}
                    </div>
                    <div className="input-div">
                        <input  type="text"  {...register('children')} className={`user-input ${errors.children? 'error-inp':''}`} placeholder="Children" />
                        {errors.children && (<p className="error-txt">{errors.children.message}</p>)}
                    </div>


                    <div className="input-div">
                        <input  type="text" {...register('visitors')}  className={`user-input ${errors.visitors ? 'error-inp':''}`} placeholder="Visitors" />
                        {errors.visitors && (<p className="error-txt">{errors.visitors.message}</p>)}
                    </div>
                    <div className="input-div">
                        <input  type="text" {...register('newConverts')} className={`user-input ${errors.newConverts ? 'error-inp':''}`} placeholder="New Converts" />
                        {errors.newConverts && (<p className="error-txt">{errors.newConverts.message}</p>)}
                    </div>
                    <div className="input-div">
                        <input type="date" {...register('date')} className={`user-input ${errors.date ? 'error-inp':''}`} placeholder="Date" />
                        {errors.date && (<p className="error-txt">{errors.date.message}</p>)}
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