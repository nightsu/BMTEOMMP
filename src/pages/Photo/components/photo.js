import Zmage from 'react-zmage';

function Photo({url,title}) {
    return (
        <Zmage src={url} alt={title}>
        </Zmage>
    );

};

export default Photo;