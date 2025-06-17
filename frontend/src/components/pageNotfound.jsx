import React from "react";

const PageNotFound = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f8f9fa",
            textAlign: "center",
            animation: "fadeIn 1.5s ease-in-out",
        },
        heading: {
            fontSize: "6rem",
            color: "#54B435",
            margin: "0",
            animation: "bounce 1.5s infinite",
        },
        subheading: {
            fontSize: "1.5rem",
            color: "#6c757d",
            marginTop: "1rem",
        },
        button: {
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#54B435",
        },
        "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
            "40%": { transform: "translateY(-30px)" },
            "60%": { transform: "translateY(-15px)" },
        },
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.subheading}>Oops! The page you're looking for doesn't exist.
                <br />
                Or 
                <br />
                Our developers Are lazy and haven't built it yet.
            </p>
            <button
                style={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => (window.location.href = "/")}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default PageNotFound;