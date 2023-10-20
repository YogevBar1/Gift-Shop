import "./PageNotFound.css";

function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
            <div className="error-container">
                <h2 className="error-text">Oops! Page Not Found</h2>
                <p className="error-message">
                    We're sorry, but the page you're looking for doesn't exist.
                </p>
                <p className="error-message">
                    You might want to check the URL or go back to the{" "}
                    <a href="/" className="error-link">
                        homepage
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default PageNotFound;
