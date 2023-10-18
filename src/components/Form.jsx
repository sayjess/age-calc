export default function Form() {
    return (
        <form>
            <div className="date-input-form">
                <div className="input-group">
                    <label htmlFor="day">Day</label>
                    <input
                        type="number"
                        id="day"
                        name="day"
                        min="1"
                        max="31"/>
                </div>

                <div className="input-group">
                    <label htmlFor="month">Month</label>
                    <input
                        type="number"
                        id="month"
                        name="month"
                        min="1"
                        max="12"/>
                </div>

                <div className="input-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        min="1900"
                        max="2099"/>
                </div>
            </div>
            <div className="button-container">
                <button type="submit"><img src="../../public/assets/icon-arrow.svg"/></button>

            </div>
        </form>
    )
}