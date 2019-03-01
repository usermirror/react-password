import * as React from 'react'

export type ListViewItemProps = {
  id: string
  title?: string
  image?: string
  subtitle?: string
  password?: string
  onClick?: (event: React.FormEvent) => void
}

export const ListViewItem: React.FunctionComponent<ListViewItemProps> = ({
  title,
  image,
  subtitle,
  onClick
}) => (
  <div className="react-password-list-view-item" onClick={onClick}>
    <div
      className="react-password-list-view-item-icon"
      style={{
        backgroundColor: image ? undefined : '#e8e8e8',
        backgroundImage: image && `url(${image})`
      }}
    />
    <div className="react-password-list-view-item-text">
      <div className="react-password-list-view-item-title">{title}</div>
      <div className="react-password-list-view-item-subtitle">{subtitle}</div>
    </div>
  </div>
)
