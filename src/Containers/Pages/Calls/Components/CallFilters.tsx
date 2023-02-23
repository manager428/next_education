import React from 'react'

import map from 'lodash/map'

import { CallFilter } from 'Containers/Pages/Calls/styles'

import { CALL_ENUM, CALL_STATUS } from 'Constants/calls'

export function CallFilters({
  selectedTab,
  activeFilter,
  onFilterClick,
}: {
  selectedTab: string
  activeFilter: string
  onFilterClick: ({
    value,
    label,
    kind,
  }: {
    value: string
    label: string
    kind: string
  }) => void
}) {
  const renderFilters = () => {
    switch (selectedTab) {
      case CALL_ENUM.GROUP_CALLS:
        return map(
          [
            { label: 'All Group Calls', value: 'all', kind: 'callStatus' },
            {
              label: 'Scheduled Calls',
              value: 'scheduled',
              kind: 'callStatus',
            },
            {
              label: 'Finished Calls',
              value: 'finished',
              kind: 'callStatus',
            },
          ],
          filter => (
            <CallFilter
              isActive={activeFilter === filter.value}
              key={filter.value}
              onClick={() => onFilterClick(filter)}
            >
              {filter.label}
            </CallFilter>
          ),
        )

      case CALL_ENUM.FIELD_TRIPS:
        return map(
          [
            { label: 'All Field Trips', value: 'all', kind: 'callStatus' },
            {
              label: 'Scheduled Field Trips',
              value: 'scheduled',
              kind: 'callStatus',
            },
            {
              label: 'Finished Field Trips',
              value: 'finished',
              kind: 'callStatus',
            },
          ],
          filter => (
            <CallFilter
              isActive={activeFilter === filter.value}
              key={filter.value}
              onClick={() => onFilterClick(filter)}
            >
              {filter.label}
            </CallFilter>
          ),
        )

      case 'scheduled':
        return map(
          [
            { label: 'All Calls', value: 'scheduled', kind: 'callStatus' },
            {
              label: 'Group Calls',
              value: CALL_ENUM.GROUP_CALLS,
              kind: 'callType',
            },
            {
              label: 'Class Calls',
              value: CALL_ENUM.CLASS_CALLS,
              kind: 'callType',
            },
            {
              label: 'Individuals Calls',
              value: CALL_ENUM.INDIVIDUAL_CALLS,
              kind: 'callType',
            },
            {
              label: 'Finished Calls',
              value: CALL_STATUS.FINISHED,
              kind: 'callStatus',
            },
          ],
          filter => (
            <CallFilter
              isActive={activeFilter === filter.value}
              key={filter.value}
              onClick={() => onFilterClick(filter)}
            >
              {filter.label}
            </CallFilter>
          ),
        )

      default:
        return null
    }
  }

  return <>{renderFilters()}</>
}
