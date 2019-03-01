import * as React from 'react'

export type ListViewSearchProps = {
  searchValue: string
  onSearchFocusChange: (value: boolean) => void
  onSearchValueChange: (value: string) => void
}

export type ListViewSearchFacetsProps = {}

let SearchIcon: React.FunctionComponent = props => (
  <svg
    x="0px"
    y="0px"
    width={14}
    height={14}
    fill="#a9a9a9"
    xmlSpace="preserve"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    className="react-password-list-view-search-icon"
    {...props}
  >
    <path d="M93.5 88.622L65.954 61.078c4.279-5.763 6.842-12.881 6.842-20.61 0-19.133-15.511-34.648-34.648-34.648C19.013 5.82 3.5 21.335 3.5 40.468c0 19.135 15.513 34.648 34.648 34.648 7.715 0 14.813-2.55 20.572-6.813l27.55 27.548 7.23-7.229zm-55.352-20.8c-15.083 0-27.354-12.27-27.354-27.354 0-15.082 12.27-27.354 27.354-27.354s27.354 12.271 27.354 27.354c-.001 15.084-12.271 27.354-27.354 27.354" />
  </svg>
)

export const ListViewSearch: React.FunctionComponent<ListViewSearchProps> = ({
  searchValue,
  onSearchFocusChange,
  onSearchValueChange
}) => (
  <div className="react-password-list-view-search">
    <input
      value={searchValue}
      className="react-password-list-view-search-input"
      placeholder="Search for your passwords"
      onChange={e => onSearchValueChange(e.target.value)}
      onFocus={() => onSearchFocusChange(true)}
      onBlur={() => onSearchFocusChange(false)}
    />
    <SearchIcon />
    <div
      className="react-password-list-view-search-cancel color--blue"
      onClick={() => onSearchValueChange('')}
    >
      Cancel
    </div>
  </div>
)

export const ListViewSearchFacets: React.FunctionComponent<
  ListViewSearchFacetsProps
> = ({}) => (
  <div className="react-password-list-view-search-facets">
    <div className="react-password-list-view-search-facets-item">Everything</div>
    <div className="react-password-list-view-search-facets-item">Developer</div>
  </div>
)
