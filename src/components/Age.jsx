import PropTypes from 'prop-types';

export default function Age({userData}) {
     return (
        <div className="age-container">
            <h2>
                <span className="num-col">{!userData.yearsDiffer ? '__' : userData.yearsDiffer}</span> years
            </h2>
            <h2>
                <span className="num-col">{ !userData.monthsDiffer ? '__' : userData.monthsDiffer}</span> months
            </h2>
            <h2>
                <span className="num-col">{ !userData.daysDiffer ? '__' : userData.daysDiffer}</span> days
            </h2>
        </div>
    )
}

Age.propTypes = {
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