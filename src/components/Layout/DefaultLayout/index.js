import Header from './Header'
import SlideBar from './SilderBar'

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header></Header>
            <div className='container'>
                <SlideBar></SlideBar>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;