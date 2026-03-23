'use client'
import { useState } from "react";

const CollectDataForm = () => {
    const[slide, setSlide] = useState(0);
    return (
        <div className="lg:w-xl">
            <form>
                {slide==0 &&(<div>
                    <p className="text-2xl text-center">Givings</p>
                    <div className="input-div">
                        <input type="number" placeholder="Tithes" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input type="number" placeholder="Offerings" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input type="number" placeholder="Sunday School" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input type="number" placeholder="Building" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input type="number" placeholder="Evangelism" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input type="number" placeholder="Others" className="user-input" />
                    </div>
                    <div className="input-div">
                        <input type="number" className="user-input" placeholder="Cash Collections" />
                    </div>
                    <div className="input-div">
                        <input type="number" className="user-input" placeholder="Bank Collections" />
                    </div>
                </div>)}

                {slide==1 && (
                    <div>
                    <p className="text-2xl text-center font-[500]">Attendance</p>
                    <div className="input-div">
                        <input type="number" className="user-input" placeholder="Adults" />
                    </div>
                    <div className="input-div">
                        <input type="number" className="user-input" placeholder="Children" />
                    </div>


                    <div className="input-div">
                        <input type="number" className="user-input" placeholder="Visitors" />
                    </div>
                    <div className="input-div">
                        <input type="number" className="user-input" placeholder="New Converts" />
                    </div>
                    <div className="input-div">
                        <input type="date" className="user-input" placeholder="Date" />
                    </div>
                </div>
                )}
            <div className="flex">
             <button className="transition-all duration-400 ease-in-out hover:bg-red-600 hover:text-white text-red-600 border rounded-xl py-1 px-4">{slide==0?"Close":"Back"}</button>
             <button></button>
            </div>
            </form>
        </div>
    )
}
export default CollectDataForm;