

const CustomNavbar = ({items}) => {




    return (
        <div>
            
             <li><a className='md:text-3xl ' href={items.url}>{items.name}</a></li>
        </div>
    );
};

export default CustomNavbar;