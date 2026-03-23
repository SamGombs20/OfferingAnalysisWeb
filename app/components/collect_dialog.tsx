const CollectDataForm =()=>{
    return (
        <div className="lg:w-xl">
            <form>
                <div className="input-div">
                    <input className="user-input" placeholder="No. of adults"/>
                </div>
                <div className="input-div">
                    <input className="user-input" placeholder="No. of children" />
                </div>
                <div className="input-div">
                    <input className="user-input" placeholder="Cash Collections"/>
                </div>
                <div className="input-div">
                    <input className="user-input" placeholder="Bank Collections"/>
                </div>
                <div className="input-div">
                    <input className="user-input" placeholder="Date"/>
                </div>
            </form>
        </div>
    )
}
export default CollectDataForm;