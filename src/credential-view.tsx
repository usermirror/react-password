import * as React from 'react'
import { PasswordInput } from './password-input'

type CredentialViewProps = {
  image?: string
  title?: string
  password?: string
  subtitle?: string
}

export const CredentialView: React.FunctionComponent<
  CredentialViewProps & React.HTMLAttributes<HTMLDivElement>
> = ({ image, title, subtitle, password }) => {
  let timeouts: NodeJS.Timeout[] = []
  let [isPasswordVisible, setPasswordVisibility] = React.useState(false)
  let revealPassword = () => {
    setPasswordVisibility(true)

    timeouts.push(setTimeout(() => setPasswordVisibility(false), 1500))
  }

  React.useEffect(
    () => () => {
      setPasswordVisibility(false)
      timeouts.forEach(clearTimeout)
    },
    [password]
  )

  return (
    <div className="react-password-credential-view">
      <div className="react-password-credential-header">
        <div
          className="react-password-list-view-item-icon"
          style={{
            backgroundColor: image ? undefined : '#e8e8e8',
            backgroundImage: image && `url(${image})`
          }}
        />
        <div className="react-password-list-view-item-text">
          <div className="react-password-list-view-item-title">{title}</div>
          <div className="react-password-list-view-item-subtitle">
            {subtitle}
          </div>
        </div>
      </div>
      <div className="react-password-credential-content">
        <div className="react-password-credential-card">
          <label className="react-password-input-label">Username</label>
          <input
            className="react-password-input"
            placeholder="Enter username"
            defaultValue="fouad@usermirror.com"
            readOnly
          />
          <label className="react-password-input-label">Password</label>
          <div style={{ display: 'inline-block' }}>
            <PasswordInput
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Enter password"
              autoComplete="current-password"
              className="react-password-input"
              defaultValue={password}
              readOnly
            >
              <button
                className="react-password-button"
                onClick={() => revealPassword()}
                style={{ marginLeft: 8, verticalAlign: 'top' }}
              >
                Reveal
              </button>
            </PasswordInput>
          </div>
        </div>
      </div>
    </div>
  )
}
