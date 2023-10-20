import PropTypes from 'prop-types';


export default function Form({updateData, userData, setData}) {

    function handleSubmit(e) {
        e.preventDefault();
        if(userData.day && userData.month && userData.year) {
            console.log('inside if elese statement')
            const userDay = userData.day;
            const userMonth = userData.month - 1; // Adjust for 0-based month
            const userYear = userData.year;
            
            // Construct user input date
            const dob = new Date(userYear, userMonth, userDay);
            // Get the current date
            const currentDate = new Date();
            // Calculate the difference in years
            const age = currentDate.getFullYear() - dob.getFullYear();
            // Calculate the difference in months and days
            const currentMonth = currentDate.getMonth();
            const birthMonth = dob.getMonth();
            let monthsRemaining = currentMonth - birthMonth;
            if (monthsRemaining < 0) {
                monthsRemaining += 12; // Adjust for negative months
            }
            const currentDay = currentDate.getDate();
            const birthDay = dob.getDate();
            let daysRemaining = currentDay - birthDay;
            
            if (daysRemaining < 0) {
                const lastDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();
                daysRemaining = lastDayOfMonth - birthDay + currentDay;
                monthsRemaining--; // Subtract a month if days are negative
                
                
            }

            setData(data => ({
                ...data,
                formSubmitted: true,
                daysDiffer: daysRemaining,
                monthsDiffer: monthsRemaining,
                yearsDiffer: age
            }))

            
        }
        
    }




    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className="date-input-form">
                <div className="input-group">
                    <label htmlFor="day">Day</label>
                    <input
                        type="number"
                        placeholder="DD"
                        value={userData.day}
                        onChange={updateData}
                        id="day"
                        name="day"
                        min="1"
                        max="31"/>
                    {userData.formSubmitted && !userData.day && (
                        <p className="required-prompt">This field is required</p>
                    )}
                </div>

                <div className="input-group">
                    <label htmlFor="month">Month</label>
                    <input
                        type="number"
                        placeholder="MM"
                        value={userData.month}
                        onChange={updateData}
                        id="month"
                        name="month"
                        min="1"
                        max="12"/>
                    {userData.formSubmitted && !userData.month && (
                        <p className="required-prompt">This field is required</p>
                    )}
                </div>

                <div className="input-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        placeholder="YYYY"
                        value={userData.year}
                        onChange={updateData}
                        id="year"
                        name="year"
                        min="1900"
                        max="2099"/>
                    {userData.formSubmitted && !userData.year && (
                        <p className="required-prompt">This field is required</p>
                    )}
                </div>
            </div>
            <div className="button-container">
                <button type="submit"><img src="../../public/assets/icon-arrow.svg"/></button>
            </div>
        </form>
    )

}

Form.propTypes = {
    updateData: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    userData: PropTypes.shape({
        day: PropTypes.string.isRequired,
        month: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        formSubmitted: PropTypes.bool.isRequired,
        daysDiffer: PropTypes.number.isRequired,
        monthsDiffer: PropTypes.number.isRequired,
        yearsDiffer: PropTypes.number.isRequired,
      }).isRequired,
}