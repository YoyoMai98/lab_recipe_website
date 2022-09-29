const Form = () => {
    return (
        <div className="form">
            <div className="form_name">
                <form id="fn_form">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fn_inp"/>
                </form>
                <form id="ln_form">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="ln_inp"/>
                </form>
            </div>
            <div className="form_email">
                <form id="email">
                    <label htmlFor="fname">Email</label>
                    <input type="text" id="email_inp"/>
                </form>
            </div>
            <div className="form_recipe">
                <form id="form_recipe_submit">
                    <label htmlFor="recipe">Submit Your Recipe</label>
                    <input type="text" id="recipe_inp" />
                </form>
            </div>
        </div>
    )
}

export default Form