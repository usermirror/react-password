import * as React from 'react'

type EmptyCredentialViewProps = {}

export const EmptyCredentialView: React.FunctionComponent<
  EmptyCredentialViewProps & React.HTMLAttributes<HTMLDivElement>
> = ({}) => {
  return (
    <div
      className="react-password-credential-view"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="react-password-credential-empty-view-text">
        Click "Add" to create a new credential or view existing passwords by
        clicking on a credential on the left.
      </div>
    </div>
  )
}
