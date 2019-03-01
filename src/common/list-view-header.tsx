import * as React from 'react'

export type ListViewHeaderProps = {
  title?: string
  actionText?: string
  onActionClick?: (event: React.FormEvent) => void
}

export const ListViewHeader: React.FunctionComponent<ListViewHeaderProps> = ({
  title,
  actionText,
  onActionClick
}) => (
  <div className="react-password-list-view-header">
    <div className="react-password-list-view-header-title">{title}</div>
    {actionText && (
      <div
        className="react-password-list-view-header-action color--blue"
        onClick={onActionClick}
      >
        {actionText}
      </div>
    )}
  </div>
)
