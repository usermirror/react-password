import * as React from 'react'
import cx from 'classnames'

const evaluatePassword = require('zxcvbn')

type PasswordInputProps = {
  type?: string
  readOnly?: boolean
  autoComplete?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput: React.FunctionComponent<
  PasswordInputProps & React.HTMLAttributes<HTMLInputElement>
> = ({
  type,
  readOnly,
  children,
  defaultValue,
  autoComplete,
  onChange: onChangeProp,
  ...unknownProps
}) => {
  let [inputValue, onInputValueChange] = React.useState(defaultValue || '')
  let onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let targetValue = event.target.value

    onInputValueChange(targetValue)

    if (onChangeProp) {
      event.persist()
      onChangeProp(event)
    }
  }

  React.useEffect(() => {
    onInputValueChange(defaultValue || '')

    return () => {}
  }, [defaultValue])

  let report = evaluatePassword(inputValue)
  let { score } = report

  let inputNode = (
    <input
      type={type || 'password'}
      value={inputValue}
      readOnly={readOnly}
      onChange={onChange}
      autoComplete={autoComplete}
      {...unknownProps}
    />
  )

  return (
    <React.Fragment>
      {children ? (
        <div>
          {inputNode}
          {children}
        </div>
      ) : (
        inputNode
      )}
      <PasswordStrengthIndicator strength={score} />
      {report.feedback &&
        (report.feedback.warning || report.feedback.suggestion) && (
          <small className="react-password-hint">
            Note: {report.feedback.warning || report.feedback.suggestion}.
          </small>
        )}
    </React.Fragment>
  )
}

export type PasswordStrengthIndicatorProps = {
  strength: number
}

export const PasswordStrengthIndicator: React.FunctionComponent<
  PasswordStrengthIndicatorProps
> = ({ strength: str }) => {
  let activeColorClass = getActiveColorClass(str)

  return (
    <div className="react-password-strength-indicator">
      <div
        className={cx(
          'react-password-strength-bar',
          str >= 1 && activeColorClass
        )}
      />
      <div
        className={cx(
          'react-password-strength-bar',
          str >= 2 && activeColorClass
        )}
      />
      <div
        className={cx(
          'react-password-strength-bar',
          str >= 3 && activeColorClass
        )}
      />
      <div
        className={cx(
          'react-password-strength-bar',
          str >= 4 && activeColorClass
        )}
      />
    </div>
  )
}

function getActiveColorClass(strength: number): string {
  switch (strength) {
    case 0:
      return ''
    case 1:
      return 'react-password-strength-bar--red'
    case 2:
      return 'react-password-strength-bar--yellow'
    case 3:
    case 4:
    default:
      return 'react-password-strength-bar--green'
  }
}
