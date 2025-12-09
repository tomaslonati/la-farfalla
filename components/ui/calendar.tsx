"use client"

import * as React from "react"
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function CustomCaption() {
  const { goToMonth, nextMonth, previousMonth } = useNavigation()
  const { months } = useDayPicker()
  
  const displayMonth = months[0]?.date
  const monthName = displayMonth ? displayMonth.toLocaleDateString('es-ES', { 
    month: 'long', 
    year: 'numeric' 
  }) : ''
  
  return (
    <div className="flex justify-between items-center pt-1 mb-4 px-1">
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-primary/10"
        onClick={() => previousMonth && goToMonth(previousMonth)}
        disabled={!previousMonth}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Mes anterior</span>
      </Button>
      
      <div className="text-sm font-medium capitalize">
        {monthName}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100 hover:bg-primary/10"
        onClick={() => nextMonth && goToMonth(nextMonth)}
        disabled={!nextMonth}
        type="button"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Mes siguiente</span>
      </Button>
    </div>
  )
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "hidden",
        caption_label: "hidden",
        nav: "hidden",
        button_previous: "hidden",
        button_next: "hidden",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative hover:bg-primary/10 hover:text-primary rounded-md transition-colors",
        day_button: "h-9 w-9 p-0 font-normal",
        range_end: "day-range-end",
        selected: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground font-semibold",
        today: "bg-gray-100 text-gray-900 font-semibold",
        outside: "day-outside text-muted-foreground opacity-50",
        disabled: "text-muted-foreground opacity-30 line-through",
        range_middle: "aria-selected:bg-primary/20 aria-selected:text-primary",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        MonthCaption: CustomCaption,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
