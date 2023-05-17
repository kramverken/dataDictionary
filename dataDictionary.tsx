import { Box } from '@mui/material'
import { ConfigGrid } from './components/configGrid/configGrid'

export function DataDictionary () {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <ConfigGrid/>
      </Box>
    </>
  )
}
