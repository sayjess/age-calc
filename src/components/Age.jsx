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