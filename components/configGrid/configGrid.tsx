import { GridProp } from '../../../../components/sharedComponents/adaptableGrid18/components/TypeDefinition'
import {
  GridOptions,
} from '@ag-grid-community/core'
import { AdaptableOptions } from '@adaptabletools/adaptable-react-aggrid'
import React, {  useRef } from 'react'
import { Box, Paper, useTheme } from '@mui/material'
import styles from '../../dataDictionary.module.scss'
import { ActionFormatter } from '../formatters/actionFormatter/actionFormatter'
import { OLD_DDMAPPINGFOREDITOR_DATA } from '../../data/demoData'

export function ConfigGrid() {
  // const [selectedRows, setSelectedRows] = useState([])
  const theme = useTheme()
  const gridRef = useRef({} as any)

  const adaptableOptions: AdaptableOptions = {
    adaptableId: 'adaptableId',
    primaryKey: 'Dictionary Col Name',
    predefinedConfig: {
      Dashboard: {
        IsCollapsed: true,
        Tabs: [{ Name: '', Toolbars: ['Layout'] }]
      }
    }
  }
  const gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true
    },
    singleClickEdit: true,
    rowSelection: 'multiple',
    suppressRowClickSelection: true,
    enableRangeSelection: true,
    rowStyle: {
      fontSize: '0.75rem',
      color: theme.palette.primary.darker ?? theme.palette.primary.dark
    },
    rowData: OLD_DDMAPPINGFOREDITOR_DATA.Table,
    columnDefs: [
      { field: 'Id', type: 'Number', hide: true },
      { field: 'MappingId', type: 'Number', hide: true },
      {
        field: 'Dictionary Col Name',
        headerName: ' Actual Column Name',
        type: 'abColDefString',
        minWidth: 190,
        maxWidth: 190,
        headerCheckboxSelection: true,
        checkboxSelection: true,
        pinned: true
      },
      {
        field: 'Dictionary Display Col Name',
        headerName: 'Display Col Name',
        type: 'abColDefString',
        minWidth: 190,
        maxWidth: 190,
        pinned: true,
        editable: true
      },
      {
        field: 'Column Data Type',
        headerName: 'Data Type',
        type: 'abColDefString',
        minWidth: 150,
        maxWidth: 150,
        editable: true,
        pinned: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: OLD_DDMAPPINGFOREDITOR_DATA.Table1.map((obj) => obj.dataType).sort()
        }
      },
      {
        field: 'Date Format',
        headerName: 'Date Format',
        type: 'abColDefString',
        minWidth: 130,
        maxWidth: 130,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['', 'MM/DD/YY', 'DD/MM/YY', 'YY/MM/DD', 'M/D/YY', 'YY/M/D']
        }
      },
      {
        field: 'Functional Category',
        headerName: 'Functional Category',
        type: 'abColDefString',
        minWidth: 150,
        maxWidth: 150,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: OLD_DDMAPPINGFOREDITOR_DATA.Table2.map((obj) => obj.category).sort()
        }
      },
      { field: 'Description', type: 'abColDefString', hide: true },
      { field: 'Mandatory', type: 'Boolean', hide: true },
      { field: 'Unique', type: 'Boolean', hide: true },
      { field: 'Primary', type: 'Boolean', hide: true },
      { field: 'PII', type: 'Boolean', hide: true },
      { field: 'Custom', type: 'Number', hide: true },
      {
        field: 'Actions',
        cellRenderer: ActionFormatter,
        headerName: 'Actions',
        type: 'abColDefString',
        minWidth: 200,
        maxWidth: 200
      },
      {
        field: 'Map Type',
        headerName: 'Map Type',
        type: 'abColDefString',
        minWidth: 130,
        maxWidth: 130,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['Security', 'Reference', 'Pass-Through']
        }
      },
      {
        field: 'Source Column',
        headerName: 'Source Column',
        type: 'abColDefString',
        minWidth: 190,
        maxWidth: 190,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: OLD_DDMAPPINGFOREDITOR_DATA.Table3.map((obj) => obj.name).sort()
        }
      },
      {
        field: 'Lookup Entity',
        headerName: 'Lookup Entity',
        type: 'abColDefString',
        minWidth: 135,
        maxWidth: 135,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: OLD_DDMAPPINGFOREDITOR_DATA.Table4.map((obj) => obj.name).sort()
        }
      },
      { field: 'Map Type Id', type: 'Number', hide: true },
      {
        field: 'Lookup Attribute',
        headerName: 'Lookup Attribute',
        type: 'abColDefString',
        minWidth: 130,
        maxWidth: 130
      },
      {
        field: 'Frequency',
        headerName: 'Frequency',
        type: 'abColDefString',
        minWidth: 130,
        maxWidth: 130,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: OLD_DDMAPPINGFOREDITOR_DATA.Table5.map(obj => obj.name).sort()
        }
      },
      { field: 'Lookup', type: 'Number', hide: true },
      { field: 'isUpdated', type: 'Number', hide: true },
      { field: 'isSelected', type: 'Number', hide: true }
    ],
    headerHeight: 22,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' }
      ]
    },
  }
  const gInfo: GridProp = {
    IdColumnName: 'DictionaryColumnName',
    RequireGridVariants: true,
    GridVariant: 'compact',
    UserId: 'AdaptableUser55',
    GridId: 'TestGrid',
    CurrentPageId: 'TestPage',
    ViewKey: 'TestPageView',
    ViewInfo: [
      {
        ColumName: 'DictionaryColumnName',
        DataType: 'string',
        DisplayName: 'Column Name'
      }
    ]
  }
  return (
    <React.Fragment>
      <Paper sx={{ height: '84.9vh' }} >
            <Box sx={{ width: '81vw', height: '100%' }} aria-label="configGrid">
              <AdaptableGrid
                GridProp={gInfo}
                gridOptions={gridOptions}
                adaptableOptions={adaptableOptions}
                ref={gridRef}
              />
            </Box>
      </Paper>
    </React.Fragment>
  )
}


