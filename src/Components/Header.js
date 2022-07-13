

import { Button } from 'react-bootstrap';


const Header = () =>
{

    return(

        <>
        
            <div className="header">
                <div>
                    <div className="header_section">
                        <div className="header_svg">
                            <a href="">
                                svg
                            </a>
                        </div>
                        <div className="header_content">
                            <ul>
                                <li>
                                    <a href="">docs</a>
                                </li>
                                <li>
                                    <a href="">about</a>
                                </li>
                                <li>
                                    <a href="">
                                    <Button variant="outline-warning">SUPPORT US</Button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    )

}
export default Header