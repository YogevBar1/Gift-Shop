import "./Home.css";

import backgroundImage from "../../../Assets/Images/shopsImage.png";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>About us:</h2>

            <p>Welcome to Israel Shops! We're thrilled to invite you to explore a world of unique shopping experiences. Our passion for quality craftsmanship and exceptional service has driven us to curate a diverse collection of products that cater to your every need and desire.

                At Israel Shops, we believe that shopping is more than just a transaction – it's an experience. As you navigate our virtual aisles, you'll discover a handpicked selection of products, thoughtfully chosen to reflect the latest trends and timeless classics. Whether you're searching for that perfect item or looking to treat yourself to a little indulgence, we've got something special just for you.

                Our commitment to excellence extends beyond our products. We're dedicated to creating a seamless and enjoyable shopping journey for you. Our user-friendly website is designed to make your browsing effortless and your checkout process a breeze. Should you have any questions or need assistance, our friendly customer support team is always ready to help – just a click or call away.

                Thank you for choosing Israel Shops as your go-to destination for exceptional shopping. Join us on this exciting journey as we redefine the way you experience retail. Start exploring now and discover the possibilities that await.

                Happy shopping!

                The Israel Shops Team</p>


            <div className="image-container">
                <img
                    src= {backgroundImage} // Update the path to your image
                    alt="Welcome to Israel Shops"
                    className="home-image"
                />
            </div>
        </div>


    );
}

export default Home;
