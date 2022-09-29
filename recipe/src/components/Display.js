import "./Display.css"

const Display = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5,
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lemon-drizzle-loaf-cake-landscape-1567167558.jpg"
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4,
            url: "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg"
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3,
            url: "https://food-images.files.bbci.co.uk/food/recipes/earl_grey_tea_bread_48452_16x9.jpg"
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5,
            url: "https://www.biggerbolderbaking.com/wp-content/uploads/2015/03/BBB62-Carrot-Cake-Thumbnail-FINAL-.jpg"
        }
    ]

    const totalRating = cakes.reduce((total, curr) => total + curr.rating, 0)
    const averageRating = totalRating / cakes.length

    return (
        <>
            <section className="display">
                <h2>Welcome to the Bakery!</h2>
                <div className="display_cakes">
                    {cakes.map(cake => (
                        <div className="display_cake" key={cake.cakeName}>
                            <img src={cake.url}/>
                            <h3>{cake.cakeName}</h3>
                            <ul className="display_ingredients">
                                {cake.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <section className="avg_rating">
                <h3>Average rating: {averageRating}</h3>
            </section>
        </>
    )
}

export default Display