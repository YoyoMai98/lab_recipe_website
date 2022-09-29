import "./Form.css"

const Form = () => {
    return (
        <div className="submit_form">
            <h2>Submit your recipe here</h2>
            <div className="form_name">
                <form id="fn_form">
                    <label htmlFor="fname">First Name</label>
                    <br />
                    <input type="text" id="fn_inp"/>
                </form>
                <form id="ln_form">
                    <label htmlFor="lname">Last Name</label>
                    <br />
                    <input type="text" id="ln_inp"/>
                </form>
            </div>
            <div className="form_email">
                <form id="email">
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input type="text" id="email_inp"/>
                </form>
            </div>
            <div className="form_recipe">
                <form id="form_recipe_submit">
                    <label htmlFor="recipe">Submit Your Recipe</label>
                    <br />
                    <input type="text" id="recipe_inp" />
                </form>
            </div>
            <button id="submit_btn">Submit</button>
        </div>
    )
}

export default Form