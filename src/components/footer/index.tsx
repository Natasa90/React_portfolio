import './footer.style.css'

export const Footer = () => {
    return (
        <footer>
        <div className="social-links">
            <i className="fa fa-facebook-square" style={{ fontSize: '36px' }}></i>
            <i className="fa fa-instagram" style={{ fontSize: '36px' }}></i>
            <i className="fa fa-twitter" style={{ fontSize: '36px' }}></i>
            <i className="fa fa-linkedin-square" style={{ fontSize: '36px' }}></i>      
        </div>
        <div className="copyright">
            &copy; Natasa Stefanovic
        </div>
    </footer>
    );
};

   