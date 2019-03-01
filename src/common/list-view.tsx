import * as React from 'react'
import cx from 'classnames'
import { ListViewItemProps, ListViewItem } from './list-view-item'
import { ListViewHeaderProps, ListViewHeader } from './list-view-header'
import {
  ListViewSearch,
  ListViewSearchFacets,
  ListViewSearchProps
} from './list-view-search'

type ListViewProps = ListViewHeaderProps &
  ListViewSearchProps & {
    items: ListViewItemProps[]
    isFacetVisible?: boolean
    isAddSheetVisible?: boolean
    onActiveCredentialChange: (id: string) => void
    onToggleAddSheetVisibility: (visible: boolean) => void
  }

export const ListView: React.FunctionComponent<ListViewProps> = ({
  title,
  items,
  searchValue,
  isFacetVisible,
  onSearchFocusChange,
  onSearchValueChange,
  onActiveCredentialChange,
  onToggleAddSheetVisibility
}) => (
  <div className="react-password-list-view">
    <div
      className={cx(
        'react-password-list-view-search-header',
        isFacetVisible && 'facet-visible'
      )}
    >
      <ListViewHeader
        title={title}
        actionText="+ Add"
        onActionClick={() => onToggleAddSheetVisibility(true)}
      />
      <div className="react-password-list-view-search-layer">
        <ListViewSearch
          searchValue={searchValue}
          onSearchFocusChange={onSearchFocusChange}
          onSearchValueChange={onSearchValueChange}
        />
        <ListViewSearchFacets />
      </div>
    </div>
    <div className="react-password-list-view-scroller">
      {items.map((item, index) => (
        <ListViewItem
          key={index}
          id={item.id}
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
          onClick={() => onActiveCredentialChange(item.id)}
        />
      ))}
    </div>
  </div>
)
