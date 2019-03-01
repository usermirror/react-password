import * as React from 'react'
import { PasswordInput } from '../password-input'
import Transition from 'react-transition-group/Transition'
import { ListViewHeader } from './list-view-header'

export type SheetProps = {
  show: boolean
  title?: string
  image?: string
  subtitle?: string
  onCloseSheet?: () => void
}

let maskStyles: any = {
  entering: { opacity: 0, pointerEvents: 'auto' },
  entered: { opacity: 1, pointerEvents: 'auto' }
}

let sheetStyles: any = {
  entering: { opacity: 0, transform: 'translateX(100%)' },
  entered: { opacity: 1, transform: 'translateX(0)' }
}

export const Sheet: React.FunctionComponent<SheetProps> = ({
  show,
  onCloseSheet
}) => (
  <React.Fragment>
    <Transition in={show} timeout={300}>
      {state => (
        <div
          className="react-password-sheet-mask"
          style={{ ...maskStyles[state] }}
          onClick={onCloseSheet}
        />
      )}
    </Transition>
    <Transition in={show} timeout={300}>
      {state => (
        <div className="react-password-sheet" style={sheetStyles[state]}>
          <ListViewHeader
            title="Add a credential"
            actionText="Done"
            onActionClick={onCloseSheet}
          />
          <form
            className="react-password-sheet-content"
            onSubmit={e => e.preventDefault()}
          >
            <label className="react-password-input-label">Username</label>
            <input
              className="react-password-input"
              placeholder="Enter username"
              autoComplete="username"
            />
            <label className="react-password-input-label">Password</label>
            <div style={{ display: 'inline-block' }}>
              <PasswordInput
                placeholder="Enter password"
                autoComplete="new-password"
                className="react-password-input"
              />
            </div>
          </form>
        </div>
      )}
    </Transition>
  </React.Fragment>
)
