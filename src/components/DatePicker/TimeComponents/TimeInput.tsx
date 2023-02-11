import * as React from 'react'
import Icon from '../../Icon'

export interface Props {
  /** TimeInput onUp event */
  onUp: () => void
  /** TimeInput onDown event */
  onDown: () => void
  /** TimeInput onChange event */
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  /** TimeInput onBlur event */
  onBlur: (e: React.FormEvent<HTMLInputElement>) => void
  /** TimeInput value */
  value: number
}

const TimeInput: React.FunctionComponent<Props> = ({
  onUp,
  onDown,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <div className="time-input">
      <div className="time-input__up">
        <button onClick={onUp} type="button">
          <Icon icon="angles-up"></Icon>
        </button>
      </div>
      <div className="time-input__text">
        <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
      </div>
      <div className="time-input__down">
        <button onClick={onDown} type="button">
          <Icon icon="angles-down"></Icon>
        </button>
      </div>
    </div>
  )
}

TimeInput.defaultProps = {
  value: 0,
}

export default TimeInput
