import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

const dice = 
[
    <FontAwesomeIcon className="Die" icon={faDiceOne} />,
    <FontAwesomeIcon className="Die" icon={faDiceTwo} />,
    <FontAwesomeIcon className="Die" icon={faDiceThree} />,
    <FontAwesomeIcon className="Die" icon={faDiceFour} />,
    <FontAwesomeIcon className="Die" icon={faDiceFive} />,
    <FontAwesomeIcon className="Die" icon={faDiceSix} />
]

export default dice;