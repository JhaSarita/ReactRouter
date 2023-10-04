import MainNavigation from "../components/MainNavigation"

const ErrorPage = () => {
    return (
        <>
        <MainNavigation />
        <main>
            <h1 style={{color:'red'}}>An error occured !</h1>
            <p>This page does not exist !!</p>
        </main>
        </>
    )
};

export default ErrorPage;