"use client"

import { Box, DatePicker, HStack, IconButton, Portal } from "@chakra-ui/react"
import { LuCalendar, LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu"

export const DatePickerBasic = () => {
  return (
    <DatePicker.Root>
      <DatePicker.Label>Pick a Date</DatePicker.Label>

      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger asChild>
          <IconButton
            aria-label="Open calendar"
            variant="ghost"
            size="sm"
            color="fg.muted"
          >
            <LuCalendar />
          </IconButton>
        </DatePicker.Trigger>
        <DatePicker.ClearTrigger asChild>
          <IconButton
            aria-label="Clear date"
            variant="ghost"
            size="sm"
            color="fg.muted"
          >
            <LuX />
          </IconButton>
        </DatePicker.ClearTrigger>
      </DatePicker.Control>

      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content
            borderWidth="1px"
            borderRadius="xl"
            p={3}
            bg="bg.surface"
            borderColor="border"
            boxShadow="md"
          >
            <HStack justify="space-between" mb={3}>
              <DatePicker.MonthSelect />
              <DatePicker.YearSelect />
            </HStack>
            <DatePicker.View view="day">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl mb={2}>
                      <DatePicker.PrevTrigger asChild>
                        <IconButton
                          aria-label="Previous month"
                          size="sm"
                          variant="ghost"
                          color="fg.muted"
                          _hover={{ bg: "bg.subtle" }}
                        >
                          <LuChevronLeft />
                        </IconButton>
                      </DatePicker.PrevTrigger>

                      <DatePicker.ViewTrigger>
                        <Box fontWeight="medium" color="fg">
                          <DatePicker.RangeText />
                        </Box>
                      </DatePicker.ViewTrigger>

                      <DatePicker.NextTrigger asChild>
                        <IconButton
                          aria-label="Next month"
                          size="sm"
                          variant="ghost"
                          color="fg.muted"
                          _hover={{ bg: "bg.subtle" }}
                        >
                          <LuChevronRight />
                        </IconButton>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader
                              key={id}
                              color="fg.muted"
                              fontWeight="semibold"
                              textAlign="center"
                            >
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>

                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger
                                  textAlign="center"
                                  rounded="md"
                                  _hover={{
                                    bg: "bg.subtle",
                                  }}
                                  _selected={{
                                    bg: "accent",
                                    color: "accent.fg",
                                  }}
                                  _today={{
                                    borderColor: "accent",
                                    borderWidth: "1px",
                                  }}
                                >
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}

export default DatePickerBasic
