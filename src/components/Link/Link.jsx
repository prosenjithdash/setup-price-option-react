
const Link = ({route}) => {
    return (
        <li className="mr-10" >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
// proptype use korar jonno install korte hobe.
// Link.proptypes = 

export default Link;