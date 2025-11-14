import React, { JSX, ReactElement } from 'react'
import { ImageProps } from 'next/image'
import { TaskDomainModel } from '@/modules/task/core/model/task.domain-model'
import { Card } from '@/ui/card'
import { IconType } from 'react-icons'
import { AvatarsListProps } from '@/ui/avatar'

type TaskProps = {
  logo: ReactElement<ImageProps>
  title: string
  category: string
  avatars?: ReactElement<AvatarsListProps>
  metadata?: TaskDomainModel.TaskMetadata[]
}

type TaskTileProps = {
  title: string
  subtitle: string
  icon: IconType
}

export const Task: React.FC<TaskProps> = ({ title, category, logo, avatars, metadata }: TaskProps): JSX.Element => {
  const hasMetadata = metadata && metadata.length > 0

  const renderMetadataValue = (item: TaskDomainModel.TaskMetadata): string => {
    if (item.key === TaskDomainModel.StatusMetadataKeys.PERCENTAGE) {
      return `${item.value}%`
    }
    if (item.key === TaskDomainModel.StatusMetadataKeys.DUE_DATE && item.value instanceof Date) {
      return item.value.toLocaleDateString()
    }
    return String(item.value)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-row gap-4">
          {logo}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>
        {avatars && avatars}
      </div>
      {hasMetadata && (
        <div className="flex flex-row justify-between gap-4">
          {metadata.map((item, index) => (
            <div key={index} className="flex flex-col">
              <p>{item.key}</p>
              <p>{renderMetadataValue(item)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const TaskTile: React.FC<TaskTileProps> = ({ icon: Icon, title, subtitle }: TaskTileProps): JSX.Element => {
  return (
    <Card>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <Icon className="rounded-full border border-gray-300 object-cover" />
            <div className="flex flex-col gap-1">
              <h6 className="font-bold">{title}</h6>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4"></div>
        </div>
        <div className="flex flex-col gap-4">fsfs</div>
      </div>
    </Card>
  )
}
