import React from 'react';
import PropTypes from 'prop-types';

import CharacteristicRate from './CharacteristicRate.jsx';

const CharacteristicsSubmit = ({characteristics, handleCharacteristicRate}) => (
  <>
    <div>
      {'*Characteristics: '}
    </div>
    {characteristics.map(characteristic => (
      <CharacteristicRate key={characteristic} characteristic={characteristic} handleCharacteristicRate={handleCharacteristicRate} />
    ))}
  </>
)

CharacteristicsSubmit.propTypes = {
  characteristics: PropTypes.arrayOf(PropTypes.string),
  handleCharacteristicRate: PropTypes.func.isRequired
}

CharacteristicsSubmit.defaultProps = {
  characteristics: []
}

export default CharacteristicsSubmit;