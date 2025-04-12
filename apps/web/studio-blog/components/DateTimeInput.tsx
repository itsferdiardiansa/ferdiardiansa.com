import {useCallback, useState} from 'react'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, {Dayjs} from 'dayjs'
import {set, unset, StringInputProps, useColorScheme} from 'sanity'
import {TextField, createTheme, ThemeProvider} from '@mui/material'

export const DateTimeInput = (props: StringInputProps) => {
  const {value, onChange, schemaType} = props

  const [open, setOpen] = useState(false)

  const handleChange = useCallback(
    (newValue: Dayjs | null) => {
      if (!newValue) {
        onChange(unset())
      } else {
        onChange(set(newValue.toISOString()))
      }
    },
    [onChange],
  )

  const {scheme} = useColorScheme()
  const theme = createTheme({
    palette: {
      mode: scheme === 'dark' ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label={schemaType.title}
          value={value ? dayjs(value) : null}
          onAccept={handleChange}
          closeOnSelect={false}
          minDateTime={dayjs().add(1, 'day')}
          format="DD MMM YYYY - HH:mm"
          open={open}
          onClose={() => setOpen(false)}
          slots={{
            textField: (params) => (
              <TextField
                {...params}
                fullWidth
                size="small"
                variant="outlined"
                onClick={() => setOpen(true)}
              />
            ),
          }}
          slotProps={{
            popper: {
              disablePortal: true,
              container: document.body,
              modifiers: [
                {name: 'offset', options: {offset: [0, 8]}},
                {name: 'preventOverflow', options: {boundary: 'viewport'}},
              ],
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}
