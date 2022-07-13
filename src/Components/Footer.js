
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';
import img3 from '../images/img3.svg';
import img4 from '../images/img4.svg';


const Footer = () =>
{

    return(

        <>
        
            <div className="footer_section">
                <div className="container">
                    <div className="footer_content">
                        <ul>
                            <li>
                                <a href="">CHARACTERS:826</a>
                            </li>
                            <li>
                                <a href="">LOCATION:126</a>
                            </li>
                            <li>
                                <a href="">EPISODES:51</a>
                            </li>
                        </ul>
                    </div>
                    <div className="server">
                        <p>SERVER STATUS</p>
                    </div>
                    <div className="server_image">
                        <ul>
                            <li>
                                <a href="">
                                    <img src={img1} alt="" />
                                    <img src={img2} alt="" />
                                    <img src={img3} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="netlify">
                        <a href="">
                            <img src={img4} alt="" />
                        </a>
                    </div>
                    <div className="axel">
                        <p>
                            () by Axel Fuhrumann 2022
                        </p>
                    </div>
                </div>
            </div>

        </>

    )

}
export default Footer