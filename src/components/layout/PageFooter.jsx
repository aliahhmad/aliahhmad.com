// Simple footer shared by the project and blog detail pages.
const PageFooter = () => {
    return (
        <footer className="w-full text-center sm:py-6 py-10 mb-10 text-base text-white opacity-50">
            &copy; {new Date().getFullYear()} Ali Ahmad · Built with React
        </footer>
    );
};

export default PageFooter;
