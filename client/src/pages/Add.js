export default function Add() {
    return (
        <>
            <h1>Add Climb</h1>
             <form action="http://localhost:3000/add"  method="POST"> {/*action="http://localhost:3000/order"  method="POST" */}
                <div>
                    <label for="gradeInput">Climb Grade: </label>
                    <input name="climbDifficulty" id="gradeInput" placeholder="V0"></input>
                </div>

                <div>
                    <label for="dateInput">Climb Date: </label>
                    <input type="date" name="climbDate" id="dateInput"></input>
                </div>

                <div>
                    <label for="climbLocation">Climb Location: </label>
                    <input name="climbLocation" id="climbLocation"></input>
                </div>

                <div>
                    <label for="description">Climb Description: </label>
                    <input name="climbDescription" id="description"></input>
                </div>

                <div>
                    <button type="submit">Submit Climb</button>
                </div>
            </form>
        </>
    )
}