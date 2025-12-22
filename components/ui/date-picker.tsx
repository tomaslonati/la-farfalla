"use client"

import * as React from "react"
import { format } from "date-fns"
import { es, enUS } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  placeholder: string
  language: "es" | "en"
  minDate?: Date
  defaultMonth?: Date
}

export function DatePicker({ date, setDate, placeholder, language, minDate, defaultMonth }: DatePickerProps) {
  const locale = language === "es" ? es : enUS
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal hover:bg-primary/10 hover:text-primary hover:border-primary",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP", { locale }) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[9999]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => minDate ? date < minDate : date < new Date()}
          initialFocus
          locale={locale}
          defaultMonth={defaultMonth || minDate || new Date()}
        />
      </PopoverContent>
    </Popover>
  )
}
