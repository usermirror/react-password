import * as React from 'react'
import { ListView } from './common/list-view'
import { ListViewItemProps } from './common/list-view-item'
import { Sheet } from './common/sheet'
import { CredentialView } from './credential-view'
import { EmptyCredentialView } from './empty-credential-view'

let credentials: ListViewItemProps[] = [
  {
    id: '1',
    image: 'https://logo.clearbit.com/google.com',
    title: 'accounts.google.com',
    subtitle: 'Feb 14, 2019',
    password: 'rand0mstr1ng'
  },
  {
    id: '2',
    image: 'https://logo.clearbit.com/gusto.com',
    title: 'gusto.com',
    subtitle: 'Feb 14, 2019',
    password: 'b1gr3dh0rse'
  },
  {
    id: '3',
    image: 'https://logo.clearbit.com/usermirror.com',
    title: 'usermirror.com',
    subtitle: 'Feb 14, 2019',
    password: 's0methingp3oplew4nt'
  }
]

let lookupCredentialById: {
  [key: string]: ListViewItemProps
} = credentials.reduce(
  (a, b) => ({
    ...a,
    [b.id]: b
  }),
  {}
)

export const PasswordManager: React.FunctionComponent = ({ children }) => {
  let [searchValue, onSearchValueChange] = React.useState('')
  let [searchFocused, onSearchFocusChange] = React.useState(false)
  let [activeCredentialId, onActiveCredentialChange] = React.useState('')
  let [isAddSheetVisible, onToggleAddSheetVisibility] = React.useState(false)
  let isFacetVisible = searchFocused || searchValue.length > 0
  let visibleItems = searchValue
    ? filterItems(credentials, searchValue)
    : credentials

  let activeCredential = lookupCredentialById[activeCredentialId]

  return (
    <div className="react-password-manager">
      <ListView
        title="My Passwords"
        items={visibleItems}
        searchValue={searchValue}
        isFacetVisible={isFacetVisible}
        isAddSheetVisible={isAddSheetVisible}
        onSearchFocusChange={onSearchFocusChange}
        onSearchValueChange={onSearchValueChange}
        onActiveCredentialChange={onActiveCredentialChange}
        onToggleAddSheetVisibility={onToggleAddSheetVisibility}
      />
      {activeCredential ? (
        <CredentialView
          title={activeCredential.title}
          subtitle={activeCredential.subtitle}
          password={activeCredential.password}
          image={activeCredential.image}
        />
      ) : (
        <EmptyCredentialView />
      )}
      <Sheet
        show={isAddSheetVisible}
        onCloseSheet={() => onToggleAddSheetVisibility(false)}
      />
      {children}
    </div>
  )
}

function filterItems(items: ListViewItemProps[], searchValue: string) {
  return items.filter(item => {
    let title = item.title ? item.title.toLowerCase() : ''

    return title.includes(searchValue.toLowerCase())
  })
}
