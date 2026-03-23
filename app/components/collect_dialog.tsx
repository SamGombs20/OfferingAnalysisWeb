const CollectDataForm = () => {
    return (
        <div className="lg:w-xl">
            <form>
                <div>
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
                </div>

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
            </form>
        </div>
    )
}
export default CollectDataForm;