import "./FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Chose your favourite destination.</p>              
                </div>
                <div>
                    <a href="/">
                    <i class="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-square-behance"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-square-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Changelog</a>
                    <a href="/">states</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Trobleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;