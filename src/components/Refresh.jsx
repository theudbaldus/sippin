const Button = ({ text }) => {
    const refreshPage = () => {
        window.location.reload(false);
    };

    return (
        <button type="button" onClick={refreshPage} className="w-full md:w-fit text-base text-white bg-blue-500 px-8 py-2 rounded-full">
            {text}
        </button>
    );
};

export default Button;